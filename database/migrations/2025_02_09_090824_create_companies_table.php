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
        Schema::create('companies', function (Blueprint $table) {
            $table->id('id_penyedia');
            $table->foreignId('id_akun')->constrained('users', 'id_akun')->onDelete('cascade');             
            $table->string('nama_usaha', 100);
            $table->text('deskripsi_usaha');
            $table->string('no_usaha', 50);
            $table->text('alamat_penyedia');
            $table->float('score_penyedia')->default(0);
            $table->boolean('terverifikasi')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
