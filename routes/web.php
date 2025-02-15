<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

// Route::middleware('auth')->group(function () {

// });

Route::get('/details', function () {
    return Inertia::render('Jobs/Details');
});

Route::get('/profile', function (){
    return Inertia::render('Profile/profile');
});

Route::get('/profile/edit', function (){
    return Inertia::render('Profile/AccountEdit');
});

Route::get('/search', function (){
    return Inertia::render('Jobs/JobSearch');
});

Route::get('/company/details', function (){
    return Inertia::render('Company/CompanyDetails');
});
