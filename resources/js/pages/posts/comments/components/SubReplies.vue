<template>
  <section>
    <div class="block text-center text-xl pb-2" v-if="isFetchingData">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-else>
      <h1 class="text-center text-sm text-gray-500 pb-3" v-if="data.length === 0">No replies.</h1>
      <div v-for="(reply, index) in data" :key="index" v-else>
        <data-row class="py-4" :data="reply"></data-row>
      </div>
    </div>
    <reply-form :comment-reply-id="commentReplyId" class="border-t border-gray-400 py-4"></reply-form>
  </section>
</template>

<script>
export default {
  components: {
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