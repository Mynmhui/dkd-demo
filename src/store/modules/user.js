import { login } from "@/api/user"
import { setTokenTime } from "@/utils/auth"

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
  // 获取用户信息
  setUserInfo(state, payload) {
  state.userInfo = payload
  }
  },
  actions: {
  //获取token
  async getToken(context, payload) {
  const res = await login(payload)
  context.commit('setToken', res.data.token)
  setTokenTime()
  },
  //获取验证码
  getCode(context, payload) {
  context.commit('getCode', payload)
  },
  //获取用户信息
  getUserInfo(context, payload) {
  context.commit('getUserInfo', payload)
  },
  //退出
  logout(context) {
  context.commit('setToken', '')
  context.commit('setUserInfo', {})
  }
  }
}
