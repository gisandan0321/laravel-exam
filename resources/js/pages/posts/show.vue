<template>
  <section>
    <div class="block">
      <img :src="post.avatar || defaultAvatar" class="inline-block w-12 h-12 rounded-full" />
      <div class="inline-block align-top ml-2">
        <p class="font-bold">{{ `${post.firstName} ${post.lastName}` }}</p>
        <p class="text-gray-600 text-sm">{{ post.createdAt | moment("from", "now") }}</p>
      </div>
      <div class="inline-block align-top float-right">
        <i class="fa fa-ellipsis-h cursor-pointer"></i>
      </div>
    </div>
    <div class="block py-5">
      <h1 class="text-gray-700">{{ post.title }}</h1>
    </div>
    <comments class="block mt-4"></comments>
  </section>
</template>

<script>
export default {
  components: {
    Comments: () => import("./comments")
  },
  data() {
    return {
      post: {
        id: 1,
        title: "I really look so good wearing these shades. Don't you think?",
        firstName: "Mark",
        lastName: "Zuckerberg",
        avatar: "/mark-avatar.jpeg",
        createdAt: "2020-01-26 17:44:03",
        updatedAt: "2020-01-26 17:44:03",
        isAdmin: false
      }
    };
  }
};
</script>
