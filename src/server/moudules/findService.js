/**
 * 视频专区接口，分类视频，检索；同app端的发现栏目列表
 * 
**/ 
import axios from '../axios'
// 栏目列表
export const getVideoList = (data) =>{
  return axios({
      url: '/api/findservice/video/getAllVideoListWeb',
      method: 'post',
      data,
  })
}
// 栏目列表 默认热门推荐
export const getVideolistDefault = (data) => {
  return axios({
    url: '/api/findservice/video/getChildVideoList',
    method: 'post',
    data,
  })
}