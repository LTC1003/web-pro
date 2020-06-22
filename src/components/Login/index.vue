<template>
  <div class="login" @click.self="onClick(false)">
    <div class="login-warp" v-if="loginData == 'login'">
      <div class="navs">
        <div class="nav"
        :class="{active: isActive == index }" 
        @click="clickActive(item,index)" 
        v-for="(item, index) in navList" 
        :key="index">{{item.name}}
        </div>
      </div>
      <div class="loginbody" v-show="isShow">
        <!-- 账号登录 -->
        <el-form :model="loginPaswd" class="loginform">
          <el-form-item>
            <el-input v-model="loginPaswd.moblie" placeholder="手机号">
              <i
                icon="el-icon-my-close"  
                class="el-icon-my-close el-input__icon"
                slot="suffix"
                @click="clearInputVal">
              </i>
            </el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="loginPaswd.verify" type="password" placeholder="密码">
              <i icon="el-icon-my-erase"  
                class="el-icon-my-erase el-input__icon"
                slot="suffix"
                @click.prevent="visibilityTab">
              </i>  
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="onSubmit('loginPaswd')">登录</div>
        </el-form>
      </div>
      <div class="loginbody" v-show="!isShow">
        <!-- 验证码 -->
        <el-form :model="loginVerify" class="loginform">
          <el-form-item>
            <el-input v-model="loginVerify.moblie" placeholder="手机号">
              <i
                icon="el-icon-my-close"  
                class="el-icon-my-close el-input__icon"
                slot="suffix"
                @click="clearInputVal">
              </i>
            </el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="loginVerify.verIfy" placeholder="验证码">
              <span slot="suffix" @click="getCodeVerify">获取验证码</span>
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="submitVerify(loginVerify)">登录</div>
        </el-form>
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
    <div class="register-warp" v-if="loginData == 'register'">
      <div class="navs">
        <div class="nav active">账号注册</div>
      </div>
      <div class="loginbody" >
        <el-form :model="register" class="loginform">
          <el-form-item>
            <el-input v-model="register.moblie" 
            placeholder="手机号"
            @focus="headleFocus">
              <i
                v-show="isIconClose"
                icon="el-icon-my-close"  
                class="el-icon-my-close el-input__icon"
                slot="suffix">
              </i>
            </el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="register.password">
              <i icon="el-icon-my-erase"  
                class="el-icon-my-erase el-input__icon"
                slot="suffix"
                @click="handleIconClick">
              </i>  
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="clickRegister('register')">注册</div>
        </el-form>
        <div class="other"><span >
          <router-link :to="{ name: 'retrieve-paswd'}">忘记密码</router-link></span> |
          <span>注册</span></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        shutEye: require("@/assets/login/login-shut-eye.png"),
        isShow: true,
        navList: [
          {name: '短信登录'},
          {name: '账号登录'}
        ],
        isIconClose: false,
        isActive: 1,
        isClick: 'open',
        showState: '',
       
        loginVerify: {
          moblie: '',
          verfiy: "",
        },
        loginPaswd:{
          moblie: '',
          password: ''
        }, 
        register: {
          moblie: '',
          password: '',
          aginPawd: ''
        },
        loginData: ''
      }
    },
    props: [
      "login",
    ],
    watch: {
      login: {
        handler(nval, oval){
          console.log(nval,999)
          this.loginData = nval;
        },
        deep:true
      }
    },
    mounted() { 
      
    },
    methods: {
      
      // 清空输入框
      clearInputVal(e){
        this.loginPaswd.moblie = '';
      },
      // 密码可见和隐藏
      visibilityTab(e){
        console.log(e);
      },
      headleFocus(ev){
        ev.preventDefault();
        this.isIconClose = true;
      },
      headleBlur(){
        this.isIconClose = false;
      },
      onClick(val){
        // ev.preventDefault();
        this.$emit('changeState', val);
      },
      // 获取短信
      getCodeVerify(){
        this.$api.userInfo.getLoginSendcode({
          phone_number: this.loginVerify.moblie
        }).then(res => {
          console.log(res, '900001')
        },err => {console.log(err)})
      },
      // 短信登录
      submitVerify(formData){
        console.log(formData, 1231)
        
        console.log(formData.moblie, '----')
        this.$api.userInfo.userLoginMobile(formData.moblie).then( res => {
          console.log(res, 908);
        })
      },
      // 注册 
      clickRegister(formData){
        this.$api.userInfo.userLoginMobile(formData.moblie).then( res => {
          console.log(res, 908);
        })
      },
      onSubmit(formName){        
        this.$api.userInfo.userLoginPassword({
          "userMobile" : this.loginPaswd.moblie,
          "userPassword" : this.loginPaswd.password
        }).then(data => {
            console.log(90000,data)
          },
          error => {
            console.log(error);
          })

        // this.$emit('changeState', false);
      },
      handleIconClick(ev){
        console.log(ev)
      },
      clickActive(val, index){
        this.isActive = index;
        console.log(val.name, 'haha')
        if (val.name == '账号登录') {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      }
    }
  }
</script>

<style lang="scss">
  @import './index.scss'
</style> 