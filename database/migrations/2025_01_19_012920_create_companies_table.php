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
        Schema::create('companies', function (Blueprint $table) {
            $table->id('id_company');
            $table->unsignedBigInteger('id_user');
            $table->string('id_business')->unique();
            $table->string('name_company');
            $table->text('description_company');
            $table->string('email_company')->unique();
            $table->boolean('is_verified');
            $table->timestamp('agreed_at')->nullable();
            $table->string('address_company');
            $table->float('score_company');
            $table->timestamps();

            $table->foreign('id_user')->references('id_user')->on('users');
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
