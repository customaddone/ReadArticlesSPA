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
// groupでミドルウェアapiを適用
Route::group(['middleware' => 'api'],function () {
    // GET /api/articlesで記事５件をJsonで返す
    // 今回は簡略化のためにControllerは使わない
    Route::get('articles', function() {
        $articles = Article::all()->take(5);
        return $articles;
    });
})
