<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/comments', 'CommentController@index');
Route::post('/comments/create', 'CommentController@create');
Route::get('/comments/replies', 'CommentReplyController@index');
Route::get('/comments/replies/sub', 'CommentReplyController@sub');
Route::post('/comments/replies/create', 'CommentReplyController@create');
