import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainContent from "../components/MainContent";
import Lineplay from "../components/Lineplay";
import LineplayDetails from "../components/LineplayDetails";
import ShortVideo from "../components/ShortVideo";
import DownloadApp from "../components/DownloadApp";

// from supplementary 
import About from "../components/About";
import Privacy from "../components/Privacy";
import UserAgreement from "../components/UserAgreement";
import NewAnchorGuidelines from "../components/NewAnchorGuidelines";
import LaunchToolDownload from "../components/LaunchToolDownload";
import LaunchTutorial from "../components/LaunchTutorial";
// from supplementary 

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: {
      name: 'main-content'
    },
    component: Home,
    children:[
      {
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Login.vue")
      },
      {
        path: '/supplementary',
        name: 'supplementary',
        component: () => import("../views/Supplementary"),
        children: [

          {path: '/supplementary/about', name: 'about', component: About},
          {path: '/supplementary/privacy', name: 'privacy', component: Privacy},
          {path: '/supplementary/user-agreement', name: 'user-agreement', component: UserAgreement},
          {path: '/supplementary/new-anchor-guidelines',name: 'new-anchor-guidelines', component: NewAnchorGuidelines},
          {path: '/supplementary/launch-tool-download', name: 'launch-tool-download', component: LaunchToolDownload},
          {path: '/supplementary/launch-tutorial', name: 'launch-tutorial', component: LaunchTutorial},
        ]
      },
      {path: '/main-content', name: 'main-content', component: MainContent},
      {path: '/lineplay',name: 'lineplay', component: Lineplay},
      {path: '/lineplay-details', name: 'lineplay-details', component: LineplayDetails},
      {path: '/short-video', name: 'short-video',component: ShortVideo},
      {path: '/download-app',name: 'download-app', component: DownloadApp},
    ]
  },
];

// NavigationDuplicated {name: "NavigationDuplicated"} 报错
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
