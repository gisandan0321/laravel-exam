<template>
  <section>
    <ul>
      <li class="block">
        <ul>
          <li class="inline-block">
            <img :src="post.avatar || defaultAvatar" class="w-12 h-12 rounded-full" />
          </li>
          <li class="inline-block align-top ml-2">
            <p>{{ `${post.firstName} ${post.lastName}` }}</p>
            <p class="text-gray-600">Yesterday</p>
          </li>
          <li class="inline-block align-top float-right">
            <i class="fa fa-ellipsis-h cursor-pointer"></i>
          </li>
        </ul>
      </li>
      <li class="block mt-2">
        <p>{{ post.title }}</p>
      </li>
    </ul>
    <comments class="mt-5"></comments>
  </section>
</template>

<script>
import Comments from "./comments";

export default {
  components: {
    Comments
  },
  data() {
    return {
      post: {
        id: 1,
        title: "I really look so good wearing these shades. Don't you think?",
        firstName: "Mark",
        lastName: "Zuckerberg",
        avatar: "",
        createdAt: "2020-01-27 06:30:49",
        updatedAt: "2020-01-27 06:30:49",
        isAdmin: false
      }
    };
  }
};
</script>
