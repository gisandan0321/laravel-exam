export default {
  data() {
    return {
      defaultAvatar: '/default-avatar.jpg'
    }
  },
  computed: {
    isMounted() {
      return this.$store.state.viewer.isMounted;
    }
  }
}