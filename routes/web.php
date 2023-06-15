<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/items', [ItemContoller::class, 'index']);
Route::post('/items', [ItemContoller::class, 'store']);
Route::get('/items/{id}', [ItemContoller::class, 'show']);
Route::put('/items/{id}', [ItemContoller::class, 'update']);
Route::delete('/items/{id}', [ItemContoller::class, 'destroy']);
