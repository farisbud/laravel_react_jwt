<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtikelKomen extends Model
{
    use HasFactory;
    protected $table = 'komentar_artikel';
    protected $guarded = [];
}
