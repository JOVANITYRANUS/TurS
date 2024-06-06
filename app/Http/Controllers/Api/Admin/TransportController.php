<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Models\Transport;
use Illuminate\Http\Request;

class TransportController extends Controller
{
    public function index()
    {
        $data = Transport::get(["id", "status", "modelo", "capacidad", "marca", "matricula"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        //validacion
        $data = new Transport($request->all());

        $data->save();
        return response()->json($data, 200);
    }

    public function show($id)
    {
        $data = Transport::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        //validacion
        $data = Transport::find($id);
        $data->fill($request->all());

        $data->save();

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Transport::find($id);
        $data->delete();

        return response()->json("Transport borrado", 200);
    }
}
