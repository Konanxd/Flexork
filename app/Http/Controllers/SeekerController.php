<?php

namespace App\Http\Controllers;

use App\Models\Applies;
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

    public function verified() {}
}
