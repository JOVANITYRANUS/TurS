<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\DriverTransport;
use Illuminate\Http\Request;

class DriverTransportController extends Controller
{
    public function index()
    {
        $data = DriverTransport::get(['driver', 'transport'])->get();
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        // Validación
        $request->validate([
            'driver_id' => 'required|exists:drivers,id',
            'transport_id' => 'required|exists:transports,id',
        ]);

        $data = new DriverTransport($request->all());
        $data->save();

        return response()->json($data, 200);
    }

    public function show($driver_id, $transport_id)
    {
        $data = DriverTransport::where('driver_id', $driver_id)
            ->where('transport_id', $transport_id)
            ->with(['driver', 'transport'])
            ->firstOrFail();

        return response()->json($data, 200);
    }

    public function update(Request $request, $driver_id, $transport_id)
    {
        // Validación
        $request->validate([
            'driver_id' => 'required|exists:drivers,id',
            'transport_id' => 'required|exists:transports,id',
        ]);

        $data = DriverTransport::where('driver_id', $driver_id)
            ->where('transport_id', $transport_id)
            ->firstOrFail();
        
        $data->fill($request->all());
        $data->save();

        return response()->json($data, 200);
    }

    public function destroy($driver_id, $transport_id)
    {
        $data = DriverTransport::where('driver_id', $driver_id)
            ->where('transport_id', $transport_id)
            ->firstOrFail();
        $data->delete();

        return response()->json("DriverTransport deleted", 200);
    }
}
