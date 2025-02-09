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
        Schema::create('seekers', function (Blueprint $table) {
            $table->id('id_pelamar');
            $table->foreignId('id_akun')->constrained('users', 'id_akun')->onDelete('cascade');
            $table->string('nama_pelamar', 100);
            $table->date('tgl_lahir');
            $table->text('alamat_pelamar');
            $table->float('score_pelamar')->default(0);
            $table->boolean('terverifikasi')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seekers');
    }
};
