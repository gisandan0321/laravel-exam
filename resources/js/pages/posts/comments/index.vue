<template>
  <section class="py-5">
    <h1 v-if="comments.length === 0">No comments.</h1>
    <div
      class="border-t border-gray-400 py-4"
      v-for="(comment, index) in comments"
      :key="index"
      v-else
    >
      <div class="inline-block">
        <img :src="defaultAvatar" class="w-12 h-12 rounded-full" />
      </div>
      <div class="inline-block align-top">
        <div class="block">
          <p class="inline-block font-bold">{{ comment.name }}</p>
          <p
            class="inline-block text-gray-600 text-sm ml-1"
          >{{ comment.created_at | moment("from", "now") }}</p>
        </div>
        <div class="block mt-1">
          <p class="text-gray-700 text-md">{{ comment.message }}</p>
        </div>
        <div class="block mt-1">
          <p class="inline-block text-blue-500 text-sm cursor-pointer">Reply</p>
        </div>
      </div>
    </div>
    <comment-form class="mt-10"></comment-form>
  </section>
</template>

<script>
export default {
  components: {
    commentForm: () => import("./form")
  },
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      const { data } = await this.$http.get("/comments");
      this.comments = data.comments;
    }
  }
};
</script>