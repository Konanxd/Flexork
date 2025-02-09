<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $table = 'lamaran';

    protected $fillable = [
        'id_pelamar',
        'id_lowongan',
        'nama_cv',
        'persetujuan',
        'catatan'
    ];

    public function seeker()
    {
        return $this->belongsTo(Seeker::class, 'id_pelamar', 'id_pelamar');
    }

    public function vacancy()
    {
        return $this->belongsTo(Vacancy::class, 'id_lowongan', 'id_lowongan');
    }
}
