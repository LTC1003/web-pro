import axios from '../axios'

// 用户登录注册，获取用户信息
// http://10.12.88.215:8080、

export const userLoginMobile = (params) =>{
  return axios({
      url: '/api/user/userLoginMobile/mobile',
      method: 'get',
      params
  })
}

export const forgetPaswd = (data) =>{
  return axios({
      url: '/api/user/forgetPassword',
      method: 'post',
      data: {},
      headers: {
        "appVersion": "1.0.1",
        "timeStamp": "1562515200",
        "userAgent": "web",
        "sign": "toUpperCase"
      }
  })
}
// 用户密码登录
export const userLoginPassword = (data) =>{
  return axios({
      url: '/api/user/userLoginPassword',
      method: 'post',
      data
  })
}