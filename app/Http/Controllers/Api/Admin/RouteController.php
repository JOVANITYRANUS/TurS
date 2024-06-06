<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Route;
use Illuminate\Http\Request;

class RouteController extends Controller
{
    public function index()
    {
        $data = Route::get(["id", "fechaInicio", "fechaTerminacion", "nombreRoute", "distanciaRoute"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'fechaInicio' => 'required|date',
            'fechaTerminacion' => 'required|date',
            'numParadas' => 'required|integer',
            'nombreRoute' => 'required|string|max:255',
            'distanciaRoute' => 'required|numeric',
            'descripcion' => 'nullable|string',
        ]);

        $data = new Route($validatedData);
        $data->save();

        return response()->json($data, 201);
    }

    public function show($id)
    {
        $data = Route::find($id);
        if (!$data) {
            return response()->json(['message' => 'Route not found'], 404);
        }
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = Route::find($id);
        if (!$data) {
            return response()->json(['message' => 'Route not found'], 404);
        }

        $validatedData = $request->validate([
            'fechaInicio' => 'required|date',
            'fechaTerminacion' => 'required|date',
            'numParadas' => 'required|integer',
            'nombreRoute' => 'required|string|max:255',
            'distanciaRoute' => 'required|numeric',
            'descripcion' => 'nullable|string',
        ]);

        $data->fill($validatedData);
        $data->save();

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Route::find($id);
        if (!$data) {
            return response()->json(['message' => 'Route not found'], 404);
        }

        $data->delete();

        return response()->json(['message' => 'Route deleted'], 200);
    }
}
