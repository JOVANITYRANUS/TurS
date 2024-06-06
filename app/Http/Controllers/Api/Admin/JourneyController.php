<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Models\Journey;
use Illuminate\Http\Request;

class JourneyController extends Controller
{
    public function index()
    {
        $data = Journey::get();
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        // Validación de datos recibidos
        $validatedData = $request->validate([
            'route_id' => 'required|exists:routes,id',
            'guide_id' => 'required|exists:guides,id',
            'driver_id' => 'required|exists:drivers,id',
            'transport_id' => 'required|exists:transports,id',
            'fecha' => 'required|date',
            'cupo' => 'required|integer',
            'status' => 'required|string',
            'hora_salida' => 'required|date_format:H:i',
            'hora_llegada' => 'nullable|date_format:H:i',
        ]);

        // Crear una nueva instancia del modelo Journey con los datos validados
        $journey = new Journey($validatedData);
        $journey->save();

        return response()->json($journey, 200);
    }

    public function show($id)
    {
        $journey = Journey::findOrFail($id);
        return response()->json($journey, 200);
    }

    public function update(Request $request, $id)
    {
        // Validación de datos recibidos
        $validatedData = $request->validate([
            'route_id' => 'exists:routes,id',
            'guide_id' => 'exists:guides,id',
            'driver_id' => 'exists:drivers,id',
            'transport_id' => 'exists:transports,id',
            'fecha' => 'date',
            'cupo' => 'integer',
            'status' => 'string',
            'hora_salida' => 'date_format:H:i',
            'hora_llegada' => 'nullable|date_format:H:i',
        ]);

        $journey = Journey::findOrFail($id);
        $journey->fill($validatedData);
        $journey->save();

        return response()->json($journey, 200);
    }

    public function destroy($id)
    {
        $journey = Journey::findOrFail($id);
        $journey->delete();

        return response()->json("Journey borrado ", 200);
    }
}
