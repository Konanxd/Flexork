<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $table = 'tag';

    protected $fillable = [
        'nama_tag'
    ];

    public function vacancies()
    {
        return $this->belongsToMany(Vacancy::class, 'lowongan_tag', 'id_tag', 'id_lowongan');
    }
}
