<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Seeker;
use Illuminate\Http\Request;

class SeekerController extends Controller
{
    public function create()
    {
        return Inertia::render(
            'Auth/PelamarRegister'
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_user' => 'required|exists:user,id_user',
            'name_seeker' => 'required|string',
            'email_seeker' => 'required|email|unique:user',
            'born_date' => 'required|date',
            'is_verified' => 'required|boolean',
            'address_seeker' => 'required|string',
            'phone_seeker' => 'required|string|unique:user',
            'score_seeker' => 'required|double'
        ]);

        Seeker::create([
            'id_user' => $request->user()->id_user,
            'name_seeker' => $request->name_seeker,
            'email_seeker' => $request->email_seeker,
            'born_date' => $request->born_date,
            'is_verified' => '0',
            'address_seeker' => $request->address_seeker,
            'phone_seeker' => $request->phone_seeker,
            'score_seeker' => 10.0
        ]);

        return to_route('dashboard');
    }

    public function verified() {}
}
