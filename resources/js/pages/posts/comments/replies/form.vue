<template>
  <section class="mt-5">
    <form class="lg:w-2/3" @submit.prevent="handleSubmit" novalidate>
      <h1 class="block text-gray-700 text-lg">Leave a Reply</h1>
      <label for="name" class="block text-sm text-gray-600 mt-4">
        Name
        <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="name"
        :class="[
          'block sm:w-1/2 lg:w-1/2 appearance-none bg-white border border-gray-400 rounded p-1 leading-tight focus:outline-none focus:border-gray-500',
          {'border-red-500 focus:border-red-500' : validated && comment.name === ''}
        ]"
        v-model="comment.name"
        placeholder="John Doe"
        minlength="50"
        autofocus
        required
      />
      <p
        class="block text-red-500 text-xs"
        v-if="validated && comment.name === ''"
      >This field is required.</p>
      <label for="message" class="block text-sm text-gray-600 mt-4">
        Comment
        <span class="text-red-500">*</span>
      </label>
      <textarea
        id="message"
        :class="[
          'block w-full h-24 appearance-none bg-white border border-gray-400 rounded p-1 leading-tight focus:outline-none focus:border-gray-500',
          {'border-red-500 focus:border-red-500' : validated && comment.message === ''}
        ]"
        v-model="comment.message"
        placeholder="Your comment here..."
      ></textarea>
      <p
        class="block text-red-500 text-xs"
        v-if="validated && comment.message === ''"
      >This field is required.</p>
      <button
        type="button"
        class="block w-1/5 bg-teal-500 p-1 text-white text-sm rounded cursor-not-allowed mt-3"
        v-if="isProcessing"
      >
        <i class="fa fa-spinner fa-spin"></i>
      </button>
      <button
        type="submit"
        class="block w-1/5 bg-teal-500 p-1 text-white text-sm rounded mt-3"
        v-else
      >Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    commentId: {
      type: Number,
      default: null
    },
    commentReplyId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      validated: false,
      isProcessing: false,
      comment: {
        commentId: null,
        commentReplyId: null,
        name: "",
        message: ""
      }
    };
  },
  mounted() {
    this.comment.commentId = this.commentId;
    this.comment.commentReplyId = this.commentReplyId;
  },
  methods: {
    async handleSubmit() {
      if (this.comment.name === "" || this.comment.message === "") {
        this.validated = true;
        return;
      }

      this.isProcessing = true;

      const { data } = await this.$http.post(
        "/comments/replies/create",
        this.comment
      );

      if (!data.success) {
        return this.$toastr.e("", data.message);
      }

      this.validated = false;
      this.comment.name = "";
      this.comment.message = "";
      this.isProcessing = false;
      this.$parent.fetchData();
    }
  }
};
</script>