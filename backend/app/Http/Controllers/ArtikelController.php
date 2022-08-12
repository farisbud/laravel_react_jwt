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
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $artikel = Artikel::latest()->get();
        return response()->json([
            'status'=> true,
            'message' => "berhasil menampilkan artikel terbaru",
            'data'=> $artikel,
        ]);
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

            $user = auth()->user();

            $artikel = $user->artikel()->create([
                'judul' => $request->judul,
                'deskripsi' => $request->deskripsi
            ]);

            return response()->json([
                'status' => 200,
                'message' => 'berhasil membuat artikel',
                'data' => $artikel,
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
        $artikel = Artikel::findOrFail($id);

        return response()->json([
            'status'=> true,
            'message' => "berhasil menampilkan artikel berdasarkan id",
            'data'=> $artikel,
        ]);
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

            // $artikel = Artikel::where('id', $id)->update([
            //     'judul' => $request->judul,
            //     'deskripsi'=> $request->deskripsi
            // ]);

                $artikel = Artikel::findOrFail($id);
                $artikel->judul = $request->judul;
                $artikel->deskripsi = $request->deskripsi;
                $artikel->save();

            return response()->json([
                'status' => 200,
                'message' => 'berhasil membuat artikel',
                'data' => $artikel,
            ]);
        }
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
        $artikel = Artikel::findOrFail($id);

       try {

        $artikel->delete();

       } catch (\Throwable $th) {

        return response()->json([
            'status' => false,
            'message'=> 'Data produk gagal dihapus, karena data masih digunakan diperhitungan SAW'
        ]);

       }

        return response()->json([
            'status' => true,
            'message'=> 'Data produk berhasil dihapus'
        ]);
        //
    }
        //

}
