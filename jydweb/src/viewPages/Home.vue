<template>
  <div class="home">
    <div class="head-nav">
      <head-top></head-top>
    </div>
    <div class="content-main">
      <main-content></main-content>
      <router-view></router-view>
    </div>
    <div class="foot-info">
      <foot-info></foot-info> 
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import headTop from "../components/Header/Header";
import footInfo from "../components/Footer/Footer";
import mainContent from "../components/Main/Main";

Vue.use(headTop);
Vue.use(footInfo);
Vue.use(mainContent);

export default {
  name: "home",

  components: {
   headTop,
   footInfo,
   mainContent
  },
  data () {
    return {

    }
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>

<style lang="scss">
  @import 'common'
</style>