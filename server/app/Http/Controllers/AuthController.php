<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signup(Request $request) {
        
        $validator = Validator::make($request->all(), [
            "email" => "required|email:rfc,dns|unique:users",
            "fuleName" => "required|min:3|max:30",
            "username" => "required|min:3|max:30|unique:users",
            "password" => "required|min:4|max:20"
        ]);

        if($validator->fails()){
            return[
                "status" => "error",
                "data" => $validator->errors()
            ];
        }

        User::create([
            "email" => $request->input("email"),
            "fuleName" => $request->input("fuleName"),
            "username" => $request->input("username"),
            "password" => Hash::make($request->get("password"))
        ]);

        return [
            "status" => "ok",
            "data" =>  "success"
        ];
    }
}