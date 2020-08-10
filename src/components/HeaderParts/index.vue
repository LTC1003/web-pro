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
            <el-dropdown-item v-for="(item, index) in videoCategory" :key="index">
              <div class="dropdown_column" @click="getColumn(item.typeId)">{{item.type}}</div>
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
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar class="el-avatar" icon="el-icon-user-solid"></el-avatar>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in userList" :key="index">
              <div class="dropdown_column" @click="routePush(item.pathName, index+1)">
                {{item.name}}
              </div>s
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="loginbtngurop" >
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
  data() { 
    return {
      imgsrc: require('@/assets/img/toSeeBlackLogo.png'),
      searchVal: '',
      loginMsg: "",
      visibleState: false,
      user: {
        name: "你大爷干啥"
      },
      videoCategory: [
        // {type: '记录', typeId: 1},
      ],
      userList: [
        {name: '个人',pathName: 'personal'},
        {name: '历史',pathName: 'history'},
        {name: '上传',pathName: 'upload'},
        {name: '观众',pathName: 'audience'},
        {name: '消息',pathName: 'messages'},
      ],
    }
  },
  mounted() {
    var reData = {
      "token":"",
      "videoClassifyId": "",
      "userId": '',
      "type": "",
      "page": 1,
      "limit": 10,
      "isTourist":1
    }
    this.$api.findService.getVideoList(reData).then(
      (res) => {
        if(res.message === "操作成功"){
          res.data.result.forEach(val => {
            let newData = {};
            newData['type'] = val.cateName
            newData['typeId'] = val.id
            this.videoCategory.push(newData);
          });
        }
      }
    )
    this.getColumn();
  },
  methods: {
    signClick(name){
      console.log(name, '用户登录注册');
      this.loginMsg = name;
      this.visibleState = true;
    },
    getStateVal(val){
      this.visibleState =val
    },
    routePush(name, optionId){
      console.log(name, 433322)
      this.$router.push({name: name, query: optionId});
    },
    // 视频专区选项展示
    getColumn(typeId){
      console.log(typeId, 'headPage');
      this.$router.push({name: 'video-zone', query: {type: typeId}});
    }
  },

};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
