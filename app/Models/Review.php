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
        'id_work_history',
        'score_review',
        'text_review'
    ];

    public function work_history()
    {
        return $this->belongsTo(WorkHistory::class, 'id_work_history', 'id_work_history');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }
}
