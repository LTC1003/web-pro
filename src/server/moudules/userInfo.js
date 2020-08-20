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
// phone_number code
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
// 退出登录
export const outUsers = (params) =>{
  return axios({
    url: '/api/user/loginOut',
    method: 'get',
    params
  })
}

/**
 * 个人中心 用户身份信息
**/ 
// 身份角色 -1创建人设默认 
export const getRoleList = (params) =>{
  return axios({
    url: '/api/userservice/roleList',
    method: 'get',
    params,
  })
}
// 修改用户角色
export const updateUserRole = (data) =>{
  return axios({
    url: '/api/userservice/updateUser',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 兴趣标签
export const tagsList = (params) =>{
  return axios({
    url: '/api/userservice/labelList',
    method: 'get',
    params,
  })
}
// 首次修改密码
export const changePasdfirst = (data) =>{
  return axios({
    url: '/api/user/changePasswordFirst',
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

// 手机绑定
export const bindMobile = (data) =>{
  return axios({
      url: '/api/third/bindMobile',
      method: 'post',
      data,
  })
}