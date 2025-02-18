<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Applies;
use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

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
            'auth' => [
                'user' => Auth::user() ?? null
            ],
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
            'auth' => [
                'user' => Auth::user() ?? null
            ],
            'company' => $company
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name_company' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255',
            'email_company' => 'required|string|lowercase|email|max:255',
            'description_company' => 'required|string',
            'address_company' => 'required|string',
            'photo' => 'image|max:5120'
        ]);

        $user = User::find(Auth::id());

        $user->update([
            'name' => $request->name_company,
            'email' => $request->email
        ]);

        $company = Company::where('id_user', $user->id_user)->firstOrFail();

        if ($company->email_company != $validated['email_company']) {
            $company->email_company = $validated['email_company'];
        }

        $company->name_company = $validated['name_company'];
        $company->description_company = $validated['description_company'];
        $company->address_company = $validated['address_company'];

        if ($request->photo != null) {
            $file = $request->file('photo');
            $encryptedName = Str::random(40) . '.' . $file->getClientOriginalExtension();

            $storagePath = storage_path("app/public/photo/{$user->id_user}");

            if (!file_exists($storagePath)) {
                mkdir($storagePath, 0775, true);
            }

            $file->storeAs("public/photo/{$user->id_user}", $encryptedName);

            chmod($storagePath, 0775);

            $company->photo_path = "public/photo/{$user->id_user}/$encryptedName";
        }

        $company->save();

        return Redirect::route('penyedia.profile');
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
