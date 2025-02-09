<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seeker extends Model
{
    use HasFactory;

    protected $table = 'seekers';

    protected $fillable = [
        'id_akun', 
        'nama_pelamar', 
        'tgl_lahir', 
        'alamat_pelamar', 
        'score_pelamar', 
        'terverifikasi'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_akun', 'id_akun');
    }

    public function cv()
    {
        return $this->hasMany(CV::class, 'id_pelamar', 'id_pelamar');
    }

    public function applications()
    {
        return $this->hasMany(Application::class, 'id_pelamar', 'id_pelamar');
    }

    public function workHistories()
    {
        return $this->hasMany(WorkHistory::class, 'id_pelamar', 'id_pelamar');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'id_riwayat', 'id_riwayat');
    }
}
