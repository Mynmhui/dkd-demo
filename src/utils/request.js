import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getTokenTime } from '@/utils/auth'
import router from '@/router'

function isTimeOut() {
  const currentTime = Date.now()
  const tokenTime = getTokenTime()
  const timeout = 2 * 1000
  return currentTime - tokenTime > timeout
}

const request = axios.create({
  baseURL: 'http://likede2-admin.itheima.net/likede/'
})

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 

  timeout: 5000 
})
// 请求拦截器 (config)
service.interceptors.request.use(async (config)=> {
  if (store.state.user.token) {
    if (isTimeOut) {
    await store.dispatch('user/logout')
    router.push('/login')
    return Promise.reject(new Error('登录过期'))
    } else {
    config.headers.Authorization = store.state.user.token
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use((res) => {
const { success, data, msg } = res.data
if (success) {
  return data
}
  Message.error(msg)
  return Promise.reject(new Error(msg))
},
async function (error) {
  console.dir(error)
  if (error?.status === 401) {
    Message.error('登录过期')
    await store.dispatch('user/logout')
    router.push('/login')
  } else {
    Message.error(error.msg)
  }

  return Promise.reject(error)
}
)
export default request
