<?php

namespace App\Http\Controllers;

use App\Models\CV;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Seeker;
use Illuminate\Support\Str;
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
        $cvs = CV::where('id_seeker', $seeker->id_seeker)->get();

        return Inertia::render('Profile/Profile', [
            'auth' => [
                'user' => Auth::user() ?? null,
                'seeker' => $seeker,
                'cvs' => $cvs
            ],
            'status' => session('status'),
        ]);
    }

    public function edit(Request $request): Response
    {
        $user = Auth::user();
        $seeker = Seeker::where('id_user', Auth::id())->firstOrFail();

        return Inertia::render('Profile/AccountEdit', [
            'auth' => [
                'user' => Auth::user() ?? null,
                'seeker' => $seeker
            ],
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->validated([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'born_date' => 'required|date',
            'address' => 'required|string',
            'phone_seeker' => 'required|string|unique:seekers',
            'photo' => 'file|mimes:pdf|max:2048'
        ]);
        // $request->user()->fill($request->validated());

        // if ($request->user()->isDirty('email')) {
        //     $request->user()->email_verified_at = null;
        // }

        // $request->user()->save();

        $user = User::find(Auth::id());

        $user->update([
            'name' => $request->name,
            'email' => $request->email
        ]);

        if ($request->photo != null) {
            $file = $request->file('photo');
            $encryptedName = Str::random(40) . '.' . $file->getClientOriginalExtension();

            $storagePath = storage_path("app/public/photo/{$user->id_user}");

            if (!file_exists($storagePath)) {
                mkdir($storagePath, 0775, true);
            }

            $file->storeAs("public/photo/{$user->id_user}", $encryptedName);

            chmod($storagePath, 0775);

            $user->update(['photo_path' => "public/photo/{$user->id_user}/$encryptedName"]);
        }

        $seeker = Seeker::where('id_user', Auth::id())->firstOrFail();

        $seeker->update([
            'name_seeker' => $request->name,
            'born_date' => $request->born_date,
            'address_seeker' => $request->address,
            'phone_seeker' => $request->phone_seeker
        ]);

        return Redirect::route('profile.index');
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
