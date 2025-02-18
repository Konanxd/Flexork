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
            $table->id('id_vacancy');
            $table->unsignedBigInteger('id_company');
            $table->string('title_vacancy');
            $table->text('description_vacancy');
            $table->boolean('is_active');
            $table->location('location_vacancy');
            $table->date('deadline_vacancy');
            $table->json('jobdesk_vacancy');
            $table->json('benefit_vacancy');
            $table->float('salary_vacancy');
            $table->string('workhours_vacancy');
            $table->string('experience_vacancy');
            $table->timestamps();

            $table->foreign('id_company')->references('id_company')->on('companies');
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
