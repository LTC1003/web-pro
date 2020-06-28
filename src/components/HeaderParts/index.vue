<template>
  <div class="header-parts">
    <router-link class="appLogo" to="/home/main-content">
      <img :src="imgsrc" alt="logo">
    </router-link>
    <div class="menuList">
      <div class="item-tab active" @click="routePush('main-content')">首页</div>
      <div class="item-tab" @click="routePush('linepaly')">直播</div>
      <div class="item-tab">视频</div>
      <div class="item-tab">app下载</div>
    </div>
    <div class="control-group">
      <el-input class="search-type" suffix-icon="el-icon-search" v-model="searchVal"></el-input>
      <div class="cont-follow">关注</div>
      <div class="cont-user">
        <span class="sign" @click="signClick('login')">Signin</span>|<span class="register" @click="signClick('register')">register</span>
      </div>
    </div>  
    <Login :login="loginMsg" v-show="visibleState"
      @changeState="getStateVal">
    </Login>
     
  </div>
</template>

<script>
import Login from "../Login"
export default {
  name: "header-parts",
  components: {
    Login,
    // Register
  },
  data() { 
    return {
      imgsrc: require('@/assets/home/appLogo.png'),
      searchVal: '',
      loginMsg: "",
      visibleState: false,
    }
  },
  mounted() {
    
  },
  methods: {
    signClick(name){
      console.log(name);
      this.loginMsg = name;
      this.visibleState = true;
      // this.$router.push({name: name})
    },
    getStateVal(val){
      this.visibleState =val
    },
    routePush(name){
      this.$router.push({name: name})
    },
  },

};
</script>

<style lang="scss" scope>
  @import "./index.scss";
</style>
