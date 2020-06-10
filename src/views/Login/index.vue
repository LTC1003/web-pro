<template>
  <div class="login">
    <div class="login-warp">
      <div class="navs">
        <!-- <div class="navs-note">短信登录</div>
        <div class="navs-account">账号登录</div> -->
        <div class="nav" :class="{active: isActive == index }" @click="clickActive(isActive = index )" v-for="(item, index) in navList" :key="index">{{item.name}}</div>
      </div>
      <div v-show="!isShow">反向</div>
      <div class="loginbody" v-show="isShow">
        <el-form :model="formLogin" class="loginform">
          <el-form-item >
            <el-input v-model="formLogin.moblie" placeholder="手机号" icon="el-icon-my-close" suffix-icon="el-icon-my-close"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="formLogin.verify" placeholder="验证码">
              <i icon="el-icon-my-erase"  class="el-icon-my-erase el-input__icon"
                slot="suffix"
                @click="handleIconClick">
              </i>  
            </el-input>
          </el-form-item>
          <div class="btn-denger">登录</div>
        </el-form>
        <div class="other"><span>忘记密码</span>|<span>注册</span></div>
      </div>
      <div class="partners">
        <div class="masthead">第三方登录</div>
        <div class="partother">
          <div class="wxlogo"></div>
          <div class="qqlogo"></div>
          <div class="wblogo"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'login',
    components: {
    },
    data () {
      return {
        isShow: true,
        navList: [
          {name: '短信登录'},
          {name: '账号登录'}
        ],
        isActive: 0,
        isClick: 'open',
        showState: '',
        title: "title",
        formLogin: {
          moblie: '',
          verfiy: "",
          tset: ''
        },
        
        loginData: {
          title: "用户",
          visibleState: false,
        }
      }
    },
    props: [
      "login",
    ],
    watch: {
      login: {
        handler(nval, oval){
          console.log(887,nval,oval);
          this.loginData = nval
        }
      }
    },
    mounted() { 
      // console.log(2223333, this.$props.login);
      // this.loginData = this.$props.login
    },
    methods: {
      close(){
        this.loginData.visibleState = false;
        console.log(2222, this.loginData.visibleState);
        this.$emit('changeState', this.loginData.visibleState);
      },
      onSubmit(){
        this.$emit('changeState', this.loginData.visibleState);
      },
      handleIconClick(ev){
        console.log(ev, 11111);
      }
    }
  }
</script>

<style lang="scss">
  @import './index.scss'
</style> 