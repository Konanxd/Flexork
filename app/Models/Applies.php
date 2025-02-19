<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Applies extends Model
{
    protected $table = "applies";
    protected $primaryKey = "id_cv";

    protected $fillable = [
        'id_seeker',
        'id_cv',
        'id_vacancy',
        'status_apply'
    ];

    public function vacancy()
    {
        return $this->belongsTo(Vacancy::class, 'id_vacancy', 'id_vacancy');
    }

    public function cv()
    {
        return $this->belongsTo(CV::class, 'id_cv', 'id_cv');
    }
}
