<?php

namespace App\Models;

use App\Models\User;
use App\Models\WorkHistory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table = 'reviews';
    protected $primaryKey = 'id_review';

    protected $fillable = [
        'id_user',
        'id_work',
        'target_review',
        'score_review',
        'text_review'
    ];

    public function work_history()
    {
        return $this->belongsTo(WorkHistory::class, 'id_work', 'id_work');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }
}
