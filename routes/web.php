<?php

use Inertia\Inertia;
use App\Models\Review;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CVController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\VacancyController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware('guest')->get('/', function () {
    return redirect()->route('dashboard.pelamar');
});

Route::middleware('auth')->get('/dashboard', function () {
    if (Auth::user()->type_user === 'pelamar') {
        return redirect()->route('dashboard.pelamar');
    } elseif (Auth::user()->type_user === 'penyedia') {
        return redirect()->route('dashboard.penyedia');
    }
    abort(403);
})->name('dashboard');

Route::get('/dashboard/pelamar', [VacancyController::class, 'dashboard'])
    ->name('dashboard.pelamar');
Route::get('/cari', [VacancyController::class, 'index'])->name('vacancy.index');
Route::get('/lowongan/{id}', [VacancyController::class, 'details'])->name('vacancy.details');



Route::middleware(['auth', 'seeker'])->group(function () {
    Route::get('/dashboard/pelamar', [VacancyController::class, 'dashboard'])
        ->name('dashboard.pelamar');

    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/api/search', [VacancyController::class, 'search'])->name('vacancy.search');

    Route::post('/api/upload-cv', [CVController::class, 'store'])->name('cv.store');
    Route::get('/api/list-cv', [CvController::class, 'list'])->name('cv.list');
    Route::delete('/api/delete-cv/{cvId}', [CVController::class, 'destroy'])->name('cv.destroy');;
    Route::post('/api/apply', [VacancyController::class, 'apply'])->name('vacancy.apply');
    Route::get('/api/apply-status/{id}', [VacancyController::class, 'status'])->name('vacancy.status');
    Route::delete('/api/cancel/{id}', [VacancyController::class, 'cancel'])->name('vacancy.cancel');
});

Route::middleware(['auth', 'company'])->group(function () {
    Route::get('/dashboard/penyedia', [CompanyController::class, 'index'])
        ->name('dashboard.penyedia');
    Route::get('/dashboard/penyedia/{id}/daftar_pelamar', [CompanyController::class, 'details'])
        ->name('penyedia.details');

    Route::get('/profil', [CompanyController::class, 'profile'])
        ->name('penyedia.profile');
    Route::get('/profil/edit', [CompanyController::class, 'edit'])
        ->name('penyedia.edit');

    Route::get('/buka-lowongan', [VacancyController::class, 'create'])
        ->name('vacancy.create');
    Route::post('/buka-lowongan', [VacancyController::class, 'store'])
        ->name('vacancy.store');
    Route::get('/edit-lowongan/{id}', [VacancyController::class, 'edit'])
        ->name('vacancy.edit');
    Route::put('/edit-lowongan/{id}', [VacancyController::class, 'update'])
        ->name('vacancy.update');

    Route::put('/api/applies/{id}/accept', [CompanyController::class, 'accept'])->name('applies.accept');
    Route::put('/api/applies/{id}/reject', [CompanyController::class, 'reject'])->name('applies.reject');

    Route::get('/cv/{id}', [CVController::class, 'show'])->name('cv.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/api/reviews/{id}', [ReviewsController::class, 'read'])
        ->name('review.read');
    Route::get('/api/reviews/check/{id}', [ReviewsController::class, 'check'])
        ->name('review.check');
    Route::post('/api/reviews/{id}', [ReviewsController::class, 'store'])
        ->name('review.store');
});


require __DIR__ . '/auth.php';


Route::get('/details', function () {
    return Inertia::render('Jobs/Details');
});

// Route::get('/profile/edit', function () {
//     return Inertia::render('Profile/AccountEdit');
// });

Route::get('/search', function () {
    return Inertia::render('Jobs/JobSearch');
});

Route::get('/company/details', function () {
    return Inertia::render('Company/CompanyDetails');
});

Route::get('/company/dashboard', function () {
    return Inertia::render('Company/CompanyDashboard');
});

Route::get('/company/list-pelamar', function () {
    return Inertia::render('Company/SeekerList');
});

Route::get('/company/profile', function () {
    return Inertia::render('Company/CompanyProfile');
});

Route::get('/company/job/preview', function () {
    return Inertia::render('Company/JobPreview');
});
Route::get('/company/job/add', function () {
    return Inertia::render('Company/AddJobsForm');
});

Route::get('/company/job/userpreview', function () {
    return Inertia::render('Profile/UserPreview');
});
