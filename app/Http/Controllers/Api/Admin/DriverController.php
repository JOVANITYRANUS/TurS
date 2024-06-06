<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Driver;

class DriverController extends Controller
{
    public function index()
    {
        $data = Driver::get(["id", "nombre", "status", "matriculaTrabajador", "turno"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        // Validación
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'matriculaTrabajador' => 'required|string|max:255',
            'turno' => 'required|string|max:255',
        ]);

        $data = new Driver($validatedData);
        $data->save();

        return response()->json($data, 201);
    }

    public function show($id)
    {
        $data = Driver::find($id);

        if (!$data) {
            return response()->json(['message' => 'Driver not found'], 404);
        }

        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        // Validación
        $validatedData = $request->validate([
            'nombre' => 'sometimes|required|string|max:255',
            'status' => 'sometimes|required|string|max:255',
            'matriculaTrabajador' => 'sometimes|required|string|max:255',
            'turno' => 'sometimes|required|string|max:255',
        ]);

        $data = Driver::find($id);

        if (!$data) {
            return response()->json(['message' => 'Driver not found'], 404);
        }

        $data->fill($validatedData);
        $data->save();

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Driver::find($id);

        if (!$data) {
            return response()->json(['message' => 'Driver not found'], 404);
        }

        $data->delete();

        return response()->json(['message' => 'Driver deleted'], 200);
    }
}
