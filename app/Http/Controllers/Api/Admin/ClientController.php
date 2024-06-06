<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index (){
        $data = Client::all(["id", "nombre", "email", "telefono", "RFC"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        // Validación
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:clients',
            'telefono' => 'required|string|max:255',
            'RFC' => 'required|string|max:255|unique:clients',
        ]);

        // Crear nuevo cliente
        $data = new Client($validatedData);
        $data->save();

        return response()->json($data, 201);
    }
    
    public function getAllClientsWithTickets()
    {
        $clients = Client::with('tickets')->get();
        return response()->json($clients);
    }


    public function show($id){
        $data = Client::find($id);

        if (!$data) {
            return response()->json(["message" => "Cliente no encontrado"], 404);
        }

        return response()->json($data, 200);
    }

    public function update(Request $request, $id){
        // Validación
        $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:clients,email,' . $id,
            'telefono' => 'required|string|max:255',
            'RFC' => 'required|string|max:255|unique:clients,RFC,' . $id,
        ]);

        $data = Client::find($id);

        if (!$data) {
            return response()->json(["message" => "Cliente no encontrado"], 404);
        }

        // Actualizar cliente
        $data->fill($request->all());
        $data->save();

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Client::find($id);

        if (!$data) {
            return response()->json(["message" => "Cliente no encontrado"], 404);
        }

        $data->delete();

        return response()->json(["message" => "Cliente borrado"], 200);
    }
}
