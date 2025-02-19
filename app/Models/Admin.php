<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admins';

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }
}
