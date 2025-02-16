<?php

namespace App\Http\Controllers;

use App\Models\CV;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Seeker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfileController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $seeker = Seeker::where('id_user', Auth::id())->firstOrFail();

        return Inertia::render('Profile/Profile', [
            'auth' => [
                'user' => Auth::user() ? [
                    'id' => $user->id_user,
                    'name' => $seeker->name_seeker,
                    'email' => $user->email,
                ] : null,

            ]
        ]);
    }

    public function edit(Request $request): Response
    {
        $user = Auth::user();
        $seeker = Seeker::where('id_user', Auth::id())->firstOrFail();
        $cvs = CV::where('id_seeker', $seeker->id_seeker)->get();

        return Inertia::render('Profile/Profile', [
            'auth' => [
                'user' => Auth::user() ? [
                    'id' => $user->id_user,
                    'name' => $seeker->name_seeker,
                    'email' => $user->email,
                ] : null,
                'cvs' => $cvs
            ],
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
