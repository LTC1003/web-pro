<template>
  <div class="login">
    <div class="winlogin">
      <div class="loginhead">
        <div class="title">login</div>
        <div class="colse">关闭</div>
      </div>
      <div class="loginbody">
        <el-form :model="formLogin" class="demo-form-inline">
          <el-form-item label="手机号">
            <el-input v-model="formLogin.moblie" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <!-- <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select> -->
            <el-input v-model="formLogin.verify" placeholder="验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    {{text}}
  </div>
</template>
<script>

  export default {
    name: 'login',
    components: {
    },
    data () {
      return {
        text: "用户登录",
        formLogin: {
          moblie: '',
          verfiy: "",
        }
      }
    },
    mounted() { 
      
    },
    methods: {
      
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
      }
      .loginbody{

      }
    }
  }
</style> 