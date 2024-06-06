<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sale;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::all();
        return response()->json($sales, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'ticket_id' => 'required|exists:tickets,id',
            'client_id' => 'required|exists:clients,id',
            'user_id' => 'required|exists:users,id',
            'hora' => 'required|date_format:Y-m-d H:i:s',
            'fechaCompra' => 'required|date_format:Y-m-d',
            'formaPago' => 'required|string',
        ]);

        $sale = Sale::create($request->all());
        
        return response()->json($sale, 201);
    }
    

    public function show($id)
    {
        $sale = Sale::findOrFail($id);
        return response()->json($sale, 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'ticket_id' => 'required|exists:tickets,id',
            'client_id' => 'required|exists:clients,id',
            'user_id' => 'required|exists:users,id',
            'hora' => 'required|date_format:Y-m-d H:i:s',
            'fechaCompra' => 'required|date_format:Y-m-d',
            'formaPago' => 'required|string',
        ]);

        $sale = Sale::findOrFail($id);
        $sale->update($request->all());

        return response()->json($sale, 200);
    }

    public function destroy($id)
    {
        $sale = Sale::findOrFail($id);
        $sale->delete();

        return response()->json('Sale deleted successfully', 200);
    }
}
