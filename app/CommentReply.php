<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommentReply extends Model
{
  protected $table = 'comment_reply';

  protected $fillable = [
    'comment_id', 'name', 'message'
  ];

  /**
   * Get the comment that owns the reply.
   */
  public function comment()
  {
    return $this->belongsTo('App\Comment');
  }
}
