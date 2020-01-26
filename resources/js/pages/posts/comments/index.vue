<template>
  <section class="border-t border-gray-500 py-5">
    <h1 v-if="comments.length === 0">No comments.</h1>
    <ul v-else>
      <li>{{ comments }}</li>
    </ul>
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