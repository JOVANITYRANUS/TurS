<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Journey extends Model
{
    use HasFactory;

    protected $table = 'journeys';  
    // Permite la asignación masiva de todos los campos
    protected $guarded = [];

    // Mantiene los timestamps automáticos
    public $timestamps = true;

    /**
     * Get the route that owns the journey.
     */
    public function route()
    {
        return $this->belongsTo(Route::class);
    }

    /**
     * Get the guide that owns the journey.
     */
    public function guide()
    {
        return $this->belongsTo(Guide::class);
    }

    /**
     * Get the driver that owns the journey.
     */
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    /**
     * Get the transport that owns the journey.
     */
    public function transport()
    {
        return $this->belongsTo(Transport::class);
    }

    
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
