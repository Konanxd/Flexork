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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id('id_ulasan');
            $table->foreignId('id_akun')->constrained('users', 'id_akun')->onDelete('cascade');
            $table->foreignId('id_riwayat')->constrained('work_histories', 'id_riwayat')->onDelete('cascade');
            $table->enum('jenis_ulasan', ['pelamar_ke_penyedia', 'penyedia_ke_pelamar']);
            $table->text('ulasan');
            $table->float('score')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
