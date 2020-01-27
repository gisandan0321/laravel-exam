<template>
  <section>
    <div class="inline-block">
      <img :src="defaultAvatar" class="w-12 h-12 rounded-full" />
    </div>
    <div class="inline-block align-top">
      <div class="block">
        <p class="inline-block font-bold">{{ data.name }}</p>
        <p
          class="inline-block text-gray-600 text-sm ml-1"
        >{{ data.created_at | moment("from", "now") }}</p>
      </div>
      <div class="block mt-1">
        <p class="text-gray-700">{{ data.message }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
};
</script>