<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommentReply extends Model
{
  protected $table = 'comment_reply';

  protected $fillable = [
    'comment_id', 'name', 'message'
  ];
}
