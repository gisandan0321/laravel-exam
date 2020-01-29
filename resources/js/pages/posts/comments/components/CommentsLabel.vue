<template>
  <section>
    <h1
      :class="[
        'block text-gray-700 py-4',
        isPrimary ? 'text-xl' : 'tex-sm'
      ]"
    >{{ commentLabel }}</h1>
  </section>
</template>

<script>
export default {
  props: {
    totalRecords: {
      type: Number,
      default: 0
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    commentLabel() {
      let defaultLabel = this.isPrimary ? "Comments" : "Replies";
      let singleRecordLabel = this.isPrimary ? "Comment" : "Reply";

      if (this.totalRecords === 1) {
        return `${this.totalRecords} ${singleRecordLabel}`;
      }

      if (this.totalRecords > 1) {
        return `${this.totalRecords} ${defaultLabel}`;
      }

      return `No ${defaultLabel.toLowerCase()}`;
    }
  }
};
</script>
