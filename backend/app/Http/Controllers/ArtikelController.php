<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
Use App\Models\Artikel;
use Illuminate\Support\Facades\Validator;

class ArtikelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $messages = [
            'required' => ':attribute wajib diisi cuy!!!',
        ];

        $validator = Validator::make(request()->all(),[
            'judul' => 'required',
            'deskripsi'=> 'required',
        ],$messages);

        if($validator->fails()){

            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
                //'message'=> 'gagal menambahkan data produk',

            ],422);

        }else{

            $user = auth()->users();

            $artikel = $user->artikel()->create([
                'judul' => $request->judul,
                'deskripsi' => $request->deskripsi
            ]);

            return response()->json([
                'status' => 200,
                'message' => 'berhasil membuat artikel',
                'data' =>$artikel,
            ]);
        }
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
