<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    use HasFactory;

    // Permite la asignación masiva de todos los campos
    protected $guarded = [];

    // Mantiene los timestamps automáticos
    public $timestamps = true;
    public function journeys()
    {
        return $this->hasMany(Journey::class);
    }

    public function drivers()
    {
        return $this->belongsToMany(Driver::class, 'driver_transports');
    }

    
}
