<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RestaurantController extends Controller
{
    public function index(Request $request)
    {
        $isActive = $request->isActive;
        $diningAreas = Restaurant::with(['tables', 'tables.diningArea'])->filter($isActive)->paginate();
        $groupedDiningAreas = $diningAreas->groupBy(function ($item) {
            return str_replace(' ', '', trim(strtolower($item->name)));
        });
        return Inertia::render('List', compact('groupedDiningAreas'));
    }
}
