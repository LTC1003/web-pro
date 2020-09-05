import axios from 'axios';
import config from './config';
import cookies from "js-cookie";
import router from '../router';
import qs from 'qs';
import MD5 from 'js-md5';

// 使用vuex做全局loading时使用
import store from '@/store'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout,
      withCredentials: config.withCredentials
    })
    // request 拦截器
    instance.interceptors.request.use(
      config => {
        // http request 拦截器
        // const token = JSON.parse(localStorage.getItem('loginUserInfo')).token
        // if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        //   config.headers.authorization = token  //请求头加上token
        // }
        // 1. 请求headers 添加公共参数
        var reqData = {};
        let reqParams = null;
        if (config.method === 'get') {
          // reqData = Object.assign({}, options.params, {
          //   token
          // })
          reqData = options.params
        } else {
          // reqData = Object.assign({}, config.data, {
          //   token
          // })
          reqData = options.data
        }
        // 2. 请求地址url
        switch (config.url) {
          case '/api/userservice/updateUser':
            reqParams = addCode();
            break;
          default:
            reqParams = addCode(reqData);
            if (config.method === 'post') {
              config.data = qs.stringify(config.data);
            }
            break;
        }
        config.headers['appVersion'] = reqParams.appVersion;
        config.headers['timeStamp'] = reqParams.timeStamp;
        config.headers['userAgent'] = reqParams.userAgent;
        config.headers['sign'] = reqParams.sign;
        // 3. 根据请求方法post，序列化传来的参数，根据后端需求是否序列化
        
        if (config.method === 'put') {
          config.data = qs.stringify(config.data);
        }
        return config
      },
      err => {
        // 对请求错误做些什么
        console.log(err, 'res_error');
        // 1. 判断请求超时
        if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
          return service.request(originalRequest);// 再重复请求一次
        }
        // 2. 需要重定向到错误页面
        // const errorInfo = error.response
        // if (errorInfo) {
        //   error = errorInfo.data  // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
        //   const errorStatus = errorInfo.status; // 404 403 500 ...
        //   router.push({
        //     path: `/error/${errorStatus}`
        //   })
        // }
        return Promise.reject(err) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )
    // response 拦截器
    instance.interceptors.response.use(
      response => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
          data = JSON.parse(response.request.responseText)
        } else {
          data = response.data
        }
        // console.log(data, '请求成功返回的数据，去做用户登录判断')
        // 若不是正确的返回code，且已经登录，就抛出错误
        // const err = new Error(data.desc)
        // err.data = data
        // err.response = response
        // throw err
        return data
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权，请登录'
              break
            case 403:
              err.message = '拒绝访问'
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break
            case 408:
              err.message = '请求超时'
              break
            case 500:
              err.message = '服务器内部错误'
              break
            case 501:
              err.message = '服务未实现'
              break
            case 502:
              err.message = '网关错误'
              break
            case 503:
              err.message = '服务不可用'
              break
            case 504:
              err.message = '网关超时'
              break
            case 505:
              err.message = 'HTTP版本不受支持'
              break
            default:
          }
        }
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )
    // sign+md5
    function addCode(reqData, coolback){
      /***
       * (Headers和Params 按字母a-z排序拼接参数,首字母相同按第二字母排序，依次类推，key值最后拼接,不参与排序) 
       * 如: MD5(appVersion=1.0&timeStamp=123456&token=0f47c79af7e04dd&userAgent=ios&key=DN6AjdNsv6PZXYUoOxVmrVILB+S).toUpperCase() 
       * 注：token为 Params参数 ;另Params参数为Object 其属性不参与sign签名
      ***/ 
      let reqHead = {
        userAgent: "web",
        timeStamp: (new Date()).valueOf().toString(),
        appVersion: "1.0.1",
      };  
      
      let mergeObj = Object.assign({},reqData,reqHead);

      let sortObj = {};
      let newkeyArr = Object.keys(mergeObj).sort();      
      newkeyArr.forEach((val,k) => {
        Object.keys(mergeObj).forEach((v) => {
          if(val === v){
            sortObj[v] = mergeObj[v];
          }
        })
        // 方法同上
        // for(var v in mergeObj) {
        //   if (val == v){
        //   sortObj[v] = mergeObj[v];
        //   }
        // }
      })
      // let reapteData = JSON.stringify(sortObj);
      let reapteData = decodeURIComponent(qs.stringify(sortObj));
      reapteData += '&key=DN6AjdNsv6PZXYUoOxVmrVILB+S';
      reqHead['sign'] = MD5(reapteData).toUpperCase();
      coolback = reqHead;
      // debugger;
      return coolback
    }
    // 请求处理    
    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
    })
  })
}