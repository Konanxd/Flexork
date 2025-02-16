<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CVController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VacancyController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', [VacancyController::class, 'dashboard'])
    ->name('dashboard');
Route::get('/cari', [VacancyController::class, 'index'])->name('vacancy.index');
Route::get('/lowongan/{id}', [VacancyController::class, 'details'])->name('vacancy.details');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/api/upload-cv', [CVController::class, 'store'])->name('cv.store');
    Route::get('/api/list-cv', [CvController::class, 'list'])->name('cv.list');
    Route::delete('/api/delete-cv{cvId}', [CVController::class, 'destroy'])->name('cv.destroy');;
});

require __DIR__ . '/auth.php';

// Route::middleware('auth')->group(function () {

// });

Route::get('/details', function () {
    return Inertia::render('Jobs/Details');
});

// Route::get('/profile', function () {
//     return Inertia::render('Profile/profile');
// });

Route::get('/profile/edit', function () {
    return Inertia::render('Profile/AccountEdit');
});

Route::get('/search', function () {
    return Inertia::render('Jobs/JobSearch');
});

Route::get('/company/details', function () {
    return Inertia::render('Company/CompanyDetails');
});
