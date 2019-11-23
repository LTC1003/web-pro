import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../viewPages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: Home, children: []},
        {path: '/Header',name: 'header', component: Header},
        {path: '/Main',name: 'main', component: Main},
        {path: '/Footer',name: 'footer', component: Footer}
    ]
});

export default router;