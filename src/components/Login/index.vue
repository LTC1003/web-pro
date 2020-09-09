<template>
  <div class="signin">
    <div class="logon-box">
      <div class="close el-icon-close" @click="onClose()"></div>
      <!-- 快速注册 -->
      <div class="register-warp" v-if="loginData == 'register'">
        <div class="navs">
          <div class="nav active">快速注册</div>  
        </div>
        <div class="loginbody">
          <el-form :model="register" ref="register" class="loginform">
            <el-form-item>
              <el-input v-model="register.moblie" placeholder="手机号" @blur="onBlurVaild(register.moblie)" clearable>
              </el-input>
              <div class="alerterr" v-show="errShowPhone">{{errPhoneText}}</div>
            </el-form-item>
            <el-form-item >
              <el-input v-model="register.verifyCode" placeholder="验证码">
                <el-button class="contrlCode" slot="suffix" @click="getCodeVerify(register.moblie)" :disabled="isDisabled">{{getCodeState}}</el-button>
              </el-input>
              <div class="alerterr" v-show="errShowVerify">{{errVerifyText}}</div>
            </el-form-item>
            <div class="btn-denger" @click="clickRegister('register')">注册</div>
          </el-form>
          <div class="other">
            <span @click="loginData = 'login'" >
              返回账号登录<i class="el-icon-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
      <!-- 快速登陆 密码与短信登陆 -->
      <div class="login-warp" v-else>
        <div class="navs">
          <div class="nav"
          :class="{active: isActive == index }" 
          @click="clickActive(item,index)" 
          v-for="(item, index) in navList" 
          :key="index">{{item.name}}
          </div>
        </div>
        <!-- 密码登陆 -->
        <div class="loginbody" v-show="!isShow">
          <el-form :model="loginPaswd" ref='loginPaswd' :rules="rulesPswd" class="loginform">
            <el-form-item prop="moblie">
              <el-input v-model="loginPaswd.moblie" placeholder="手机号" clearable>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginPaswd.password" :type="inputTypeVal" placeholder="密码">
                <!-- <i icon="el-icon-my-erase"  
                  class="el-icon-my-erase el-input__icon"
                  slot="suffix"
                  @click.prevent="visibilityTab">
                </i>   -->
                <i 
                  icon="el-icon-my-shuteye"
                  class="el-icon-my-shuteye"
                  :class="{'el-icon-my-erase': paswdEyesIcon}"
                  slot="suffix"
                  @click="visibilityTab">
                </i>
              </el-input>
            </el-form-item>
            <div class="btn-denger" @click="onSubmit('loginPaswd')">登录</div>
          </el-form>
          <div class="other">
            <span  @click="toRessetPage()" >
              忘记密码
            </span>
            <!-- <span @click="loginData ='register'">注册</span> -->
          </div>
        </div>
        <!-- 验证登陆 -->
        <div class="loginbody" v-show="isShow">
          <el-form :model="loginVerify" ref="loginVerify" :rules="rulesVerify" class="loginform">
            <el-form-item prop="moblie">
              <el-input v-model="loginVerify.moblie" placeholder="手机号" clearable>
              </el-input>
            </el-form-item>
            <el-form-item prop="verifyCode">
              <el-input v-model="loginVerify.verifyCode" placeholder="验证码">
                <el-button class="contrlCode" slot="suffix" @click="getCodeVerify(loginVerify.moblie)" :disabled="isDisabled">{{getCodeState}}</el-button>
              </el-input>
            </el-form-item>
            <div class="btn-denger" @click="submitVerify('loginVerify')">登录</div>
          </el-form>
          <div class="other">
            <!-- <span @click="loginData ='register'">注册</span> -->
          </div>
        </div>
      </div>
      <!-- 第三方登录方式 -->
      <!-- <div class="partners">
        <div class="masthead">第三方登录</div>
        <div class="partother">
          <div class="wxlogo"></div>
          <div class="qqlogo"></div>
          <div class="wblogo"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      // 手机验证
      var validMoblie = (rule, value, callback) => {
        if(/^1[3456789]\d{9}$/.test(value) == false){
          return callback(new Error("11位手机号不正确"));
        } else {
          callback();
        }
      };
      // 验证码code
      var validVer = (rule, value, callback) => {
        if(/^(\d){6}$/.test(value) == false) {
          callback(new Error("请获取验证码"));
        } else {
          callback();
        }
      };
      // 密码验证
      var validPawd = (rule, value, callback) => {
        if(/^(\w){6,15}$/.test(value) == false){
          callback(new Error('只能输入6-15个字母、数字、下划线'));
        }else{
          callback();
        }
      };
      return {
        paswdEyesIcon: false,
        inputTypeVal: 'password',
        errShowPhone: false,
        errPhoneText: '请输入正确手机号',
        errShowVerify:false,
        errVerifyText: '请获取正确验证',
        inputPassType: 'password',  // 输入框类型值password 转换 text
        isDisabled: false,
        getCodeState: '获取验证码',
        // shutEye: require("@/assets/login/login-shut-eye.png"),
        isShow: true,
        navList: [
          {name: '短信登录'},
          {name: '账号登录'},
        ],
        isActive: 0,
        loginPaswd:{
          moblie: '',
          password: ''
        },
        loginVerify: {
          moblie: '',
          verifyCode: '',
        },
        register: {
          moblie: '',
          verifyCode: '',
        },
        loginData: '',
        rulesPswd: {
          moblie: [
            { required: true, message: '请输入手机或账号', trigger: 'change' },
            { validator: validMoblie, trigger: 'blur'}
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' },
            { validator: validPawd, trigger: 'blur'}
          ]
        },
        rulesVerify: {
           moblie: [
            { required: true, message: '请输入手机号', trigger: 'change' },
            { validator: validMoblie, trigger: 'change' }
          ],
          verifyCode: [
            { required: true, message: '请输入验证', trigger: 'change' },
            { validator: validVer, trigger: 'blur' }
          ]
        },
        // rulesRegis:{
        //   moblie: [
        //     { required: true, message: '必填', trigger: 'blur' },
        //     { validator: validMoblie, trigger: 'blur' }
        //   ],
        //   verifyCode: [
        //     { required: true, message: '必填', triggerL: 'blur'},
        //     { validator: validVer, trigger: 'blur'}
        //   ]
        // },
      }
    },
    props: [
      "login",
    ],
    watch: {
      login: {
        handler(nval, oval){
          // console.log(nval, '登录还是注册');
          this.loginData = nval;
        },
        deep:true
      }
    },
    mounted() { 
      
    },
    methods: {
      
      // 忘记密码
      toRessetPage(){
        this.$router.push({name:"retrieve-paswd"});
        this.$emit('changeState', false);
      },
      // 密码可见和隐藏
      visibilityTab(){
        if (this.inputTypeVal == 'password') {
          setTimeout(() => {
            this.inputTypeVal = 'text';
            this.paswdEyesIcon = true;
          }, 300)
        } else {
          setTimeout(() => {
            this.inputTypeVal = 'password'
            this.paswdEyesIcon = false;
          }, 300)  
        }
      },
      onClose(){
        this.$emit('changeState', false);
        // var hasPath = location.hash.split('#',length-1);
        // this.$router.push(hasPath[1])
        // this.loginPaswd = {
        //   moblie: '',
        //   password: ''
        // };
        // this.loginVerify = {
        //   moblie: '',
        //   verifyCode: '',
        // };
        // this.register = {
        //   moblie: '',
        //   verifyCode: '',
        // };
      },
      // 手机短线验证结果/同步请求(async await)
      async getPhoneCode(moblie, verify){
        let paramObj = {
          phone_number: moblie,
          code: verify
        }
        try {
          let res = await this.$api.userInfo.loginCheckCode(paramObj).then(res => {
            return res
          });
          // console.log(res, 77788)
          return res
        } catch (err) {
          alert('验证请求出错',err);
        }
      },
      getCodeVerify(value){
        if(/^1[3456789]\d{9}$/.test(value) == false){
          return this.$message.error("11位手机号不正确");
        } else {
          this.$api.userInfo.getLoginSendcode({phone_number: value }).then(res => {
            if (res.message === "success") {
              
            } else {
              this.$message.error(res.message);
            }
          })
          if(!this.isDisabled){
            let seed = 60;
            let num = seedCount => {
              seed --;
              if (seed < 1) {
                clearInterval(count);
                this.getCodeState = '重新发送';
                this.isDisabled = false;
              } else {
                this.isDisabled = true;
                this.getCodeState = `重新发送${seed}`;
              }
            };
            let count = setInterval(num, 1000);
          }
        }
      },
      // 短信验证登录
      submitVerify(){
        this.$refs.loginVerify.validate(valid => {
          if (valid) {
            this.getPhoneCode(this.loginVerify.moblie, this.loginVerify.verifyCode).then(res =>{
              // console.log(res, 34567)
              if (res.message === "success"){
                let objData = {
                  phoneType: '-',
                  channel: '-',
                  lastLoginTime: (new Date()).valueOf().toString(),
                  lastLoginIp: '10.12.88.103',
                }
                objData['moblie'] = this.loginVerify.moblie;
                this.$api.userInfo.userLoginMobile(objData).then( res => {
                  if(res.message === "操作成功"){
                    localStorage.loginUserInfo = JSON.stringify(res.data.result);
                    // localStorage.setItem('STORAGE_STATE', 1);  // 本地存储登录状态 1 
                    // this.$store.state.LoginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
                    this.$emit('changeState', {isShow : false, isLogin: 1, userData: JSON.parse(localStorage.loginUserInfo)}) // 退出弹框
                  } else {
                    // message: "验证码错误或已失效"
                    console.log(res.message);
                    this.$message.error(res.message);
                  }
                });
              } else {
                this.$message.error(res.message);
              }
            })
          }else{
            return false
          }
        });
      },
      // 注册验证手机号 
      onBlurVaild(inputVal){
        // console.log(inputVal);
        if(/^1[3456789]\d{9}$/.test(inputVal) == false){
          return this.errShowPhone = true
        } else {
          return this.errShowPhone = false;
        }
      },
      // 注册提交表单
      clickRegister(formName){
          // 判断验证不为空
          if(/^(\d){6}$/.test(this[formName].verifyCode) == false) {
            // 验证码不通过
            this.errShowVerify = true;
          } else {
            this.onBlurVaild(this.register.moblie);
            // 调用短信验证共用fun
            this.errShowVerify = false;
            this.getPhoneCode(this.register.moblie, this.register.verifyCode).then(res =>{
              if (res.message === "success"){
                let objData = {
                  phoneType: '-',
                  channel: '-',
                  lastLoginTime: (new Date()).valueOf().toString(),
                  lastLoginIp: '10.12.88.103',
                }
                objData['moblie'] = this.register.moblie;
                // objData['verifyCode'] = this.register.verifyCode;
                this.$api.userInfo.userLoginMobile(objData).then( res => {
                  if(res.message === "操作成功"){
                    localStorage.loginUserInfo = JSON.stringify(res.data.result);
                    // localStorage.setItem('STORAGE_STATE', 1);  // 本地存储登录状态 1 
                    // this.$store.state.LoginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
                    // let delete = localStorage.removeItem('LoginUserInfo'); // 移除
                    this.$emit('changeState', {isShow : false, isLogin: 1, userData: res.data.result}) // 退出弹框
                  }
                });
              } else {
                this.$message.error(res.message, 666777);
                // 验证码不通过
                // this.errShowVerify = true;
              }
            })
          }
      },
      // 账号密码登录
      onSubmit(formName){
        // userMobile/userPassword/lastLoginTime/lastLoginIp
        this.$refs[formName].validate((valid) => {
          if(valid){
            this.$api.userInfo.userLoginPassword({
              userMobile : this.loginPaswd.moblie,
              userPassword : this.loginPaswd.password,
              "lastLoginTime": (new Date()).valueOf().toString(),
              "lastLoginIp": '10.12.88.103'
            }).then(res => {
              console.log(res)
              if(res.message === "操作成功"){
                this.$message.success(res.message);
                localStorage.loginUserInfo = JSON.stringify(res.data.result);
                this.$emit('changeState', {isShow : false, isLogin: 1, userData: JSON.parse(localStorage.loginUserInfo)}) // 退出弹框
              } else{
                this.$message.error(res.message);
              }
            })
          }
        }); 
      },
      // handleIconClick(ev){
      //   if (this.inputPassType == 'password'){
      //     setTimeout(() => {
      //       this.inputPassType = 'text';
      //       this.eyeClass = 'el-icon-my-erase'
      //     }, 500)
      //   } else {
      //     setTimeout(() => {
      //       this.inputPassType ='password';
      //       this.eyeClass = 'el-icon-my-shuteye'
      //     }, 300)
      //   }
      // },
      clickActive(val, index){
        this.isActive = index;
        if (val.name == '账号登录') {
          this.isShow = false;
        } else {
          this.isShow = true ;
        }
      }
    }
  }
</script>

<style lang="scss">
  @import './index.scss'
</style> 