<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register (Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required | email | unique:users, email',
            'password' => 'required | min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        $token = $user->generateToken();

        return response()->json([
            'message' => 'User registered successfull',
            'token' => $token,
        ], 200);
    }

    public function login (Request $request)
    {
        $request ->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->generateToken();

            return response()->json([
                'message' => 'User logged in successfully',
                'token' => $token,
            ]);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json(['message' => 'Logout successful'], 200);
    }
}
