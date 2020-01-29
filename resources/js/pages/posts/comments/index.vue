<template>
  <section>
    <comments :data="data"></comments>
    <comment-form class="border-t border-gray-400 py-5 mt-10"></comment-form>
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
      data: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await this.$http.get("/comments");
      this.data = data.comments;
    }
  }
};
</script>