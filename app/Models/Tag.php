<?php

namespace App\Models;

use App\Models\Vacancy;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = "tags";

    public function vacancies()
    {
        return $this->belongsToMany(
            Vacancy::class,
            'vacancy_tags',
            'id_tag',
            'id_vacancy',
            'id_tag',
            'id_vacancy'
        );
    }
}
