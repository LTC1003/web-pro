<template>
  <div class="header">
    <div class="header-cont">
      <div class="menuList">
        <div class="appLogo" @click="routePush('home')">
          <img :src="imgsrc" alt="logo">  
        </div>
        <div class="item-tab active" @click="routePush('pages')">视频专区</div>
        <div class="item-tab" @click="routePush('linepaly')">直播专区</div>
        <el-dropdown>
          <span class=".el-dropdown-link item-tab">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>ISU</el-dropdown-item>
            <el-dropdown-item>记录</el-dropdown-item>
            <el-dropdown-item>剧情</el-dropdown-item>
            <el-dropdown-item>TALK</el-dropdown-item>
            <el-dropdown-item>探路</el-dropdown-item>
            <el-dropdown-item>推荐</el-dropdown-item>
            <!-- <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
        <el-input class="search-type" v-model="searchVal" placeholder="sadad">
          <div style="width:30px, height: 30px" icon="el-icon-search"></div>
        </el-input>
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
  .el-dropdown-link{
    color: #DF2E47;
  }
</style>
