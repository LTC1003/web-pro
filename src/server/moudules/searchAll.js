import axios from '../axios'

/**
 * 搜索 接口(短视频、专栏视频、直播、用户)
 * http://10.12.88.215:8080
**/ 

// 搜索结果
// token userId searchKey(搜索的关键字)  page limit isTourist type (0,1,2,3,4)
export const getSearchContent = (data) => {
  return axios({
    url: '/api/seeservice/search/getSearchContent',
    method: 'post',
    data,
  })
}