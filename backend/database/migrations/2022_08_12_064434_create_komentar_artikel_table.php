<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKomentarArtikelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('komentar_artikel', function (Blueprint $table) {
    
                $table->id();
                $table->foreignId('artikel_id')->constrained('artikel')->onUpdate('cascade')->onDelete('cascade');
                $table->foreignId('user_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
                $table->text('komentar');
                $table->timestamps();
          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('komentar_artikel');
    }
}
