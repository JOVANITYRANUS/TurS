<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ticket;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = Ticket::all();
        return response()->json($tickets, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'client_id' => 'required|exists:clients,id',
            'journey_id' => 'required|exists:journeys,id',
            'costoTicket' => 'required|numeric|min:0',
            'asiento' => 'required|integer|min:1',
            'nombreCliente' => 'required|string',
        ]);

        $ticket = Ticket::create($request->all());
        
        return response()->json($ticket, 201);
    }

    public function show($id)
    {
        $ticket = Ticket::findOrFail($id);
        return response()->json($ticket, 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'client_id' => 'required|exists:clients,id',
            'journey_id' => 'required|exists:journeys,id',
            'costoTicket' => 'required|numeric|min:0',
            'asiento' => 'required|integer|min:1',
            'nombreCliente' => 'required|string',
        ]);

        $ticket = Ticket::findOrFail($id);
        $ticket->update($request->all());

        return response()->json($ticket, 200);
    }

    public function destroy($id)
    {
        $ticket = Ticket::findOrFail($id);
        $ticket->delete();

        return response()->json('Ticket deleted successfully', 200);
    }
}
