<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Guide;
use Illuminate\Http\Request;

class GuideController extends Controller
{
    public function index()
    {
        $data = Guide::get(["id", "matricula", "nombre"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'matricula' => 'required|string|max:255',
            'nombre' => 'required|string|max:255',
        ]);

        $data = new Guide($validatedData);
        $data->save();

        return response()->json($data, 201);
    }

    public function show($id)
    {
        $data = Guide::find($id);
        if (!$data) {
            return response()->json(['message' => 'Guide not found'], 404);
        }
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = Guide::find($id);
        if (!$data) {
            return response()->json(['message' => 'Guide not found'], 404);
        }

        $validatedData = $request->validate([
            'matricula' => 'required|string|max:255',
            'nombre' => 'required|string|max:255',
        ]);

        $data->fill($validatedData);
        $data->save();

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Guide::find($id);
        if (!$data) {
            return response()->json(['message' => 'Guide not found'], 404);
        }

        $data->delete();

        return response()->json(['message' => 'Guide deleted'], 200);
    }
}
