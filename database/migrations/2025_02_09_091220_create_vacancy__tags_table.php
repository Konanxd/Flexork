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
        Schema::create('vacancy_tag', function (Blueprint $table) {
            $table->foreignId('id_lowongan')->constrained('vacancies', 'id_lowongan')->onDelete('cascade');
            $table->foreignId('id_tag')->constrained('tags', 'id_tag')->onDelete('cascade');
            $table->primary(['id_lowongan', 'id_tag']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancy__tags');
    }
};
