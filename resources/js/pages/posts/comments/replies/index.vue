<template>
  <section>
    <replies :data="data"></replies>
    <reply-form :comment-id="commentId" class="border-t border-gray-400 py-4"></reply-form>
  </section>
</template>

<script>
export default {
  components: {
    Comment: () => import("../components/Comment"),
    Replies: () => import("../components/Replies"),
    ReplyForm: () => import("./form")
  },
  props: {
    commentId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async loadReply(replyId) {
      this.$store.dispatch("viewer/addLoadedReply", replyId);
    },
    async fetchData() {
      const { data } = await this.$http.get("/comments/replies", {
        params: {
          commentId: this.commentId
        }
      });

      this.data = data.replies;
    }
  }
};
</script>