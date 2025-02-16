<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seeker extends Model
{
    protected $table = "seekers";
    protected $primaryKey = "id_seeker";

    protected $fillable = [
        "id_user",
        "name_seeker",
        "gender_seeker",
        "born_date",
        "is_verified",
        "address_seeker",
        "phone_seeker",
        "score_seeker"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vacancies()
    {
        return $this->belongsToMany(Vacancy::class, 'applies', 'id_seeker', 'id_vacancy')
            ->withPivot('status', 'applied_at')
            ->withTimestamps();
    }

    public function applies()
    {
        return $this->hasMany(Applies::class, 'id_seeker');
    }
}
