<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Comment;

class CommentController extends Controller
{
  /**
   * Fetches all comments.
   * 
   * @return JsonResponse
   */
  public function index()
  {
    return response()->json([
      'comments' => Comment::all()->sortBy('date_created')
    ]);
  }

  /**
   * Creates new comment record.
   * 
   * @param Request $request
   * @return JsonResponse
   */
  public function create(Request $request)
  {
    // TODO implementation
  }
}
