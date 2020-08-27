// const baseUrl = 'http://10.12.89.46:8080'
// 测试
const baseUrl = 'https://toseetest.jyddnw.com'
module.exports = {
  baseUrl,
  config: {
    method: 'get',
    // 基础url前缀
    baseUrl: baseUrl,
    // 请求头信息Content-Type 默认设置json
    headers: {
      'Content-Type': 'application/json',
    },
    // 参数
    data: {},
    // 在超时前, 所有请求都会等待2500ms
    timeout: 2500,
    // 携带凭证
    withCredentials: false,
    // 返回数据类型
    responseType: 'json'
  }
}
