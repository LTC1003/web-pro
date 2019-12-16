<template>
  <div class="home">
    
    <header class="header-top">
      <div class="applogo">
        <!-- <img src="@/assets/logo.png" alt="logo"> -->
      </div>
      <div class="navList">
        <div class="navtab" :class="[navItem.name == activeName ? 'activeClass': '']" v-for="(navItem, i) in navList" :key="i" :name ="navItem.name"
          @click="routeName(navItem.route,navItem.name); ">
          {{navItem.name}}
        </div>
      </div>

      <div class="user-login-info">

        <el-input
        style="width: 200px; height: 35px"
          placeholder="请输入内容"
          suffix-icon="el-icon-search"
          v-model="inputValue">
        </el-input>
        
        <div>
          <div class="concern el-icon-star-off"> 
            <span>关注</span>
          </div>
          <div class="account el-icon-user">
            <span><a href="">登陆</a></span> | <span><a href="">注册</a></span>
          </div>
        </div>

      </div>  
    </header>
    <router-view></router-view>
    <FootMain></FootMain>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import FootMain from "@/components/FootMain";
export default {
  name: "home",
  components: {
    FootMain
  },
  data() {
    return {
      activeName: '',
      ctiveName: 'second',
      inputValue: '',
      navList: [
        {name: '首页', route: '/main-content'},
        {name: '直播', route: '/lineplay'},
        {name: '视频', route: '/short-video'},
        {name: 'APP下载', route: '/download-app'},
      ],
      // navIndex: 0,
    }
  },
  mounted() {
  },
  methods: {
    routeName(route, name) {
      // console.log(this.$router.push(route));
      this.activeName = name;
      this.$router.push(route);
    },
   
  }
};
</script>
<style lang="scss">
  @import "common.scss";
  .activeClass {
    border-bottom: 2px solid #409EFF;
  }
</style>
