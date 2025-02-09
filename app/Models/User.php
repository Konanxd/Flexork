<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'username',
        'email',
        'usertype',
        'password',
        'foto_akun',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function seeker()
    {
        return $this->hasOne(Seeker::class, 'id_akun', 'id_akun');
    }

    public function company()
    {
        return $this->hasOne(Company::class, 'id_akun', 'id_akun');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'id_akun', 'id_akun');
    }

    public function applications()
    {
        return $this->hasManyThrough(Application::class, Seeker::class, 'id_akun', 'id_pelamar', 'id_akun', 'id_lamaran');
    }
}
