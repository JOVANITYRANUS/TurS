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
        Schema::create('driver_transport', function (Blueprint $table) {
            $table->unsignedBigInteger('driver_id');
            $table->unsignedBigInteger('transport_id');
            $table->timestamps();
        
            $table->foreign('driver_id')->references('id')->on('drivers');
            $table->foreign('transport_id')->references('id')->on('transports');
            $table->primary(['driver_id', 'transport_id']);
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('driver_transport');
    }
};
