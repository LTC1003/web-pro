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
// 验证短息
// /api/code/login/check_code
export const loginCheckCode = (data) =>{
  return axios({
      url: '/api/code/login/check_code',
      method: 'post',
      data,
  })
}

// 用户手机登录/注册   
export const userLoginMobile = (params) =>{
  return axios({
    url: '/api/user/userLoginMobile/' + params.moblie,
    params
  })
}

// 用户密码登录 userMobile/userPassword/lastLoginTime/lastLoginIp
export const userLoginPassword = (data) =>{
  return axios({
      url: '/api/user/userLoginPassword',
      method: 'post',
      data,
  })
}

// 以旧换新修改密码
// /api/user/changePassword
export const changePassword = (data) =>{
  return axios({
      url: '/api/user/changePassword',
      method: 'put',
      data,
  })
}

// 忘记密码手机短信认证修改密码
// /api/user/forgetPassword
export const forgetPassword = (data) =>{
  return axios({
      url: '/api/user/forgetPassword',
      method: 'post',
      data,
  })
}


/**
 * 个人中心 用户身份信息
**/ 
// 修改身份角色
export const setRoleList = (params) =>{
  return axios({
      url: '/api/userservice/roleList',
      method: 'get',
      params,
  })
}