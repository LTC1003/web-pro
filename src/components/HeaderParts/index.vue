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
        <div class="item-tab" @click="routePush('linepaly')">直播专区</div>
        <el-input class="search-type" v-model="searchVal" placeholder="sadad">
          <div style="width:30px, height: 30px" icon="el-icon-search"></div>
        </el-input>
      </div>
      <div class="control-user">
        <el-dropdown v-if="islogin">
          <span class="el-dropdown-link">
            <el-avatar class="el-avatar" :src="avatarImg" icon="el-icon-user-solid"></el-avatar>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in userList" :key="index">
              <div class="dropdown_column" @click="routePush(item.pathName)">
                {{item.name}}
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="loginbtngurop" v-else-if="!islogin">
          <span class="sign" @click="signClick('login')">登录</span> |
          <span class="register" @click="signClick('register')">注册</span>
        </div>
      </div>
      <Login :login="loginMsg" v-show="visibleState"
        @changeState="getStateVal">
      </Login>
      <PopupWin :popData="userOut" @onFromPopData="outuser" v-show="userOut.showType"></PopupWin>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
import PopupWin from "@/components/PopupWin";
export default {
  name: "header-cont",
  components: {
    Login,
    PopupWin,
  },
  props: [
    'typeList'
  ],
  data() { 
    return {
      userOut: {
        type: 3,
        docs: '确定要退出当前用户?',
        showType: false,
      },
      imgsrc: require('@/assets/img/toSeeBlackLogo.png'),
      // reuserData: {},
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
        {name: '退出',pathName: 'outUsers'},
      ],
      islogin: 0, // 用户未登陆状态
      visibleState: false, // 显示登陆弹窗
    }
  },
  mounted() {
    if (!!localStorage.loginUserInfo && JSON.parse(localStorage.loginUserInfo).token) {
      this.avatarImg = JSON.parse(localStorage.loginUserInfo).avatar;
      this.islogin = 1;
      // this.reuserData = JSON.parse(localStorage.loginUserInfo);
      // console.log(this.reuserData, 223);
    }else{
      console.log(2222);
      // 用户未登陆
      // this.islogin = 0;
    }
  },
  methods: {
    signClick(name){
      // console.log(name, '用户登录注册');
      this.loginMsg = name;
      this.visibleState = true;
    },
    // 登录子组件传值
    getStateVal(val){
      console.log(val, 776)
      this.visibleState = val.isShow;
      this.islogin = val.isLogin;
      this.avatarImg = val.userData.avatar;
    },
    routePush(name){
      if (name === "outUsers"){ // 退出
        this.userOut.showType = true;
      } else {
        this.$router.push({name: name});
      }
    },
    // 视频专区选项展示
    getColumn(typeId){
      // console.log(typeId, 'headPage');
      this.$router.push({name: 'video-zone', query: {id: typeId}});
    },
    // 退出登录子组件传值
    outuser(val){
      this.userOut.showType = val.showType; // false   
      this.islogin = val.islogin; // 0
    }
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
