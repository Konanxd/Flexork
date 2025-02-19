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
            $table->id('id_work');
            $table->unsignedBigInteger('id_seeker');
            $table->unsignedBigInteger('id_vacancy');
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();

            $table->foreign('id_vacancy')->references('id_vacancy')->on('vacancies');
            $table->foreign('id_seeker')->references('id_seeker')->on('seekers');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_histories');
        Schema::dropIfExists('work_history');
    }
};
