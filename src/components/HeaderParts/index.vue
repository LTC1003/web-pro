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
            <el-dropdown-item v-for="(columnItem, index) in columnList" :key="index">
              <div class="dropdown_column" @click="getColumn(index)">{{columnItem}}</div>
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
              </div>
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
      columnList: [
        // {columnName: 'ISU'},
        // {columnName: '记录'},
        // {columnName: '剧情'},
        // {columnName: '探路'},
        // {columnName: '推荐'},
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
      "token":"ffed1db5de614796aece86e4a387001c",
      "videoClassifyId":"",
      "userId":78,
      "type": "",
      "page":1,
      "limit":10,
      "isTourist":1
    }
    this.$api.findService.getVideoList(reData).then(
      (res) => {
        console.log(res.data.result,777)
        let newData = [];
        res.data.result.forEach(val => {
          this.columnList.push(val.cateName)
        });
      }
    )
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
    routePush(name, optionId){
      console.log(name, 433322)
      this.$router.push({name: name, query: optionId});
    },
    // 视频专区选项展示
    getColumn(index){
      console.log(index, 999)
      this.$router.push({name: 'video-zone', query: {type: index}});
    }
  },

};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
