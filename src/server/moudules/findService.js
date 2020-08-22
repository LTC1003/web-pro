/**
 * 视频专区接口，分类视频，检索；同app端的发现栏目列表
 * 
**/ 
import axios from '../axios'
// 视频栏目-分类名称列表
export const getVideoClassifyList = (params) =>{
  return axios({
      url: '/api/findservice/video/getVideoClassifyList',
      method: 'get',
      params,
  })
}
// 视频栏目全部  / 单项栏目传参videoClassifyId, 空值全部栏目
// data {token: '凭证',videoClassifyId: '栏目id', userId: '用户id',isTourist:'观看状态\1：游客 2:用户',page: '当前页', limit:'	每页条数',}
export const getAllVideoListWeb = (data) => {
  return axios({
    url: '/api/findservice/video/getAllVideoListWeb',
    method: 'post',
    data,
  })
}
// 栏目内长视频详情-视频
// params: token, userId, videoId, isTourist
export const getLongVideoParticulars = (params) => {
  return axios({
    url: '/api/findservice/video/getLongVideoParticulars',
    method: 'get',
    params,
  })
}
// 长视频详情-视频推荐栏
// params: {token: '',userId: '', videoId: '', page:'', limit:''}
export const getLongVideoRecommend = (params) => {
  return axios({
    url: '/api/findservice/video/getLongVideoRecommend',
    method: 'get',
    params,
  })
}

// 视频热推-广告
// Params: {type: 1 ,type: 2}
export const hotBanner = (params) => {
  return axios({
    url: '/api/find/hot_push/adv_list',
    method: 'get',
    params,
  })
}
//视频热推-往期推荐
// Params{offset: '页码', 'limit': '	页码展示个数}
export const hotPrevious = (params) => {
  return axios({
    url: '/api/find/hot_push/previous_video',
    method: 'get',
    params,
  })
}
// 视频热推-查看全部热门视频 
// Params{offset: '页码', 'limit': '	页码展示个数}
export const hotVideos = (params) => {
  return axios({
    url: '/api/find/hot_push/hot_video_list',
    method: 'get',
    params,
  })
}
//视频热推-查看全部最近更新视频 
// Params{offset: '页码', 'limit': '	页码展示个数}
export const hotRecentUpdate = (params) => {
  return axios({
    url: '/api/find/hot_push/recent_update_list',
    method: 'get',
    params,
  })
}
