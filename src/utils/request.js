import axios from 'axios'
// import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['Authorization'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['Authorization'] = getToken()
    // }
    config.headers['Authorization'] = getToken()
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    const res = response.data
    if (res.code !== 1000) {
      // Message({
      //   message: res.msg || 'Error',
      //   type: 'error',
      //   duration: 2 * 1000
      // })

      //
      if (res.code === 1001) {
        // to re-login
        // MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //   confirmButtonText: 'Re-Login',
        //   cancelButtonText: 'Cancel',
        //   type: 'warning'
        // })
        //   .then(() => {
        //     store.dispatch('user/resetToken').then(() => {
        //       location.reload()
        //     })
        //   })
        //   .catch(() => {
        //     console.log('Click cancel')
        //   })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.msg || 'Errors',
    //   type: 'error',
    //   duration: 2 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
