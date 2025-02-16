<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index() {}

    public function store(Request $request)
    {
        $request->validate([
            'id_business' => 'required|string|unique:user',
            'name_company' => 'required|string',
            'email_company' => 'required|email|unique:user',
            'decription_company' => 'required|text',
            'is_verified' => 'required|boolean',
            'agreed_at' => 'date',
            'address_company' => 'required|string',
            'score_company' => 'required|double'
        ]);


        Company::create([
            'id_business' => $request->id_business,
            'name_company' => $request->name_company,
            'email_company' => $request->email_company,
            'description_company' => $request->description_company,
            'is_verified' => '0',
            'address_company' => $request->address_company,
            'score_company' => 10.0
        ]);
    }
}
