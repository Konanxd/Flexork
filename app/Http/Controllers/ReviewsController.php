<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ReviewsController extends Controller
{
    public function check($id)
    {
        $exists = DB::table('reviews')
            ->join('work_history', 'work_history.id_work', 'reviews.id_work')
            ->where('work_history.id_work', '=', $id)
            ->exists();

        return response()->json([
            'exists' => $exists
        ]);
    }

    public function read($id)
    {
        $reviews = DB::table('reviews')
            ->join('work_history', 'work_history.id_work', 'reviews.id_work')
            ->where('id_vacancy', '=', $id)
            ->get();

        return response()->json([
            'reviews' => $reviews
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_user' => 'required|integer',
            'id_work' => 'required|integer',
            'target_review' => 'required',
            'score_review' => 'required|integer',
            'text_review' => 'required|string'
        ]);

        Review::create([
            'id_user' => Auth::id(),
            'id_work' => $request->id_work,
            'target_review' => $request->target_review,
            'score_review' => $request->score_review,
            'text_review' => $request->text_review
        ]);

        return response()->json([
            'message' => 'Ulasan berhasil ditambahkan'
        ]);
    }
}
