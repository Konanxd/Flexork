<?php

namespace App\Models;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    protected $table = "vacancies";
    protected $primaryKey = "id_vacancy";

    protected $fillable = [
        'id_company',
        'title_vacancy',
        'description_vacancy',
        'is_active',
        'location_vacancy',
        'deadline_vacancy',
        'minhour',
        'maxhour',
        'experience_vacancy',
        'jobdesk_vacancy',
        'benefit_vacancy',
        'minsalary',
        'maxsalary'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'id_company', 'id_company');
    }

    public function seekers()
    {
        return $this->belongsToMany(Seeker::class, 'applies', 'id_vacancy', 'id_seeker')
            ->withPivot('status', 'applied_at')
            ->withTimestamps();
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
