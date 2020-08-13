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
        <el-form :model="loginPaswd" ref='loginPaswd' :rules="rulesPswd" class="loginform">
          <el-form-item prop="moblie">
            <el-input v-model="loginPaswd.moblie" placeholder="手机号">
              <i
                icon="el-icon-my-close"  
                class="el-icon-my-close el-input__icon"
                slot="suffix"
                @click="clearInputVal">
              </i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginPaswd.password" type="password" placeholder="密码">
              <i icon="el-icon-my-erase"  
                class="el-icon-my-erase el-input__icon"
                slot="suffix"
                @click.prevent="visibilityTab">
              </i>  
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="onSubmit('loginPaswd')">登录</div>
        </el-form>
        <div class="other">
          <span  @click="toRessetPage()" >
            忘记密码
          </span> |
          <span @click="loginData ='register'">注册</span>
        </div>
      </div>
      <div class="loginbody" v-show="!isShow">
        <!-- 验证码 -->
        <el-form :model="loginVerify" ref="loginVerify" :rules="rulesVerify" class="loginform">
          <el-form-item prop="moblie">
            <el-input v-model="loginVerify.moblie" placeholder="手机号">
              <i
                icon="el-icon-my-close"  
                class="el-icon-my-close el-input__icon"
                slot="suffix"
                @click="clearValidate('moblie')">
              </i>
            </el-input>
          </el-form-item>
          <el-form-item prop="verify">
            <el-input v-model="loginVerify.verify" placeholder="验证码">
              <el-button class="contrlCode" slot="suffix" @click="getCodeVerify(loginVerify.moblie)" :disabled="isDisabled">{{getCodeState}}</el-button>
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="submitVerify">登录</div>
        </el-form>
        <div class="other">
          <span @click="loginData ='register'">注册</span>
        </div>
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
        <div class="nav active">快速注册</div>
      </div>
      <div class="loginbody">
        <el-form :model="register" ref="register" :rules="rulesRegis" class="loginform">
          <el-form-item prop="moblie">
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
          <el-form-item prop="password">
            <el-input v-model="register.password" :type="inputPassType">
              <i icon="el-icon-my-erase"
                class=" el-input__icon"
                :class="eyeClass"
                slot="suffix"
                style="border: 1px"
                @click="handleIconClick">
              </i>
            </el-input>
          </el-form-item>
          <div class="btn-denger" @click="clickRegister('register')">注册</div>
        </el-form>
        <div class="other">
          <span @click="loginData = 'login'" >
            返回账号登录<i class="el-icon-arrow-right"></i>
          </span>
        </div>
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
    data () {
      // 手机验证
      var validMoblie = (rule, value, callback) => {
        if(/^1[3456789]\d{9}$/.test(value) == false){
          return callback(new Error("11位手机号不正确"));
        } else {
          // if (this.loginVerify.moblie !== '') {
          //   this.$refs.loginVerify.validateField('moblie');
          // }
          callback();
        }
      };
      // 验证码code
      var validVer = (rule, value, callback) => {
        if(/^(\d){6}$/.test(value) == false) {
          callback(new Error("6位数字失效"));
        } else {
          callback();
        }
      };
      var validPawd = (rule, value, callback) => {
        if(/^(\w){6,15}$/.test(value) == false){
          callback(new Error('只能输入6-15个字母、数字、下划线'));
        }else{
          callback();
        }
      };
      return {
        eyeClass: 'el-icon-my-shuteye', // el-icon-my-erase
        inputPassType: 'password',  // 输入框类型值password 转换 text
        isDisabled: false,
        getCodeState: '获取验证码',
        // shutEye: require("@/assets/login/login-shut-eye.png"),
        isShow: true,
        navList: [
          {name: '短信登录'},
          {name: '账号登录'}
        ],
        isIconClose: false,
        isActive: 1,

        // isClick: 'open',
        // showState: '',
        loginPaswd:{
          moblie: '',
          password: ''
        }, 
        loginVerify: {
          moblie: '',
          verify: '',
        },
        register: {
          moblie: '',
          password: '',
          aginPawd: ''
        },

        loginData: '',
        rulesPswd: {
          moblie: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator: validMoblie, trigger: 'change'}
          ],
          password: [
            { required: true, message: '确认pawd', trigger: 'blur' },
            { validator: validPawd, trigger: 'blur'}
          ]
        },
        rulesVerify: {
          moblie: [
            { required: true, message: '不能为空'},
            { validator: validMoblie, trigger: 'change' }
          ],
          verify: [
            { required: true, message: '必填'},
            { validator: (rule, value, callback) => {
                if(/^(\d){6}$/.test(value) == false) {
                  return callback(new Error("6位数字失效"));
                } else {
                  callback();
                }
            },
              trigger: 'blur'
            }
          ]
        },
        rulesRegis:{
          moblie: [
            { required: true, message: '必填', trigger: 'blur' },
            { validator: validMoblie, trigger: 'blur' }
          ],
          password: [
            { required: true, message: '必填', trigger: 'blur' },
            { validator: validPawd, trigger: 'blur' }
          ],
          aginPawd: [
            { required: true, message: '必填', trigger: 'blur' },
          ],
        }
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
      // 编程式路由跳转页面
      toRessetPage(){
        this.$router.push({name:"fillinfo"});
        this.$emit('changeState', false);
      },
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
        this.$emit('changeState', val);
      },
      // 获取短信
      getCodeVerify(value){
        if(/^1[3456789]\d{9}$/.test(value) == false){
          this.$refs.loginVerify.validate( 
          (valid) => {
            return false;
          });
        } else {
          this.isDisabled = true;
          var count = null;
          var seed = 60;
          var num = seedCount => {
            seed --;
            if (seed < 1) {
              clearInterval(count);
              this.getCodeState = '重新发送';
              this.isDisabled = false;
            } else {
              // console.log(seed, '*_*');
              this.getCodeState = `${seed} 重新发送`;
            }
          };
          count = setInterval(num, 1000);

          this.$api.userInfo.getLoginSendcode({phone_number: value })
          .then(
            res => {
              if (res.message === "success") {
                // console.log(res.data.result, '900001') // {phoneNumber: "13022511993", code: "499866"}
              }
            },
            err => {console.log(err)}
          );
        }
        
      },
      // 验证短息和登录
      submitVerify(){
        this.$refs.loginVerify.validate( 
          (valid) => {
            if (valid) {
              // 验证短息
              let paramObj = {
                phone_number: this.loginVerify.moblie,
                code: this.loginVerify.verify
              }
              this.$api.userInfo.loginCheckCode(paramObj).then( res => {
                if (res.code === "00001"){
                  // code: "00001"
                  // 短信认证成功
                  console.log(res.message);
                  this.$api.userInfo.userLoginMobile(paramObj.phone_number)
                  .then( res => {
                    if(res.message === '注册成功') {
                      console.log(res.data.result, 909090);
                    }
                  });
                } else {
                  this.$message.error(res.message);
                }
              });
            } else {
              return false;
            }
          }
        );
        
      },
      // 注册 
      clickRegister(formData){
        this.$api.userInfo.userLoginMobile(formData.moblie).then( res => {
          console.log(res, 908);
        })
      },
      // 账号密码登录
      onSubmit(formName){ 
        // userMobile/userPassword/lastLoginTime/lastLoginIp
        // this.$refs[formName].validate((valid) => {
        //   if(valid){
            this.$api.userInfo.userLoginPassword({
              // userMobile : this.loginPaswd.moblie,
              // userPassword : this.loginPaswd.password,
              "userMobile" : 17366006693,
              "userPassword" : 123456,
              "lastLoginTime": '2020-08-10 15:15:20',
              "lastLoginIp": '10.12.88.215'
            }).then(res => {
              if(res.code == "00001" && res.message == "操作成功"){
                this.$message.success(res.message);
              } else if (res.code == "4106" && message == "密码未设置"){
                // console.log("密码未设置");
              }
            })
        //   }
        // }); 
        // this.$emit('changeState', {isLogin: 1, isShow: 0});
      },
      handleIconClick(ev){
        if (this.inputPassType == 'password'){
          setTimeout(() => {
            this.inputPassType = 'text';
            this.eyeClass = 'el-icon-my-erase'
          }, 500)
        } else {
          setTimeout(() => {
            this.inputPassType ='password';
            this.eyeClass = 'el-icon-my-shuteye'
          }, 300)
        }
        
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