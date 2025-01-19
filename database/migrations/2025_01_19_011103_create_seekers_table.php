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
        Schema::create('seekers', function (Blueprint $table) {
            $table->id('id_seeker');
            $table->string('name_seeker');
            $table->string('email_seeker')->unique();
            $table->date('born_date');
            $table->boolean('is_verified');
            $table->string('address_seeker');
            $table->string('phone_seeker');
            $table->float('score_seeker');
            $table->timestamps();

            $table->foreignId('user_id')->constrained('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seekers');
    }
};
