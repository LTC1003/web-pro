<template>
  <div class="login">
    <div class="winlogin">
      <div class="loginhead">
        <div class="title">{{loginData.title}}</div>
        <div class="close" @click="close">关闭</div>
      </div>
      <div class="loginbody">
        <el-form :model="formLogin" class="demo-form-inline">
          <el-form-item label="手机号">
            <el-input v-model="formLogin.moblie" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="formLogin.verify" placeholder="验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit()">登录</el-button>
          </el-form-item>
        </el-form>
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
        title: "title",
        formLogin: {
          moblie: '',
          verfiy: "",
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    height: inherit;
    height: -webkit-fill-available;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto 50px;
    bottom: 0;
    // display: none;
    .winlogin{
      background: #fff;
      width: 50%;
      border-radius: 10px;
      font-size: .14rem;
      color: #333;
      .loginhead{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
        padding:0 20px;
        border-bottom: 1px solid #333;
        .close{
          
          &:hover{
            cursor: pointer;
            color: #674;
          }
        }
      }
      .loginbody{

      }
    }
  }
</style> 