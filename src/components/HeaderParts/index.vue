<template>
  <div class="header-parts">
    <div class="appLogo">
      <img :src="require('@/assets/home/applogo.png')" alt="logo">
    </div>
    <div class="menuList">
      <div class="item-tab active">首页</div>
      <div class="item-tab" @click="routePush()">直播</div>
      <div class="item-tab">视频</div>
      <div class="item-tab">app下载</div>
    </div>
    <div class="control-group">
      <el-input class="search-type" suffix-icon="el-icon-search" v-model="searchVal"></el-input>
      <div class="cont-follow">关注</div>
      <div class="cont-user">
        <span class="sign" @click="signClick()">Signin</span>|<span class="register" @click="registerClick()">register</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-parts",
  components: {},
  data() { 
    return {
      text: "commont header parts",
      searchVal: '和平精英2.0v',
    }
  },
  mounted() {

  },
  methods: {  
    signClick(){
      this.$router.push({name: 'login'});
    },
    registerClick(){
      this.$router.push({name: 'register'});
    },
    routePush(){
      this.$router.push({name: "linepaly"})
    }
  },
};
</script>

<style lang="scss" scope>
  @import "./index.scss";
</style>
