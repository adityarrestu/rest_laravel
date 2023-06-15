<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/items', [ItemContoller::class, 'index']);
Route::post('/items', [ItemContoller::class, 'store']);
Route::get('/items/{id}', [ItemContoller::class, 'show']);
Route::put('/items/{id}', [ItemContoller::class, 'update']);
Route::delete('/items/{id}', [ItemContoller::class, 'destroy']);
