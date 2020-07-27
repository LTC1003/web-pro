<template>
  <div class="header">
    <div class="header-cont">
      <div class="menuList">
        <div class="appLogo" @click="routePush('home')">
          <img :src="imgsrc" alt="logo">  
        </div>
        <div class="item-tab active" @click="routePush('main-content')">视频专区</div>
        <div class="item-tab" @click="routePush('linepaly')">直播专区</div>
        <el-input class=" search-type" suffix-icon="el-icon-search" v-model="searchVal" placeholder="sadad"></el-input>
      </div>
      <div class="control-user">
        <el-avatar class="avatar" icon="el-icon-user-solid"></el-avatar>
        <div>{{user.name}} <span class="el-icon-caret-bottom"> </span></div>
        <!-- <span class="sign" @click="signClick('login')">Signin</span>|<span class="register" @click="signClick('register')">register</span> -->
      </div>
      <Login :login="loginMsg" v-show="visibleState"
        @changeState="getStateVal">
      </Login>
    </div>
  </div>
</template>

<script>
import Login from "../Login"
export default {
  name: "header-cont",
  components: {
    Login,
    // Register
  },
  data() { 
    return {
      // imgsrc: require('@/assets/home/appLogo.png'),
      // imgsrc: require('@/assets/img/toSeeLogo.png'),
      imgsrc: require('@/assets/img/toSeeBlackLogo.png'),
      searchVal: '',
      loginMsg: "",
      visibleState: false,
      user: {
        name: "你大爷干啥"
      }
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

<style lang="scss">
  @import "./index.scss";
</style>
