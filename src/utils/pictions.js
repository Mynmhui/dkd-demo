import axios from 'axios'

const requestarr = axios.create({
  baseURL: 'http://likede2-admin.itheima.net/likede/', 
  timeout: 5000 
})

export default requestarr