<template>
  <section class="p-6 sm:w-2/3 lg:w-2/5 m-auto">
    <transition name="fade">
      <router-view v-if="isMounted"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: "Comment System"
  }
};
</script>
