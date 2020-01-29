<template>
  <section>
    <comment-label :totalRecords="data.length" :isPrimary="true"></comment-label>
    <div v-for="(comment, index) in data" :key="index">
      <data-row class="py-4" :data="comment"></data-row>
      <replies
        class="w-11/12 ml-auto"
        :commentId="comment.id"
        v-if="$store.state.viewer.loadedComments.includes(comment.id)"
      ></replies>
      <a
        href
        class="block text-center pb-3 mt-1 text-blue-500 text-sm cursor-pointer"
        @click.stop.prevent="loadComment(comment.id)"
        v-else
      >Reply</a>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    CommentLabel: () => import("./CommentsLabel"),
    DataRow: () => import("./DataRow"),
    Replies: () => import("../replies")
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    loadComment(commentId) {
      this.$store.dispatch("viewer/addLoadedComment", commentId);
    }
  }
};
</script>