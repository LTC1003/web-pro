import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Pages from "../views/Pages";
import VideoZone from "../views/VideoZone";
import Lineplay from "../views/Lineplay";
import Register from "./../views/Register";
import Login from "../components/Login";
import Repository from "../views/repository";
import SearchInfoList from "../views/SearchInfoList";

/**修改密码**/
import RetrievePaswd from "../views/RetrievePaswd";
import FillInfo from "../views/RetrievePaswd/FillInfo"
import ResetPaswd from "../views/RetrievePaswd/ResetPaswd"
import ResetSuccess from "../views/RetrievePaswd/ResetSuccess"
/**修改密码**/ 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: '/pages',
    name: 'pages',
    component: Pages,
    // 重定项
    redirect: { name: 'video-zone' },
    children: [
      // 视频专区
      {
        path: "video-zone", 
        name: 'video-zone',
        component: VideoZone,
      },
      // 主播专区
      { 
        path: "/lineplay", 
        name: "linepaly", 
        component: Lineplay 
      },
      // 搜索专区
      {
        path: "search-info-list",
        name: "search-info-list",
        component: SearchInfoList,
      },
      // 用户专区
      // {
      //   path:"user ",
      //   name: "user ",
      //   component: user
      // },
      // 注册登录
      // {path: "/register", name: 'register', component: Register},
      // {
      //   path: '/retrieve-paswd',
      //   name: 'retrieve-paswd',
      //   component: RetrievePaswd,
      //   children: [
      //     {
      //       path: "/retrieve-paswd/",
      //       name: 'fillinfo',
      //       component: FillInfo,
      //     },
      //     {
      //       path: "/retrieve-paswd/reset-paswd",
      //       name: 'reset-paswd',
      //       component: ResetPaswd,
      //     },
      //     {
      //       path: "/retrieve-paswd/reset-success",
      //       name: 'reset-success',
      //       component: ResetSuccess,
      //     },
      //   ]
      // },
    ]
  },
  {
    path: '/repository',
    name: 'repository',
    meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    component: Repository
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }

];

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;
