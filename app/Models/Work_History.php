<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkHistory extends Model
{
    use HasFactory;

    protected $table = 'riwayat_kerja';

    protected $fillable = [
        'id_pelamar',
        'id_lowongan',
        'nama_usaha',
        'nama_pelamar',
        'score',
        'tgl_mulai',
        'tgl_akhir'
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
