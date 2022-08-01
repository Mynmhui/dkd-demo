

export default {
  namespaced: true,
  state: {
  code: '',
  token: localStorage.getItem('DILIKE'),
  userInfo: {}
  },
  mutations: {
  getCode(state, payload) {
  state.code = payload
  },
  getUserInfo(state, payload) {
  state.userInfo = payload
  }
  },
  actions: {
  getCode(context, payload) {
  context.commit('getCode', payload)
  },
  getUserInfo(context, payload) {
  context.commit('getUserInfo', payload)
  }
  }
}
