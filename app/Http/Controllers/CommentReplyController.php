<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use App\CommentReply;

class CommentReplyController extends Controller
{
  /**
   * Fetches all comment replies.
   * 
   * @return JsonResponse
   */
  public function index()
  {
    return response()->json([
      'replies' => CommentReply::all()->sortBy('date_created')
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
    // TODO implementation
  }
}
