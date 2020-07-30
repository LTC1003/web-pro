import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from './server/api';

const MD5 = require('js-md5');

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$md5 = MD5;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// router.beforeEach((to,from, next) => {
//   store.state.path = to.fullPath;
//   next();
//   // if(!localStorage.AccessToken) {
//   //   next('/');
//   // }
// })

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    // console.log(to.meta, 444)
      if (store.state.token) {  // 通过vuex state获取当前的token是否存在
          next();
      }
      else {
          next({
              path: '/login',
              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }
  else {
    console.log(to, 'sad')
      next();
  }
})