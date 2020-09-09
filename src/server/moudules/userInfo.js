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
    // headers: {
    //   'Content-Type':  'application/json'
    // }
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

/**
 * 观看历史记录
*/
// 观看列表
// user_id page limit module_type
export const viewHistoryList = (params) =>{
  return axios({
    url: '/api/user/look/list',
    method: 'get',
    params,
  })
}
// 添加观看纪录 video_id user_id module_type
export const addLookVideoHistory = (params) => {
  return axios({
    url: '/api/user/look/add',
    method: 'get',
    params,
  })
}
// 删除历史观看(批量) user_id id_list module_type token
export const delListLookVideoHistory = (data) => {
  return axios({
    url: '/api/user/look/batch_del',
    method: 'post',
    data,
  })
}

/**
 * 用户感兴趣的短视频 栏目视频 添加 删除
**/ 
// 添加短视频||添加专刊视频  user_id video_id module_type
export const addHobbyVideo = (params) =>{
  return axios({
    url: '/api/user/my_interest/add',
    method: 'get',
    params,
  })
}
// 兴趣短视频list||兴趣专刊视频list token user_id module_type page limit
export const videoHobbyList = (params) =>{
  return axios({
    url: '/api/user/my_interest/list',
    method: 'get',
    params,
  })
}
// 删除兴趣视频 token user_id id_list module_type
export const videoHobbyDelete = (data) =>{
  return axios({
    url: '/api/user/my_interest/batch_del',
    method: 'post',
    data,
  })
}
// 短视频||专栏一键删除 user_id module_type
export const videoHobbyDeleteAll = (params) =>{
  return axios({
    url: '/api/user/my_interest/del_all',
    method: 'get',
    params,
  })
}

/**
* 关注和取关的 用户
**/
// 我的关注-列表  token userId page limit
export const attentionList = (params) =>{
  return axios({
    url: '/api/userservice/attention/attentionList',
    method: 'get',
    params,
  })
}
// 取消关注  token attentionId
export const delAttention = (params) =>{
  return axios({
    url: '/api/userservice/attention/delAttention',
    method: 'get',
    params,
  })
}
// 添加关注用户  token uid touid
export const addAttention = (data) =>{
  return axios({
    url: '/api/userservice/attention/addAttention',
    method: 'post',
    data,
  })
}
// 反馈列表 Feedback
export const feedbackList = (params) =>{
  return axios({
    url: '/api/user/help/list',
    method: 'get',
    params,
  })
}
// 反馈建议提交  //user_id content image
export const feedbackAdd = (params) =>{
  return axios({
    url: '/api/user/feedback/add',
    method: 'get',
    params,
  })
}
// toSeeType == 1 ? 用户协议 : toSeeType == 2 ? 隐私政策 : ''
// toSeeType token
export const toseeUserAgreement = (params) =>{
  return axios({
    url: '/api/userservice/abouttosee/type',
    method: 'get',
    params,
  })
}