<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Guide extends Authenticatable
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
}
