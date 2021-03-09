import fs = require("fs");
import path = require("path");
// import axios =require("axios");
import axios from 'axios'

// create an axios instance
let service = axios.create({
  timeout: 10000 // request timeout
})
const filePath = path.resolve(__dirname, '../common/token')
// request interceptor
service.interceptors.request.use(
  config => {
    config.headers.authorization = fs.readFileSync(filePath, 'utf8')
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code < 0) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
