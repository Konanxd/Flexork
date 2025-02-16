<?php

namespace App\Http\Controllers;

use App\Models\CV;
use App\Models\Seeker;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CVController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'cv' => 'required|file|mimes:pdf|max:2048',
        ]);

        $seeker = Seeker::where('id_user', Auth::id())
            ->firstOrFail();

        $filename = Str::uuid() . '.' . $request->file('cv')->getClientOriginalExtension();
        $path = $request->file('cv')->storeAs('cvs', $filename, 'public');

        $cv = Cv::create([
            'id_seeker' => $seeker->id_user,
            'path' => $path
        ]);

        return response()->json([
            'message' => 'CV uploaded successfully',
            'cv' => $cv,
            'url' => asset("storage/$path")
        ]);
    }

    public function list()
    {
        $seeker = Seeker::where('id_user', Auth::id())
            ->firstOrFail();
        $cvs = Cv::where('id_seeker', $seeker->id_user)->get();

        return response()->json(['cvs' => $cvs]);
    }

    public function delete($id)
    {
        $seekerId = $seeker = Seeker::where('id_user', Auth::id())
            ->firstOrFail()
            ->pluck('id_seeker');
        $cv = Cv::where('id_seeker', $seekerId)->where('id', $id)->first();

        if (!$cv) {
            return response()->json(['message' => 'CV not found'], 404);
        }

        Storage::delete('public/' . $cv->path);
        $cv->delete();

        return response()->json(['message' => 'CV deleted successfully']);
    }
}
