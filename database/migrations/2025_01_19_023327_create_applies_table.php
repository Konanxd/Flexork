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
        Schema::create('applies', function (Blueprint $table) {
            $table->id('id_apply');
            $table->unsignedBigInteger('id_seeker');
            $table->unsignedBigInteger('id_vacancy');
            $table->text('message_apply');
            $table->enum('status_apply', ['pending', 'accepted', 'rejected']);
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
        Schema::dropIfExists('applies');
    }
};
