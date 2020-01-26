<template>
  <section>
    <form @submit.prevent="handleSubmit" novalidate>
      <ul>
        <li class="block">
          <h1 class="text-gray-700 text-2xl">Leave a Comment</h1>
        </li>
        <li class="block mt-3">
          <ul>
            <li class="block">
              <label for="name" class="text-sm text-gray-600">
                Name
                <span class="text-red-500">*</span>
              </label>
            </li>
            <li class="block">
              <input
                type="text"
                id="name"
                :class="[
                  'sm:w-1/2 lg:w-1/2 appearance-none bg-white border border-gray-400 rounded p-1 leading-tight focus:outline-none focus:border-gray-500',
                  {'border-red-500 focus:border-red-500' : validated && comment.name === ''}
                ]"
                v-model="comment.name"
                placeholder="John Doe"
                minlength="50"
                autofocus
                required
              />
            </li>
            <li class="block">
              <p
                class="text-red-500 text-xs"
                v-if="validated && comment.name === ''"
              >This field is required.</p>
            </li>
          </ul>
        </li>
        <li class="block mt-3">
          <ul>
            <li class="block">
              <label for="content" class="text-sm text-gray-600">
                Comment
                <span class="text-red-500">*</span>
              </label>
            </li>
            <li class="block">
              <textarea
                id="content"
                :class="[
                  'w-full h-24 appearance-none bg-white border border-gray-400 rounded p-1 leading-tight focus:outline-none focus:border-gray-500',
                  {'border-red-500 focus:border-red-500' : validated && comment.content === ''}
                ]"
                v-model="comment.content"
                placeholder="Your comment here..."
              ></textarea>
            </li>
            <li class="block">
              <p
                class="text-red-500 text-xs"
                v-if="validated && comment.content === ''"
              >This field is required.</p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="block mt-3">
              <button
                type="submit"
                class="bg-teal-500 p-2 text-white text-sm rounded float-right cursor-not-allowed"
                v-if="isProcessing"
              ><i class="fa fa-spinner fa-spin"></i></button>
              <button
                type="submit"
                class="bg-teal-500 p-2 text-white text-sm rounded float-right"
                v-else
              >Post</button>
            </li>
          </ul>
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      validated: false,
      isProcessing: false,
      comment: {
        name: "",
        content: ""
      }
    };
  },
  methods: {
    async handleSubmit() {
      if (this.comment.name === "" || this.comment.content === "") {
        this.validated = true;
        return;
      }

      console.log(this.comment);
    }
  }
};
</script>