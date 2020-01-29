export default {
  namespaced: true,
  state: {
    isMounted: false,
    loadedComments: [],
    loadedReplies: []
  },
  getters: {
    loadedComments: state => state.loadedComments,
    loadedReplies: state => state.loadedReplies
  },
  mutations: {
    addLoadedComment(state, commentId) {
      state.loadedComments.push(commentId);
    },
    unloadComment(state, commentId) {
      let index = state.loadedComments.indexOf(commentId);
      state.loadedComments.splice(index);
    },
    addLoadedReply(state, commentId) {
      state.loadedReplies.push(commentId);
    },
    unloadReply(state, commentId) {
      let index = state.loadedReplies.indexOf(commentId);
      state.loadedReplies.splice(index);
    }
  },
  actions: {
    addLoadedComment({ commit }, commentId) {
      commit('addLoadedComment', commentId);
    },
    unloadComment({ commit }, commentId) {
      commit('unloadComment', commentId);
    },
    addLoadedReply({ commit }, commentId) {
      commit('addLoadedReply', commentId);
    },
    unloadReply({ commit }, commentId) {
      commit('unloadReply', commentId);
    }
  }
}