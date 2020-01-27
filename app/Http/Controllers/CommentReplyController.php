<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use App\Comment;
use App\CommentReply;

class CommentReplyController extends Controller
{
  /**
   * Fetches all comment replies.
   * 
   * @param Request $request
   * @return JsonResponse
   */
  public function index(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'commentId' => 'required|integer'
    ]);

    if ($validator->fails()) {
      return response()->json([
        'success' => false,
        'message' => trans('app.commentIdRequired')
      ]);
    }

    $commentId = $request->commentId;

    return response()->json([
      'replies' => Comment::find($commentId)->replies
    ]);
  }

  /**
   * Creates new comment reply record.
   * 
   * @param Request $request
   * @return JsonResponse
   */
  public function create(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'commentId' => 'required|integer',
      'name' => 'required|string|max:50',
      'message' => 'required|string'
    ]);

    if ($validator->fails()) {
      return response()->json([
        'success' => false,
        'message' => $validator->errors()->first()
      ]);
    }

    $commentReply = new CommentReply;
    $commentReply->comment_id = $request->commentId;
    $commentReply->name = strip_tags($request->name);
    $commentReply->message = strip_tags($request->message);
    $commentReply->save();

    return response()->json([
      'success' => true,
      'message' => trans('app.commentCreated')
    ]);
  }
}
