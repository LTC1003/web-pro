import Vue from "vue";
import VueRouter from "vue-router";

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import Home from "../viewPages/Home";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";


Vue.use(VueRouter);
Vue.use(ViewUI);

const routes = [
    {path: "/", component: Home, children: []},
//     {path: '/Header', component: () => import('../components/Header/Header'), children:[
//         {path: '/foo', name: 'foomain', component: () => import('../components/Footer/Footer')}
// ]},
//     {path: '/Hooter', component: () => import('../components/Footer/Footer')},

]
const router = new VueRouter({
    routes
});

export default router;