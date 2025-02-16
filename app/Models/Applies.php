<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Applies extends Model
{
    protected $table = "applies";

    protected $fillable = [
        'id_seeker',
        'id_vacancy',
        'message_apply',
        'status_apply'
    ];

    public function seeker()
    {
        return $this->belongsTo(Seeker::class, 'id_seeker');
    }
}
