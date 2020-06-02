import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainContent from "../views/MainContent";
import Lineplay from "../views/Lineplay";



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: 'main-content' },
    component: Home, 
    children:[
      {path: "main-content", name: 'main-content', component: MainContent},
      {path: "lineplay", name: "linepaly", component: Lineplay}
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
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
