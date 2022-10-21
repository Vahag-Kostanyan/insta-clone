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
            "fullName" => "required|min:3|max:30",
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
            "fullName" => $request->input("fullName"),
            "username" => $request->input("username"),
            "password" => Hash::make($request->get("password"))
        ]);

        return [
            "status" => "ok",
            "data" =>  "success"
        ];
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required",
            "password" => "required|min:4|max:20"
        ]);

        if($validator->fails()){
            return[
                "status" => "error",
                "data" => $validator->errors()
            ];
        }

        $user = User::where('username', $request->input('email'))->first() ;


        if (! $token = Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
            if($user){
                if($token = Auth::attempt(['email' => $user->email, 'password' => $request->input('password')])){
                    return response()->json([
                        "status" => "ok",
                        "data" => $token
                    ]);
                }
            }
            return response()->json([
                "status" => "error",
                "data" => [
                    "user" => ["no such user exists"]
                ]
            ]);
        }

        if($user){
            $current_user = User::where("email", $user->email)->first();
        }else{
            $current_user = User::where("email", $request->input('email'))->first();
        }

        Auth::login($current_user);

        return response()->json([
            "status" => "ok",
            "data" => $token
        ]);
    }


    public function getUser(Request $request) {
        return response()->json([
            "statsu" => "ok", 
            "data" => [
                "username" => Auth::user()->username,
                "fullName" => Auth::user()->fullName,
            ]
        ]);
    }

    public function logout(Request $request) {
        Auth::logout($request->input("token"));

        return response()->json([
            "status" => "success"
        ]);
    }
}