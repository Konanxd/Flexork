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
        Schema::create('company', function (Blueprint $table) {
            $table->id('id_company');
            $table->string('id_business')->unique();
            $table->string('name_company');
            $table->text('description_company');
            $table->string('email_company')->unique();
            $table->boolean('iS_verified');
            $table->timestamp('agreed_at')->nullable();
            $table->string('address_company');
            $table->float('score_company');
            $table->timestamps();

            $table->foreignId('user_id')->constrained('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company');
    }
};
