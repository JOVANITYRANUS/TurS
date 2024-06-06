<?php

use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\DriverController;
use App\Http\Controllers\Api\Admin\GuideController;
use App\Http\Controllers\Api\Admin\ClientController;
use App\Http\Controllers\Api\Admin\JourneyController;
use App\Http\Controllers\Api\Admin\TicketController;
use App\Http\Controllers\Api\Admin\DriverTransportController;
use App\Http\Controllers\Api\Admin\TransportController;
use App\Http\Controllers\Api\Admin\SaleController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Admin\EquipoController;
use App\Http\Controllers\Api\Admin\RouteController;
use App\Http\Controllers\Api\Client\EquipoController as EquipoClient;
use App\Http\Controllers\Api\FrontController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('V1')->group(function(){
  /////Publicas

  //::public
Route::get('/public/{slug}', [FrontController::class, 'torneo']);
//::auth
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

  //////Privadas
Route::group(['middleware' => 'auth:sanctum'], function () {
    /////auth
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    //////client
    Route::apiResource('/client/equipo', EquipoClient::class);
    //////admin
    
    Route::apiResource('/admin/user', UserController::class);

    Route::apiResource('/admin/client', ClientController::class);

    Route::apiResource('/admin/driver', DriverController::class);

    Route::apiResource('/admin/guide', GuideController::class);

    Route::apiResource('/admin/transport', TransportController::class);
    
    Route::apiResource('/admin/journey', JourneyController::class);
    
    Route::apiResource('/admin/ticket', TicketController::class);

    Route::apiResource('/admin/sale', SaleController::class);

    Route::apiResource('/admin/route', RouteController::class);

    Route::apiResource('/admin/drivtrans', DriverTransportController::class);

    Route::get('/clients-with-tickets', [ClientController::class, 'getAllClientsWithTickets']);
    

});

});
 
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('guides', [GuideController::class, 'index']);
Route::get('guides/{id}', [GuideController::class, 'show']); 
Route::put('guidesupdate/{id}', [GuideController::class, 'update']);
Route::delete('guidesdelete/{id}', [GuideController::class, 'destroy']);