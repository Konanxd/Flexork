<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CV extends Model
{
    protected $table = "cv_s";
    protected $primaryKey = "id_cv";

    protected $fillable = [
        'id_seeker',
        'cv_name',
        'original_cv_name',
        'path'
    ];

    public function seeker()
    {
        return $this->belongsTo(Seeker::class, 'id_seeker');
    }
}
