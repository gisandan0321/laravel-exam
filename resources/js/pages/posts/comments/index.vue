<template>
  <section>
    <comments :data="comments"></comments>
    <comment-form class="border-t border-gray-400 py-5 mt-20"></comment-form>
  </section>
</template>

<script>
export default {
  components: {
    Comments: () => import("./components/Comments"),
    CommentForm: () => import("./form")
  },
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await this.$http.get("/comments");
      this.comments = data.comments;
    }
  }
};
</script>