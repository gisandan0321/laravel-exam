<template>
  <section>
    <div class="block text-center text-xl pb-2" v-if="isFetchingData">
      <i class="block fa fa-spinner fa-spin"></i>
    </div>
    <div v-else>
      <comment-label :totalRecords="data.length"></comment-label>
      <div v-for="(reply, index) in data" :key="index">
        <data-row class="py-4" :data="reply"></data-row>
      </div>
    </div>
    <reply-form :commentReplyId="commentReplyId" class="border-t border-gray-400 py-4"></reply-form>
  </section>
</template>

<script>
export default {
  components: {
    CommentLabel: () => import("./CommentsLabel"),
    DataRow: () => import("./DataRow"),
    ReplyForm: () => import("../replies/form")
  },
  props: {
    commentReplyId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isFetchingData: false,
      data: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isFetchingData = true;

      const { data } = await this.$http.get("/comments/replies/sub", {
        params: {
          commentReplyId: this.commentReplyId
        }
      });

      this.data = data.replies;
      this.isFetchingData = false;
    }
  }
};
</script>