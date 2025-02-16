<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = "companies";

    protected $fillable = [
        "id_company",
        "id_business",
        "name_company",
        "description_company",
        "email_company",
        "is_verified",
        "address_company",
        "score_company"
    ];

    protected function casts()
    {
        return [
            'agreed_at' => 'datetime'
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vacancies()
    {
        return $this->hasMany(Vacancy::class, 'id_company', 'id_company');
    }
}
