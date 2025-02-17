<?php

namespace App\Policies;

use App\Models\CV;
use App\Models\User;
use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Auth\Access\Response;

class CVPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function view(User $user, CV $cv)
    {
        // Get the company of the logged-in user
        $company = Company::where('id_user', $user->id_user)->firstOrFail();

        // Check if there is a vacancy that the company owns and the seeker has applied to
        $hasVacancy = Vacancy::whereHas('seekers', function ($query) use ($cv, $company) {
            $query->where('id_cv', $cv->id_cv)
                ->where('id_company', $company->id_company); // Ensure the vacancy belongs to the company
        })->exists();

        if ($hasVacancy) {
            return Response::allow();
        }

        return Response::deny('Anda tidak memiliki izin untuk melihat CV ini.');
    }
}
