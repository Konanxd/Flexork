<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Applies;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VacancyController extends Controller
{
    public function index()
    {
        $vacancies = Vacancy::with(['company', 'tags'])->get();
        return Inertia::render('Jobs/JobSearch', [
            'vacancies' => $vacancies
        ]);
    }

    public function details($id)
    {
        $vacancy = Vacancy::with('company', 'tags')
            ->where('id_vacancy', $id)
            ->get();
        return Inertia::render('Jobs/Details', [
            'vacancy' => $vacancy
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_company' => 'required|exists:companies,id_company',
            'title_vacancy' => 'required|string',
            'description_vacancy' => 'required|string',
            'deadline_vacancy' => 'required|date',
            'jobdesk_vacancy' => 'required|string',
            'benefit_vacancy' => 'required|string',
            'salary_vacancy' => 'required|double',
        ]);

        $userId = Auth::user()->id;
        $user = User::find($userId);

        Vacancy::create([
            'id_company' => $user->company->id,
            'title_vacancy' => $request->title_vacancy,
            'description_vacancy' => $request->description_vacancy,
            'deadline_vacancy' => $request->deadline_vacancy,
            'jobdesk_vacancy' => $request->jobdesk_vacancy,
            'benefit_vacancy' => $request->benefit_vacancy,
            'salary_vacancy' => $request->salary_vacancy,
        ]);

        return to_route('vacancy.details', $request->id_vacancy);
    }

    public function apply(Request $request, Vacancy $vacancy)
    {
        $request->validate([
            'id_seeker' => 'required|exists:seekers,id_seeker',
            'id_vacancy' => 'required|exists:vacancies,id_vacancy',
            'message_apply' => 'required|string'
        ]);

        $userId = Auth::user()->id;
        $user = User::find($userId);

        Applies::create([
            'id_seeker' => $user->seeker->id,
            'id_vacancy' => $vacancy->id,
            'message_apply' => 'required|string'
        ]);

        return to_route('vacancy.details', $request->id_vacancy);
    }
}
