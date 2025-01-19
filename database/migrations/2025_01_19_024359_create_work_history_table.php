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
        Schema::create('work_history', function (Blueprint $table) {
            $table->id('id_work_history');
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();

            $table->foreignId('id_seeker')->constrained('seekers');
            $table->foreignId('id_vacancy')->constrained('vacancies');
            $table->foreignId('id_company')->constrained('company');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_history');
    }
};
