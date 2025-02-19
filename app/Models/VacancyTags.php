<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class VacancyTags extends Pivot
{
    protected $table = 'vacancy_tags';
    protected $fillable = ['id_vacancy', 'id_tag'];
}
