<template>
  <section>
    <comment-label :totalRecords="data.length"></comment-label>
    <div v-for="(reply, index) in data" :key="index">
      <data-row class="py-4" :data="reply"></data-row>
      <sub-replies
        class="w-11/12 ml-auto"
        :commentReplyId="reply.id"
        v-if="$store.state.viewer.loadedReplies.includes(reply.id)"
      ></sub-replies>
      <a
        href
        class="block text-center pb-3 mt-1 text-blue-500 text-sm cursor-pointer"
        @click.stop.prevent="loadReply(reply.id)"
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
    SubReplies: () => import("./SubReplies")
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    loadReply(replyId) {
      this.$store.dispatch("viewer/addLoadedReply", replyId);
    }
  }
};
</script>