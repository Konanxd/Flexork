<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Applies;
use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $company = Company::where('id_user', Auth::id())
            ->firstOrFail();
        $vacancies = Vacancy::with(['company', 'tags'])
            ->where('id_company', $company->id_company)
            ->get();

        return Inertia::render('Company/CompanyDashboard', [
            'auth' => [
                'user' => Auth::user() ?? null,
                'vacancies' => $vacancies ?? []
            ]
        ]);
    }

    public function profile()
    {
        $company = Company::where('id_user', Auth::id())->firstOrFail();

        return Inertia::render('Company/CompanyProfile', [
            'auth' => [
                'user' => Auth::user() ?? []
            ],
            'company' => $company
        ]);
    }

    public function details($id)
    {
        $vacancy = Vacancy::with('company')
            ->where('id_vacancy', $id)
            ->firstOrFail();

        $appliers = Applies::with(['vacancy.company', 'cv.seeker'])
            ->where('id_vacancy', $vacancy->id_vacancy)
            ->get()
            ->map(function ($apply) {
                return [
                    'id_apply' => $apply->id_apply,
                    'status_apply' => $apply->status_apply,
                    'cv' => [
                        'id' => $apply->cv->id_cv,
                        'seeker' => [
                            'name_seeker' => $apply->cv->seeker->name_seeker
                        ],
                        'cv_name' => $apply->cv->original_cv_name,
                        'cv_url' => asset("storage/cvs/{$apply->cv->id_seeker}/{$apply->cv->cv_name}")
                    ]
                ];
            });

        return Inertia::render('Company/SeekerList', [
            'vacancy' => $vacancy,
            'appliers' => $appliers
        ]);
    }

    public function create()
    {
        return Inertia::render('Auth/PenyediaRegister');
    }

    public function edit()
    {
        $company = Company::where('id_user', Auth::id())->firstOrFail();

        return Inertia::render('Company/CompanyEdit', [
            'company' => $company
        ]);
    }

    public function accept($id_apply)
    {
        $apply = Applies::where('id_apply', $id_apply)->firstOrFail();
        $apply->status_apply = 'accepted';
        $apply->save();
        return response()->json(['message' => 'Lamaran diterima']);
    }

    public function reject($id_apply)
    {
        $apply = Applies::findOrFail($id_apply);
        $apply->status_apply = 'rejected';
        $apply->save();
        return response()->json(['message' => 'Lamaran ditolak']);
    }
}
