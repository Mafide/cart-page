<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function search(Request $request){
        $query = $request->q;
        $courses = Course::query()
                            ->leftJoin('categories','courses.category_id', '=', 'categories.id')
                            ->leftJoin('users', 'courses.user_id', '=', 'users.id')
                            ->where('courses.title', 'like', '%'.$query .'%')
                            ->orWhere('categories.name', 'like', '%'.$query .'%')
                            ->orWhere('users.name', 'like', '%'.$query .'%')
                            ->with([
                                'creator',
                                'students',
                                'category',
                                'requirements',
                                'sections',
                                'rating',
                                'for'
                            ])
                            ->withAvg('rating', 'rating')
                            ->withCount('rating')
                            ->select('courses.*')
                            ->orderByDesc ('rating_avg_rating')
                            ->get();

        Inertia::render('SearchResult', [
            'courses' => $courses,
            'query' => $query,
        ]);
    }
}
