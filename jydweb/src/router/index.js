import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../viewPages/Home'
import About from '../viewPages/About'
Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/About', name: 'about', component: About}
];

const router = new VueRouter({
    routes
});

export default router;