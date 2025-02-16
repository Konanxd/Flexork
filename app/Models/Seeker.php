<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seeker extends Model
{
    protected $table = "seekers";

    protected $fillable = [
        "name_seeker",
        "email_seeker",
        "born_date",
        "is_verified",
        "address_seeker",
        "phone_seeker",
        "score_seeker"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
