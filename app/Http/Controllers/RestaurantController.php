<?php

namespace App\Http\Controllers;

use App\Http\Requests\RestaurantRequest;
use App\Models\Restaurant;
use App\Models\Table;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RestaurantController extends Controller
{
    public function index(RestaurantRequest $request)
    {
        $isActive = $request->input('isActive');

        $tables = Table::with('diningArea', 'restaurant')
            ->filter($isActive)
            ->paginate();

        $restaurants = $tables->groupBy([
            fn (Table $table) => str_replace(' ', '', trim(strtolower($table->restaurant->name))),
            fn (Table $table) => str_replace(' ', '', trim(
                strtolower($table->diningArea->name)
            ))
        ]);
        return Inertia::render('List', compact('restaurants'));
    }
}
