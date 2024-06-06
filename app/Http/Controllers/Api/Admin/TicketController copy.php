<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Http\Requests\TicketStoreRequest;

class TicketController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function index()
    {
        $tickets = Ticket::all();
          
        // Return Json Response
        return response()->json([
            'results' => $tickets
        ], 200);
    }
   
    public function store(TicketStoreRequest $request)
    {
        try {
            // Create Ticket
            Ticket::create([
                'client_id' => $request->client_id,
                'journey_id' => $request->journey_id,
                'costoTicket' => $request->costoTicket,
                'asiento' => $request->asiento,
                'nombreCliente' => $request->nombreCliente
            ]);

            // Return Json Response
            return response()->json([
                'message' => "Ticket successfully created."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }
   
    public function show($id)
    {
        // Ticket Detail 
        $ticket = Ticket::find($id);
        if (!$ticket) {
            return response()->json([
                'message' => 'Ticket Not Found.'
            ], 404);
        }
       
        // Return Json Response
        return response()->json([
            'ticket' => $ticket
        ], 200);
    }
   
    public function update(TicketStoreRequest $request, $id)
    {
        try {
            // Find Ticket
            $ticket = Ticket::find($id);
            if (!$ticket) {
                return response()->json([
                    'message' => 'Ticket Not Found.'
                ], 404);
            }
            
            $ticket->client_id = $request->client_id;
            $ticket->journey_id = $request->journey_id;
            $ticket->costoTicket = $request->costoTicket;
            $ticket->asiento = $request->asiento;
            $ticket->nombreCliente = $request->nombreCliente;
       
            // Update Ticket
            $ticket->save();
       
            // Return Json Response
            return response()->json([
                'message' => "Ticket successfully updated."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }
   
    public function destroy($id)
    {
        // Ticket Detail 
        $ticket = Ticket::find($id);
        if (!$ticket) {
            return response()->json([
                'message' => 'Ticket Not Found.'
            ], 404);
        }
         
        // Delete Ticket
        $ticket->delete();
       
        // Return Json Response
        return response()->json([
            'message' => "Ticket successfully deleted."
        ], 200);
    }
}

