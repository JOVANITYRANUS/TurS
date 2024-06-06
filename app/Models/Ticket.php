<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $table = 'tickets';

    // Permite la asignación masiva de todos los campos
    protected $guarded = [];

    // Mantiene los timestamps automáticos
    public $timestamps = true;

    public function sale()
    {
        return $this->hasOne(Sale::class);
    }

    public function journey()
    {
        return $this->belongsTo(Journey::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
