<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
//use PHPUnit\Framework\MockObject\Stub\ReturnReference;


class AuthController extends Controller
{
    public function register (Request $request)
    {
        $response = ["sucess" => false]; 

        //validaciones

        $validator = validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()){
            $response = ["error"=>$validator->errors()];
            return response()->json($response, 200);
        }

        $input = $request->all();
        $input["password"] = bcrypt($input['password']); 

        $user = User::create($input); 
        $user->assignRole('admin');

        $response["sucess"] = true;
        //$response["token"] = $user->createToken("Codea")->plainTextToken;

        return response()->json($response, 200); 
    }

    public function login(Request $request)
{
    $response = ["success" => false]; // Corregir "sucess" a "success"

    // Validaciones
    $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if ($validator->fails()) {
        $response = ["error" => $validator->errors()];
        return response()->json($response, 200);
    }

    if (auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
        $user = auth()->user();
        $user->hasRole('client'); // Información del rol

        $response['token'] = $user->createToken("codea.app")->plainTextToken;
        $response['user'] = $user;
        $response['message'] = "Te estas Logueado";
        $response['success'] = true; // Asegurarse de que "success" se actualice a true
    }
    
    return response()->json($response, 200);
}


    public function logout (){
        $response=["success"=>false];
        auth()->user()->tokens()->delete();
        $response=[
            "success"=>true,
            "message"=>"Sesion cerrada"
        ];
        return response()->json($response, 200);
    }
}
