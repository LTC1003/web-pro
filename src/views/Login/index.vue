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
        <el-form :model="loginVerify" class="loginform">
          <el-form-item>
            <el-input v-model="loginVerify.moblie" placeholder="手机号">
              <i
                icon="el-icon-my-close"  
                class="el-icon-my-close el-input__icon"
                slot="suffix">
              </i>
            </el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="loginVerify.verify" placeholder="验证码">
              <i icon="el-icon-my-erase"  
                class="el-icon-my-erase el-input__icon"
                slot="suffix"
                @click="handleIconClick">
              </i>  
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="onSubmit('loginVerify')">登录</div>
        </el-form>
      </div>
      <div class="loginbody" v-show="isShow">
        <el-form :model="loginPaswd" class="loginform">
          <el-form-item>
            <el-input v-model="loginPaswd.moblie" 
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
            <el-input v-model="loginPaswd.password" placeholder="密码">
              <i icon="el-icon-my-erase"  
                class="el-icon-my-erase el-input__icon"
                slot="suffix"
                @click="handleIconClick">
              </i>  
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="onSubmit('loginPaswd')">登录</div>
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
       
        loginVerify: {
          moblie: '',
          verfiy: "",
        },
        loginPaswd:{
          moblie: '',
          password: ''
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
      onSubmit(formName){
        // 16732046756
        // "BCF89B62B2D21E2116C51FC6476CF920"
        /**
         * Vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
         * */ 
        var times = this.timestamp();

        if (formName == "loginPaswd") {
          
          // debugger
        }
        var reqHeadler = {
          "userAgent": "web",
          "timeStamp": this.timestamp(),
          "appVersion": "1.0.1",
        }
        var soltArr ;

        reqHeadler.sign = this.addCode(reqHeadler);
        
        console.log(reqHeadler, reqHeadler.sign, 2111);
        
        this.$api.userInfo.userLoginPassword({
          "userMobile" : this.loginPaswd.moblie,
          "userPassword" : this.loginPaswd.password
        })
        .then(
          data => {
          console.log(90000,data)
          },
          err => {
            console.log(err, 4011);
          }
        )

        // this.$emit('changeState', false);
      },


      // sign+join md5(data)
      addCode(params, coolback){
        /***
         * (Headers和Params 按字母a-z排序拼接参数,首字母相同按第二字母排序，依次类推，key值最后拼接,不参与排序) 
         * 如: MD5(appVersion=1.0&timeStamp=123456&token=0f47c79af7e04dd&userAgent=ios&key=DN6AjdNsv6PZXYUoOxVmrVILB+S).toUpperCase() 
         * 注：token为 Params参数 ;另Params参数为Object 其属性不参与sign签名
        ***/ 
       var repeatArr = [];
        console.log(77787,params);
        for(var i in params){
          console.log(i, params[i], 'res');
          repeatArr.push({i: params[i]});
        }
       
        coolback = this.$md5(params);
        return coolback
      },
      // 获取当前时间戳
      timestamp(){
        let timestamp = (new Date()).valueOf();
        console.log(15715, timestamp) 
        return timestamp
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