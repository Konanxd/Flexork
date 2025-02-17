<?php

namespace App\Http\Controllers;

use App\Models\CV;
use App\Models\Seeker;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Gate;



class CVController extends Controller
{
    public function show($id)
    {
        $cv = CV::where('id_cv', $id)->firstOrFail();

        Gate::authorize('view', $cv);

        $fixedPath = "app\\" . str_replace("/", "\\", $cv->path);

        return response()->file(storage_path("{$fixedPath}"));
    }

    public function store(Request $request)
    {
        $request->validate([
            'cv' => 'required|file|mimes:pdf|max:2048',
        ]);

        $seeker = Seeker::where('id_user', Auth::id())->firstOrFail();

        $file = $request->file('cv');
        $originalName = $file->getClientOriginalName();
        $encryptedName = Str::random(40) . '.' . $file->getClientOriginalExtension();

        // Define the storage path without the "public/" prefix
        $storagePath = storage_path("app/public/cvs/{$seeker->id_seeker}");

        // Ensure the directory exists, create if not
        if (!file_exists($storagePath)) {
            mkdir($storagePath, 0775, true);
        }

        // Store the file under the public storage path
        $file->storeAs("public/cvs/{$seeker->id_seeker}", $encryptedName);

        // Adjust permissions if needed (optional)
        chmod($storagePath, 0775);

        // Store the file information in the database
        $cv = Cv::create([
            'id_seeker' => $seeker->id_seeker,
            'cv_name' => $encryptedName,
            'original_cv_name' => $originalName,
            'path' => "public/cvs/{$seeker->id_seeker}/$encryptedName"
        ]);

        // Return the file URL correctly using the asset helper
        return response()->json([
            'message' => 'CV berhasil ditambahkan!',
            'cv' => $cv,
            'url' => asset("storage/cvs/{$seeker->id_seeker}/$encryptedName")
        ]);
    }



    public function list()
    {
        $seeker = Seeker::where('id_user', Auth::id())
            ->firstOrFail();
        $cvs = Cv::where('id_seeker', $seeker->id_user)->get();

        return response()->json(['cvs' => $cvs]);
    }

    public function destroy($id)
    {
        $seeker = Seeker::where('id_user', Auth::id())
            ->firstOrFail();
        $cv = Cv::where('id_seeker', $seeker->id_seeker)
            ->where('id', $id)->first();

        if (!$cv) {
            return response()->json(['message' => 'CV not found'], 404);
        }

        Storage::delete('public/' . $cv->path);
        $cv->delete();

        return response()->json(['message' => 'CV deleted successfully']);
    }
}
