<template>
  <section>
    <h1 class="text-center text-sm text-gray-500 pb-3" v-if="data.length === 0">No replies.</h1>
    <div v-for="(reply, index) in data" :key="index" v-else>
      <comment class="py-4" :data="reply"></comment>
      <div v-if="$store.state.viewer.loadedReplies.includes(reply.id)">has nested reply</div>
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
    Comment: () => import("./Comment")
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  }
};
</script>