<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Seeker;
use App\Models\Company;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function storePelamar(Request $request): RedirectResponse
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'gender' => 'required|string',
            'password' => ['required', 'string', 'min:8', 'confirmed', Rules\Password::defaults()],
            'born_date' => 'required|date',
            'address' => 'required|string',
            'phone_seeker' => 'required|string|unique:seekers',
        ]);

        $user = User::create([
            'name' => Str::title($request->name),
            'email' => $request->email,
            'type_user' => "pelamar",
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        Seeker::create([
            'id_user' => $user->id_user,
            'name_seeker' => $request->name,
            'gender_seeker' => $request->gender,
            'born_date' => $request->born_date,
            'is_verified' => '0',
            'address_seeker' => $request->address,
            'phone_seeker' => $request->phone_seeker,
            'score_seeker' => 10.0
        ]);

        return redirect(route('dashboard.pelamar', absolute: false));
    }

    public function storePenyedia(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'string', 'min:8', 'confirmed', Rules\Password::defaults()],
            'email_company' => 'required|string|lowercase|email|max:255|unique:companies',
            'id_business' => 'required|string|unique:companies',
            'description' => 'required|string',
            'address' => 'required|string',
        ]);

        $user = User::create([
            'name' => Str::title($request->name),
            'email' => $request->email,
            'type_user' => "penyedia",
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        Company::create([
            'id_user' => $user->id_user,
            'name_company' => Str::title($request->name),
            'id_business' => $request->id_business,
            'email_company' => $request->email_company,
            'description_company' => $request->description,
            'address_company' => $request->address,
            'is_verified' => '0',
            'score_company' => 10.0
        ]);

        return redirect(route('dashboard.penyedia', absolute: false));
    }
}
