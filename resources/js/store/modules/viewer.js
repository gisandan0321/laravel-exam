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
    addLoadedReply(state, commentId) {
      state.loadedReplies.push(commentId);
    }
  },
  actions: {
    addLoadedComment({ commit }, commentId) {
      commit('addLoadedComment', commentId);
    },
    addLoadedReply({ commit }, commentId) {
      commit('addLoadedReply', commentId);
    }
  }
}