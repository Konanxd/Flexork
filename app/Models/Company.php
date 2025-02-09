<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $table = 'companies';

    protected $fillable = [
        'id_akun', 
        'nama_usaha', 
        'deskripsi_usaha', 
        'no_usaha', 
        'alamat_penyedia', 
        'score_penyedia', 
        'terverifikasi'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_akun', 'id_akun');
    }

    public function jobVacancies()
    {
        return $this->hasMany(Vacancy::class, 'id_penyedia', 'id_penyedia');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'id_riwayat', 'id_riwayat');
    }
}
