<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentReplyTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('comment_reply', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('comment_id')->nullable();
      $table->unsignedBigInteger('comment_reply_id')->nullable();
      $table->string('name', 50);
      $table->text('message');
      $table->timestamps();

      $table->foreign('comment_id')
        ->references('id')->on('comment')
        ->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('comment_reply');
  }
}
