<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id('id_lamaran');
            $table->foreignId('id_pelamar')->constrained('seekers', 'id_pelamar')->onDelete('cascade');
            $table->foreignId('id_lowongan')->constrained('vacancies', 'id_lowongan')->onDelete('cascade');
            $table->string('nama_cv', 255);
            $table->enum('persetujuan', ['diproses', 'ditolak', 'diterima'])->default('diproses');
            $table->text('catatan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
