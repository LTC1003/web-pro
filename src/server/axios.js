import axios from 'axios';
import config from './config';
import cookies from "js-cookie";
import router from '../router';
import qs from 'qs';
import MD5 from 'js-md5'
// 使用vuex做全局loading时使用
import store from '@/store'

// 全局的axios默认值
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    
    // 自定义实例默认
    const instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      // timeout: config.timeout,
      // withCredentials: config.withCredentials
    })

    // request 拦截器
    instance.interceptors.request.use(
      config => {
        // let token = cookies.get('token')
        // 1. 请求开始的时候可以结合 vuex 开启全屏 loading 动画
        // console.log(store.state.loading)
        // console.log('准备发送请求...')
        // 2. 带上token
        // if (token) {
        //   config.headers.token = token
        // } else {
        //   // 重定向到登录页面
        //   // router.push('/login')
        // }
        // 3. 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        if (config.method === 'post') {
          // config.headers
          // if (config.url == '/api/user/userLoginPassword'){
            // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            var reqHead = {
              userAgent: "web",
              timeStamp: (new Date()).valueOf(),
              appVersion: "1.0.1",
            }
            config.headers['timeStamp'] = reqHead.timeStamp;
            config.headers['userAgent'] = reqHead.userAgent;
            config.headers['appVersion'] = reqHead.appVersion;
            config.headers['sign'] = addCode(config.data, reqHead);
            console.log(config.headers['sign'],66665)
  
            console.log(11222, config.headers)
          // }
          
          config.data = qs.stringify(config.data);
        }

        // md5 + UpperCase
        function addCode(param1, param2, coolback){
          /***
           * (Headers和Params 按字母a-z排序拼接参数,首字母相同按第二字母排序，依次类推，key值最后拼接,不参与排序) 
           * 如: MD5(appVersion=1.0&timeStamp=123456&token=0f47c79af7e04dd&userAgent=ios&key=DN6AjdNsv6PZXYUoOxVmrVILB+S).toUpperCase() 
           * 注：token为 Params参数 ;另Params参数为Object 其属性不参与sign签名
          ***/
          console.log(param1,param2, 333);
          var sortObj = Object.assign({}, param1, param2)
          var sortArr = Object.keys(sortObj).sort();
          var newData= [];
          sortArr.forEach((val,k) => {
            for (var v in sortObj){
              if(val == v){
                val = {};
                val[v] = sortObj[v];
                newData.push(val);
                return;
              }
            }
          })
          // console.log(newData,677)
          var str = JSON.stringify(newData)
          str = str.replace(/:/g, '=');
          str = str.replace(/,/g, '&');
          str = str.replace(/[ \{ | \} | \' | \" | \[ | \] ]/g, '');
          str += '&key=DN6AjdNsv6PZXYUoOxVmrVILB+S'
          var perCase = MD5(str).toUpperCase();
          console.log(str, perCase,'toupper');
          coolback = perCase;
          return coolback
        }
        // md5 + UpperCase
        console.log(config, 'reqconfig')
        return config
      },
      error => {
        // 请求错误时
        console.log('request:', error)
        // 1. 判断请求超时
        // if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        //   console.log('timeout请求超时')
        //   // return service.request(originalRequest);// 再重复请求一次
        // }
        // 2. 需要重定向到错误页面
        // const errorInfo = error.response
        // if (errorInfo) {
        //   error = errorInfo.data  // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
        //   const errorStatus = errorInfo.status; // 404 403 500 ...
        //   router.push({
        //     path: `/error/${errorStatus}`
        //   })
        // }
        // return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
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

        // 根据返回的code值来做不同的处理
        switch (data.rc) {
          case 1:
            console.log(data.desc)
            break;
          case 0:
            store.commit('changeState')
            // console.log('登录成功')
          default:
        }
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

    console.log(instance, 888);

    // 请求处理
    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
    })
  })
}