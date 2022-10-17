<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup(Request $request) {
        
        $validator = Validator::make($request->all(), [
            "email" => "required|email:rfc,dns",
            "fuleName" => "required|min:3|max:30",
            "username" => "required|min:3|max:30",
            "password" => "required|min:4|max:20"
        ]);

        if($validator->fails()){
            return[
                "status" => "error",
                "data" => $validator->errors()
            ];
        }

        return [
            "status" => "ok"
        ];
    }
}
