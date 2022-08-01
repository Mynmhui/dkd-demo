import requestarr from '@/utils/pictions'
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user-service/user/login',
    method: 'post',
    data
  })
}

export function Code(clientToken) {
  return requestarr({
    url: `/api/user-service/user/imageCode/${clientToken}`
  })
}

export function getInfo(token) {
  return request({
  })
}

export function logout() {
  return request({
  })
}
