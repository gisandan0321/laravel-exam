<template>
  <section class="border-t border-gray-500 py-5">
    <h1>comments</h1>
    <comment-form class="mt-10"></comment-form>
  </section>
</template>

<script>
export default {
  components: {
    commentForm: () => import("./form")
  }
};
</script>