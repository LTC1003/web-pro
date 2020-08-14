<template>
  <div class="header">
    <div class="header-cont">
      <div class="menuList">
        <div class="appLogo" @click="routePush('home')">
          <img :src="imgsrc" alt="logo">  
        </div>
        <el-dropdown>
          <span class="el-dropdown-link item-tab">
            视频专区<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in typeList" :key="index">
              <div class="dropdown_column" @click="getColumn(item.id)">{{item.cateName}}</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
         <!-- <div class="item-tab active" @click="routePush('pages')">视频专区</div> -->
        <div class="item-tab" @click="routePush('linepaly')">直播专区</div>
        <el-input class="search-type" v-model="searchVal" placeholder="sadad">
          <div style="width:30px, height: 30px" icon="el-icon-search"></div>
        </el-input>
      </div>
      <div class="control-user">
        <!-- <el-avatar class="el-avatar" @click="routePush('userInfo')" icon="el-icon-user-solid"></el-avatar> -->
        <!-- <div>{{user.name}} <span class="el-icon-caret-bottom"> </span></div> -->
        <el-dropdown v-if="islogin">
          <span class="el-dropdown-link">
            <el-avatar class="el-avatar" :src="avatarImg" icon="el-icon-user-solid"></el-avatar>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in userList" :key="index">
              <div class="dropdown_column" @click="routePush(item.pathName, index+1)">
                {{item.name}}
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="loginbtngurop" v-else-if="!islogin">
          <span class="sign" @click="signClick('login')">Signin</span> |
          <span class="register" @click="signClick('register')">register</span>
        </div>
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
  props: [
    'typeList'
  ],
  data() { 
    return {
      imgsrc: require('@/assets/img/toSeeBlackLogo.png'),
      avatarImg: '',
      searchVal: '',
      loginMsg: "",
      user: {
        name: "你大爷干啥"
      },
      // videoCategory: [
      //   {cateName: "热推",id: 16,type: 1},
      //   {cateName: "热推",id: 17,type: 2},
      //   {cateName: "热推",id: 18,type: 3},
      // ],
      userList: [
        {name: '个人',pathName: 'personal'},
        {name: '历史',pathName: 'history'},
        {name: '上传',pathName: 'upload'},
        {name: '观众',pathName: 'audience'},
        {name: '消息',pathName: 'messages'},
      ],
      islogin: 0, // 用户未登陆状态
      visibleState: 0, // 显示登陆弹窗
    }
  },
  mounted() {
    console.log(JSON.parse(localStorage.getItem('loginUserInfo')),"mmm");
    if (localStorage.getItem('STORAGE_STATE')){
      // 用户登陆成功切换头像
      this.islogin = 1; 
      this.avatarImg = JSON.parse(localStorage.getItem('loginUserInfo')).avatar;
    } else {
      // 用户为登陆
      this.islogin = 0;
    }
  },
  methods: {
    signClick(name){
      // console.log(name, '用户登录注册');
      this.loginMsg = name;
      this.visibleState = true;
    },
    getStateVal(val){
      console.log(val, 776)
      this.visibleState = val.isShow
      // this.visibleState =val
    },
    routePush(name){
      console.log(name, "头部导航路由跳转")
      this.$router.push({name: name});
    },
    // 视频专区选项展示
    getColumn(typeId){
      console.log(typeId, 'headPage');
      this.$router.push({name: 'video-zone', query: {id: typeId}});
    }
  },

};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
