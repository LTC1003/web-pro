<template>
  <div class="home">
    <div class="head-nav">
      <head-top datastr></head-top>
    </div>
    <div class="content-main">
      首页内容 {{viewShow}}
      <router-view></router-view>
    </div>
    <div class="foot-info">
      
      <foot-info viewData>底部公共信息</foot-info> 
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import headTop from "../components/Header/Header.vue"
import footInfo from "../components/Footer/Footer.vue"
Vue.use(headTop);
Vue.use(footInfo);

export default {
  name: "home",

  components: {
   headTop,
   footInfo
  },
  data () {
    return {
      viewShow : "先知道我看到了什么？"
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>

<style lang="stylus" scoped>

</style>