<template>
  <section>
    <h1 class="text-center text-gray-500 pb-3" v-if="data.length === 0">No comments.</h1>
    <div v-for="(comment, index) in data" :key="index" v-else>
      <comment class="py-4" :data="comment"></comment>
      <replies
        class="w-11/12 ml-auto"
        :comment-id="comment.id"
        v-if="$store.state.viewer.loadedComments.includes(comment.id)"
      ></replies>
      <p
        class="block text-center pb-3 mt-1 text-blue-500 text-sm font-bold cursor-pointer"
        @click="loadComment(comment.id)"
        v-else
      >Reply</p>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Comment: () => import("./Comment"),
    Replies: () => import("../replies")
  },
  data() {
    return {
      replies: []
    };
  },
  props: {
    data: Array,
    default: []
  },
  methods: {
    async loadComment(commentId) {
      this.$store.dispatch("viewer/addLoadedComment", commentId);
    }
  }
};
</script>