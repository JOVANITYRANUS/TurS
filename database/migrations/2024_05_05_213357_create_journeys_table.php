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
        Schema::create('journeys', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('route_id');
            $table->unsignedBigInteger('guide_id');
            $table->unsignedBigInteger('driver_id');
            $table->unsignedBigInteger('transport_id');
            $table->dateTime('fecha');
            $table->integer('cupo');
            $table->string('status');
            $table->time('hora_salida');
            $table->time('hora_llegada')->nullable();
            $table->timestamps();
        
            $table->foreign('route_id')->references('id')->on('routes');
            $table->foreign('guide_id')->references('id')->on('guides');
            $table->foreign('transport_id')->references('id')->on('transports');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('journeys');
    }
};
