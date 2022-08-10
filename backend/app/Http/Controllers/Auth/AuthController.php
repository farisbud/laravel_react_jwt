<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
   
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function register(){

        $messages = [
            'required' => ':attribute wajib diisi cuy!!!',
            'unique' =>':attribute , sudah ada yang pakai silahkan ganti',
            'confirmed'=> 'konfirmasi password tidak sama',
        ];

        $validator = Validator::make(request()->all(),[
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password'=> 'required|confirmed',

        ],$messages);

        if($validator->fails()){

            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
                //'message'=> 'gagal menambahkan data produk',
    
            ]);           

        }else{

            User::create([
                
                'name'=>request('name'),
                'email' => request('email'),
                'password' => Hash::make(request('password')),
                'remember_token' => Str::random(60),
            ]);
            
            return response()->json([
                'status' => 200,
                'message' => 'berhasil membuat akun',
            ]);
        }
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $messages = [
            'required' => ':attribute wajib diisi cuy!!!',
        ];

        $validator = Validator::make(request()->all(),[
            'email' => 'required|email',
            'password'=> 'required',
        ],$messages);

        $credentials = request(['email', 'password']);
        if($validator->fails()){

            return response()->json([
                'status'=> 400,
                'errors'=> $validator->messages(),
            ]);

        }else{
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }
        

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
    //
}
