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
            $table->text('message_apply');
            $table->enum('status_apply', ['pending', 'accepted', 'rejected']);
            $table->timestamps('created_at_apply');

            $table->foreignId('id_vacancy')->constrained('vacancies');
            $table->foreignId('id_seeker')->constrained('seekers');
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
