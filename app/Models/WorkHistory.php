<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WorkHistory extends Model
{
    protected $table = 'work_histories';
    protected $primaryKey = 'id_work_history';

    protected $fillable = [
        'id_seeker',
        'id_vacancy',
        'start_date',
        'end_date'
    ];

    public function seeker()
    {
        return $this->belongsTo(Seeker::class, 'id_seeker', 'id_seeker');
    }

    public function vacancy()
    {
        return $this->belongsTo(Vacancy::class, 'id_vacancy', 'id_vacancy');
    }
}
