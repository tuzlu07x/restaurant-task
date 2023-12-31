<?php

use App\Http\Controllers\KanyeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RestaurantController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Test');
// });
Route::get('/restaurants', [RestaurantController::class, 'index'])->name('restaurant.index');
Route::get('/login', [LoginController::class, 'page']);
Route::post('/login', [LoginController::class, 'login'])->name('login');

Route::middleware('auth')->group(function () {
    Route::get('/kanye', [KanyeController::class, 'index'])->name('kanye');
});
