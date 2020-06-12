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

router.beforeEach((to,from, next) => {
  store.state.path = to.fullPath;
  next();
  // if(!localStorage.AccessToken) {
  //   next('/');
  // }
})