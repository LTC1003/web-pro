import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../viewPages/Home";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";


Vue.use(VueRouter);

const routes = [
    {path: "/", component: Home, children: []},
    {path: '/Header', component: () => import('../components/Header/Header'), children:[
        {path: '/foo', name: 'foomain', component: () => import('../components/Footer/Footer')}
]},
    {path: '/Footer', component: () => import('../components/Footer/Footer')},

]
const router = new VueRouter({
    routes
});

export default router;