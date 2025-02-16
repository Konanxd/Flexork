<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CVController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VacancyController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get('/lowongan/{id}', [VacancyController::class, 'details'])->name('vacancy.details');

Route::middleware('auth')->get('/dashboard', function () {
    if (Auth::user()->type_user === 'pelamar') {
        return redirect()->route('dashboard.pelamar');
    } elseif (Auth::user()->type_user === 'penyedia') {
        return redirect()->route('dashboard.penyedia');
    }
    abort(403); // Just in case an unknown role is detected
})->name('dashboard');



Route::middleware(['auth', 'seeker'])->group(function () {
    Route::get('/dashboard/pelamar', [VacancyController::class, 'dashboard'])
        ->name('dashboard.pelamar');
    Route::get('/cari', [VacancyController::class, 'index'])->name('vacancy.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/api/upload-cv', [CVController::class, 'store'])->name('cv.store');
    Route::get('/api/list-cv', [CvController::class, 'list'])->name('cv.list');
    Route::delete('/api/delete-cv/{cvId}', [CVController::class, 'destroy'])->name('cv.destroy');;
});

Route::middleware(['auth', 'company'])->group(function () {
    Route::get('/dashboard/penyedia', [CompanyController::class, 'index'])
        ->name('dashboard.penyedia');
    Route::get('/dashboard/penyedia/{id}/daftar_pelamar', [CompanyController::class, 'details'])
        ->name('penyedia.details');
    Route::get('/buka-lowongan', [VacancyController::class, 'create'])
        ->name('vacancy.create');
});

require __DIR__ . '/auth.php';


Route::get('/details', function () {
    return Inertia::render('Jobs/Details');
});

Route::get('/profile/edit', function () {
    return Inertia::render('Profile/AccountEdit');
});

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
