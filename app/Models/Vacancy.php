<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;

    protected $table = 'lowongan';

    protected $fillable = [
        'id_penyedia', 
        'judul', 
        'deskripsi', 
        'status_aktif', 
        'tanggal_min', 
        'tanggal_max', 
        'jam_min', 
        'jam_max', 
        'gaji_min', 
        'gaji_max', 
        'pengalaman', 
        'pendidikan', 
        'benefit', 
        'jobdesk', 
        'score_penyedia'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'id_penyedia', 'id_penyedia');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'lowongan_tag', 'id_lowongan', 'id_tag');
    }

    public function applications()
    {
        return $this->hasMany(Application::class, 'id_lowongan', 'id_lowongan');
    }
}
