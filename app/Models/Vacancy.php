<?php

namespace App\Models;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    protected $table = "vacancies";

    protected $fillable = [
        'id_company',
        'title_vacancy',
        'description_vacancy',
        'is_active',
        'deadline_vacancy',
        'jobdesk_vacancy',
        'benefit_vacancy',
        'salaray_vacancy'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'id_company', 'id_company');
    }

    public function tags()
    {
        return $this->belongsToMany(
            Tag::class,
            'vacancy_tags',
            'id_vacancy',
            'id_tag',
            'id_vacancy',
            'id_tag'
        );
    }
}
