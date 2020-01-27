<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
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
      'comments' => Comment::orderBy('created_at')->get()
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
    $validator = Validator::make($request->all(), [
      'name' => 'required|string|max:50',
      'message' => 'required|string'
    ]);

    if ($validator->fails()) {
      return response()->json([
        'success' => false,
        'message' => $validator->errors()->first()
      ]);
    }

    $comment = new Comment;
    $comment->name = strip_tags($request->name);
    $comment->message = strip_tags($request->message);
    $comment->save();

    return response()->json([
      'success' => true,
      'message' => trans('app.commentCreated')
    ]);
  }
}
