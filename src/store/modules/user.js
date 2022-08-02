import { login } from "@/api/user"

export default {
  namespaced: true,
  state: {
  code: '',
  token: '',
  userInfo: {}
  },
  mutations: {
  // 获取token
  setToken(state, payload) {
    state.token = payload
  },
  // 获取验证码
  getCode(state, payload) {
  state.code = payload
  },
  // 获取
  getUserInfo(state, payload) {
  state.userInfo = payload
  }
  },
  actions: {
  async getToken(context, payload) {
  const res = await login(payload)
  console.log(res)
  context.commit('setToken', res.data.token)
  },
  getCode(context, payload) {
  context.commit('getCode', payload)
  },
  getUserInfo(context, payload) {
  context.commit('getUserInfo', payload)
  }
  }
}
