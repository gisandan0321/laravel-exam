<template>
  <section>
    <h1 class="text-center text-sm text-gray-500 pb-3" v-if="data.length === 0">No replies.</h1>
    <div v-for="(reply, index) in data" :key="index" v-else>
      <data-row class="py-4" :data="reply"></data-row>
      <sub-replies
        class="w-11/12 ml-auto"
        :comment-reply-id="reply.id"
        v-if="$store.state.viewer.loadedReplies.includes(reply.id)"
      ></sub-replies>
      <p
        class="block text-center pb-3 mt-1 text-blue-500 text-sm font-bold cursor-pointer"
        @click="loadReply(reply.id)"
        v-else
      >Reply</p>
    </div>
  </section>
</template>

<script>
export default {
  components: {
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