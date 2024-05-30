<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseFor extends Model
{
    use HasFactory;

    public function cource(){
        return $this->belongsTo(Course::class);
    }
}
