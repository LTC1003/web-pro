import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainContent from "../components/MainContent";
import Lineplay from "../components/Lineplay/";
import Video from "../components/Video";
import DownloadApp from "../components/DownloadApp";

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(ViewUI);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children:[
      {path: 'main-content', component: MainContent},
      {path: 'lineplay', component: Lineplay},
      {path: 'Video', component: Video},
      {path: 'download-app', component: DownloadApp},
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
