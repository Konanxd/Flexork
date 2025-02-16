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
                'user' => Auth::user() ? [
                    'id' => $user->id_user,
                    'name' => $company->name_company,
                    'email' => $user->email,
                ] : null,
                'vacancies' => $vacancies ?? []
            ]
        ]);
    }

    public function details($id)
    {
        $vacancy = Vacancy::with('company')
            ->where('id_vacancy', $id)
            ->firstOrFail();

        $appliers = Applies::with('seeker')
            ->where('id_vacancy', $id)
            ->get();

        return Inertia::render('Company/SeekerList', [
            'vacancy' => $vacancy,
            'appliers' => $appliers
        ]);
    }

    public function create()
    {
        return Inertia::render('Auth/PenyediaRegister');
    }
}
