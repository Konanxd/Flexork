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
        Schema::create('work_histories', function (Blueprint $table) {
            $table->id('id_riwayat');
            $table->foreignId('id_pelamar')->constrained('seekers', 'id_pelamar')->onDelete('cascade');
            $table->foreignId('id_lowongan')->constrained('vacancies', 'id_lowongan')->onDelete('cascade');
            $table->string('nama_usaha', 100);
            $table->string('nama_pelamar', 100);
            $table->float('score')->default(0);
            $table->date('tgl_mulai');
            $table->date('tgl_akhir')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work__histories');
    }
};
