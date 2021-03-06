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
   * Fetches all sub replies.
   * 
   * @param Request $request
   * @return JsonResponse
   */
  public function sub(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'commentReplyId' => 'required|integer'
    ]);

    if ($validator->fails()) {
      return response()->json([
        'success' => false,
        'message' => trans('app.commentIdRequired')
      ]);
    }

    $replies = CommentReply::where('comment_reply_id', $request->commentReplyId)
      ->orderBy('created_at')
      ->get();

    return response()->json([
      'replies' => $replies
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
      'name' => 'required|string|max:50',
      'message' => 'required|string'
    ]);

    if ($validator->fails()) {
      return response()->json([
        'success' => false,
        'message' => $validator->errors()->first()
      ]);
    }

    if (empty($request->commentId) && empty($request->commentReplyId)) {
      return response()->json([
        'success' => false,
        'message' => trans('app.commentIdRequired')
      ]);
    }

    $commentReply = new CommentReply;
    $commentReply->comment_id = $request->commentId ?? null;
    $commentReply->comment_reply_id = $request->commentReplyId ?? null;
    $commentReply->name = strip_tags($request->name);
    $commentReply->message = strip_tags($request->message);
    $commentReply->save();

    return response()->json([
      'success' => true,
      'message' => trans('app.commentCreated')
    ]);
  }
}
