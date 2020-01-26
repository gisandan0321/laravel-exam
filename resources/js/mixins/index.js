export default {
  data() {
    return {
      defaultAvatar: '/user-placeholder.jpeg'
    }
  },
  computed: {
    isMounted() {
      return this.$store.state.viewer.isMounted;
    }
  }
}