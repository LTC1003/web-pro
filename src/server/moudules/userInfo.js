import axios from '../axios'

/**
 * 用户登录注册，获取用户信息
 * http://10.12.88.215:8080
 * **/ 
// 获取短信验证码 get
export const getLoginSendcode = (params) =>{
  return axios({
      url: '/api/code/login/send_code',
      method: 'get',
      params,
  })
}

// 用户手机登录/注册   
export const userLoginMobile = (params) =>{
  return axios({
      url: '/api/user/userLoginMobile/{mobile}',
      method: 'get',
      params,
  })
}

// 用户密码登录
export const userLoginPassword = (data) =>{
  return axios({
      url: '/api/user/userLoginPassword',
      method: 'post',
      data,
  })
}