<?php

namespace App\Http\Controllers;

use App\Models\CV;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Seeker;
use App\Models\Applies;
use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\ValidationException;

class VacancyController extends Controller
{
    public function dashboard()
    {
        $user = Auth::user();
        $seeker = Seeker::where('id_user', Auth::id())
            ->firstOrFail();
        $vacancies = Vacancy::with(['company', 'tags'])
            ->latest('created_at')
            ->take(3)
            ->get();

        $countPending = $seeker->applies()->where('status_apply', 'pending')->count() ?? 0;
        $countAccepted = $seeker->applies()->where('status_apply', 'accepted')->count() ?? 0;
        $countRejected = $seeker->applies()->where('status_apply', 'rejected')->count() ?? 0;

        return Inertia::render('Dashboard', [
            'auth' => [
                'user' => Auth::user() ? [
                    'id' => $user->id_user,
                    'name' => $seeker->name_seeker,
                    'email' => $user->email,
                ] : null,
                'counter' => [
                    'total' => $countPending + $countAccepted + $countRejected,
                    'pending' => $countPending,
                    'accepted' => $countAccepted,
                    'rejected' => $countRejected
                ]
            ],
            'vacancies' => $vacancies
        ]);
    }

    public function index()
    {
        $vacancies = Vacancy::with(['company', 'tags'])->get();
        return Inertia::render('Jobs/JobSearch', [
            'vacancies' => $vacancies
        ]);
    }

    public function search(Request $request)
    {
        $query = Vacancy::with(['company', 'tags']);

        if ($request->filled('keyword')) {
            $query->where('title_vacancy', 'LIKE', '%' . $request->keyword . '%')
                ->orWhereHas('company', function ($q) use ($request) {
                    $q->where('name_company', 'LIKE', '%' . $request->keyword . '%');
                });
        }

        if ($request->filled('jobTypes')) {
            $query->whereHas('tags', function ($q) use ($request) {
                $q->whereIn('tags.name_tag', $request->jobTypes);
            });
        }

        $vacancies = $query->get();

        return response()->json([
            'vacancies' => $vacancies
        ]);
    }

    public function details($id)
    {
        if (Auth::user()->type_user === 'pelamar') {
            $seeker = Seeker::where('id_user', Auth::id())->firstOrFail();
            $cvs = CV::where('id_seeker', $seeker->id_seeker)->get();
        }

        $vacancy = Vacancy::with('company', 'tags')
            ->where('id_vacancy', $id)
            ->get();

        if (Auth::user()->type_user === 'pelamar' && $vacancy->company->id_user != Auth::id()) {
            return back()->with('message', 'Akses ditolak');
        }

        return Inertia::render('Jobs/Details', [
            'vacancy' => $vacancy,
            'auth' => [Auth::user()],
            'cvs' => Auth::user()->type_user === 'pelamar' ? $cvs : null
        ]);
    }

    public function create()
    {
        return Inertia::render('Company/AddJobsForm');
    }

    public function store(Request $request): RedirectResponse
    {
        try {
            $request->validate([
                'title_vacancy' => 'required|string',
                'description_vacancy' => 'required|string',
                'workhours_vacancy' => 'required|string',
                'experience_vacancy' => 'required|string',
                'deadline_vacancy' => 'required|date',
                'jobdesk_vacancy' => 'required|json',
                'benefit_vacancy' => 'required|json',
                'salary_vacancy' => 'required|integer',
            ]);
        } catch (ValidationException $e) {
            dd($e->errors());
        }

        $userId = Auth::id();
        $company = Company::where('id_user', $userId)->firstOrFail();

        // dd($request->all());

        $vacancy = Vacancy::create([
            'id_company' => $company->id_company,
            'title_vacancy' => $request->title_vacancy,
            'description_vacancy' => $request->description_vacancy,
            'workhours_vacancy' => $request->workhours_vacancy,
            'experience_vacancy' => $request->experience_vacancy,
            'deadline_vacancy' => $request->deadline_vacancy,
            'jobdesk_vacancy' => $request->jobdesk_vacancy,
            'benefit_vacancy' => $request->benefit_vacancy,
            'salary_vacancy' => $request->salary_vacancy,
            'is_active' => '1'
        ]);

        return redirect(route('vacancy.details', ['id' => $vacancy->id_vacancy]));
    }

    public function edit($id)
    {
        $vacancy = Vacancy::with('company', 'tags')
            ->where('id_vacancy', $id)
            ->firstOrFail();

        return Inertia::render('Company/EditJobsForm', [
            'id' => $vacancy->id_vacancy,
            'vacancy' => $vacancy
        ]);
    }

    public function apply(Request $request)
    {
        $request->validate([
            'id_cv' => 'required|integer',
            'id_vacancy' => 'required|integer',
        ]);

        Applies::create([
            'id_cv' => $request->id_cv,
            'id_seeker' => Auth::id(),
            'id_vacancy' => $request->id_vacancy,
            'status' => 'pending'
        ]);

        return response()->json([
            'message' => 'Application submitted successfully.'
        ]);
    }

    public function cancel($id)
    {
        $seeker = Seeker::where('id_user', Auth::id())->firstOrFail();
        $applies = Applies::where('id_seeker', $seeker->id_user)
            ->where('id_vacancy', $id)
            ->firstOrFail();

        // dd($applies);

        $applies->delete();

        return response()->json([
            'message' => 'Lamaran berhasil dibatalkan.'
        ]);
    }

    public function status($id)
    {
        $seeker = Seeker::where('id_user', Auth::id())->firstOrFail();
        $applies = Applies::where('id_seeker', $seeker->id_user)
            ->where('id_vacancy', $id)
            ->firstOrFail();

        return response()->json([
            'status' => $applies->status_apply
        ]);
    }
}
