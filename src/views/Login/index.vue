<template>
  <div class="login" @click.self="onClick(false)">
    <div class="login-warp">
      <div class="navs" v-if="loginData == 'logon'">
        <div class="nav" 
        :class="{active: isActive == index }" 
        @click="clickActive(item,index)" 
        v-for="(item, index) in navList" 
        :key="index">{{item.name}}
        </div>
      </div>
      <div class="navs" v-else-if="loginData == 'register'">
        <div class="nav active">账号注册</div>
      </div>
      <div class="navs" v-else>
        <div class="nav active">忘记密码</div>
      </div>
      <div class="loginbody" v-show="!isShow">
        <el-form :model="formLogin" class="loginform">
          <el-form-item>
            <el-input v-model="formLogin.moblie" placeholder="手机号">
              <i
                icon="el-icon-my-close"  
                class="el-icon-my-close el-input__icon"
                slot="suffix">
              </i>
            </el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="formLogin.verify" placeholder="验证码">
              <i icon="el-icon-my-erase"  
                class="el-icon-my-erase el-input__icon"
                slot="suffix"
                @click="handleIconClick">
              </i>  
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="onSubmit">登录</div>
        </el-form>
      </div>
      <div class="loginbody" v-show="isShow">
        <el-form :model="formLogin" class="loginform">
          <el-form-item>
            <el-input v-model="formLogin.moblie" 
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
            <el-input v-model="formLogin.verify" placeholder="密码">
              <i icon="el-icon-my-erase"  
                class="el-icon-my-erase el-input__icon"
                slot="suffix"
                @click="handleIconClick">
              </i>  
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="onSubmit">登录</div>
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
    <div class="register-warp">

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
        isIconClose: false,
        isActive: 1,
        isClick: 'open',
        showState: '',
       
        formLogin: {
          moblie: '',
          verfiy: "",
          tset: ''
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
      if (this.loginData == {}){
        console.log(232);
      }
    },
    methods: {
      headleFocus(ev){
        ev.preventDefault();
        this.isIconClose = true;
      },
      headleBlur(){
        this.isIconClose = false;
      },
      onClick(val){
        // console.log(val, ev,123123)
        // ev.preventDefault();
        this.$emit('changeState', val);
      },
      onSubmit(ev){
        this.$emit('changeState', false);
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