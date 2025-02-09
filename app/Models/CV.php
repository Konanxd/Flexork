<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CV extends Model
{
    use HasFactory;

    protected $table = 'cv';

    protected $fillable = [
        'id_pelamar', 
        'nama_cv'
    ];

    public function seeker()
    {
        return $this->belongsTo(Seeker::class, 'id_pelamar', 'id_pelamar');
    }
}
