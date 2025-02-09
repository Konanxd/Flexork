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
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id('id_lowongan');
            $table->foreignId('id_penyedia')->constrained('companies', 'id_penyedia')->onDelete('cascade');
            $table->string('judul', 255);
            $table->text('deskripsi');
            $table->boolean('status_aktif')->default(1);
            $table->date('tanggal_min');
            $table->date('tanggal_max');
            $table->time('jam_min');
            $table->time('jam_max');
            $table->decimal('gaji_min', 10, 2);
            $table->decimal('gaji_max', 10, 2);
            $table->string('pengalaman', 100);
            $table->enum('pendidikan', ['SD', 'SMP', 'SMA/SMK']);
            $table->text('benefit');
            $table->text('jobdesk');
            $table->float('score_penyedia')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
