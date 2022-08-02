import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
const request = axios.create({
  baseURL: 'http://likede2-admin.itheima.net/likede/'
})

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 

  timeout: 5000 
})
// 请求拦截器 (config)
service.interceptors.request.use()
// 响应拦截器
service.interceptors.response.use((res) => {
const { success, data, msg } = res.data
if (success) {
  return data
}
  Message.error(msg)
  return Promise.resolve(new Error(msg))
},
function (error) {
  Message.error('系统错误')
  return Promise.reject(error)
}
)
export default request
