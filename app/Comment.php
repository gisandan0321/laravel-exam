<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
  protected $table = 'comment';

  protected $fillable = [
    'name', 'message'
  ];

  /**
   * Get the replies for the post comment.
   */
  public function replies()
  {
    return $this->hasMany('App\CommentReply', 'comment_id')->orderBy('created_at');
  }
}
