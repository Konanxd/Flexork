<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $table = 'ulasan';

    protected $fillable = [
        'id_akun',
        'id_riwayat',
        'jenis_ulasan',
        'ulasan',
        'score'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_akun', 'id_akun');
    }

    public function workHistory()
    {
        return $this->belongsTo(WorkHistory::class, 'id_riwayat', 'id_riwayat');
    }
}
