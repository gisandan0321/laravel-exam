<template>
  <section>
    <div class="block text-center text-xl pb-2" v-if="isFetchingData">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <replies :data="data" v-else></replies>
    <reply-form :commentId="commentId" class="border-t border-gray-400 py-4"></reply-form>
  </section>
</template>

<script>
export default {
  components: {
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
      isFetchingData: false,
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
      this.isFetchingData = true;

      const { data } = await this.$http.get("/comments/replies", {
        params: {
          commentId: this.commentId
        }
      });

      this.data = data.replies;
      this.isFetchingData = false;
    }
  }
};
</script>