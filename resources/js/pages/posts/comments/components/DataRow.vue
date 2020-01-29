<template>
  <section>
    <img :src="defaultAvatar" class="inline-block w-12 h-12 rounded-full" />
    <div class="inline-block align-top">
      <div class="block">
        <p class="inline-block">{{ data.name }}</p>
        <p
          class="inline-block text-gray-600 text-sm ml-1"
        >{{ data.created_at | moment("from", "now") }}</p>
        <a
          href  
          :class="[
            'inline-block cursor-pointer ml-2',
            isCommentLoaded ? 'visible' : 'hidden'
          ]"
          @click.stop.prevent="unloadComment"
        >
          <i class="fa fa-angle-up"></i>
        </a>
      </div>
      <p class="block mt-1 text-gray-700">{{ data.message }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        name: "",
        message: "",
        created_at: ""
      }
    }
  },
  computed: {
    isCommentLoaded() {
      return this.isReply
        ? this.$store.state.viewer.loadedReplies.includes(this.data.id)
        : this.$store.state.viewer.loadedComments.includes(this.data.id);
    },
    isReply() {
      return !!this.data.comment_id;
    }
  },
  methods: {
    unloadComment() {
      let action = this.isReply ? "unloadReply" : "unloadComment";
      this.$store.dispatch(`viewer/${action}`, this.data.id);
    }
  }
};
</script>