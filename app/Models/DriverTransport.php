<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DriverTransport extends Model
{
    use HasFactory;

    protected $table = 'driver_transports';

    // Permite la asignación masiva de todos los campos
    protected $guarded = [];

    // Mantiene los timestamps automáticos
    public $timestamps = true;

    /**
     * Define the relationship with the Driver model.
     */
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    /**
     * Define the relationship with the Transport model.
     */
    public function transport()
    {
        return $this->belongsTo(Transport::class);
    }
}
