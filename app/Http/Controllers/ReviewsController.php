<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewsController extends Controller
{
    public function reviewSeeker(Request $request)
    {
        $request->validate([
            'id_user' => 'required|integer',
            'id_work_history' => 'required|integer',
            'score_review' => 'required|integer',
            'text_review' => 'required|string'
        ]);

        Review::create([
            'id_user' => Auth::id(),
            'id_work_history' => $request->id_work_history,
            'score_review' => $request->score_review,
            'text_review' => $request->text_review
        ]);

        return response()->json([
            'message' => 'Ulasan berhasil ditambahkan'
        ]);
    }
}
