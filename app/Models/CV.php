<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CV extends Model
{
    protected $table = "cv_s";

    protected $fillable = [
        'id_seeker',
        'cv_name',
        'original_cv_name',
        'path'
    ];
}
