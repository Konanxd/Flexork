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
            $table->string('title_vacancy');
            $table->text('description_vacancy');
            $table->boolean('is_active');
            $table->date('deadline_vacancy');
            $table->text('jobdesk_vacancy');
            $table->text('benefit_vacancy');
            $table->float('salary_vacancy');
            $table->timestamps('created_at_vacancy');

            $table->foreignId('id_company')->constrained('company');
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
