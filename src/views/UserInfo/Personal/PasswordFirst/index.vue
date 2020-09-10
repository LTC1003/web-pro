<template>
  <div class="personal"> 
    <h2 class="caption">创建密码</h2>
    <div class="pawdbox">
      <div class="formbox">
        <el-input v-model="firstPawd" placeholder="输入6-20位英文或数字密码" @blur="onblur(firstPawd)"></el-input>
        <div class="err-text" style="color: #f00" v-show="isErr">{{errText}}</div>
        <!-- <el-button class="creactRightBtn" :plain="plain" :disabled="onchange(firstPawd)" @click="isRight()">确定</el-button> -->
        <el-button class="creactRightBtn" type="danger" :plain="plain" :disabled="onchange(firstPawd)" @click="isRight()">确定</el-button>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: "password-first",
  components: {
  
  },
  data() {
    return {
      passwordFirst: '创建密码',
      userInfoDate: '',
      firstPawd: '',
      isErr: false,
      errText: '规则错误，密码6-20位',
      plain: true,
    }
  },
  mounted() {
    if(localStorage && localStorage.loginUserInfo){
      this.userInfoDate = JSON.parse(localStorage.loginUserInfo);
    }
  },
  methods: {
    isRight(){
      if(/^(\w){6,20}$/.test(this.firstPawd) == false){
        this.isErr = true;
        return 
      } else {
        // this.isErr = false;
        // console.log('密码验证通过', this.userInfoDate);
        let objData = {
          token: this.userInfoDate.token,
          userMobile: this.userInfoDate.userMobile,
          newPassword: this.firstPawd
        }
        this.$api.userInfo.changePasdfirst(objData).then(res => {
          // console.log(res);
          if(res.message === "操作成功"){
            this.$message.success("首次创建密码成功");
            this.$router.push({path: "/"});
            localStorage.clear();
            // query:{路由参数}
            // this.$router.push({name: "userdata"});
          } else {
            this.$message.error("首次创建密码失败");
          }
        });
      }
    },
    onblur(val){
      if(/^(\w){6,20}$/.test(val) == false){
        return this.isErr = true;
      } else {
        return this.isErr = false;
      }
    },
    onchange(val){
      if(/^(\w){6,20}$/.test(val) == false){
        this.plain = true;
        return true
      } else {
        this.plain = false;
        return false
      }
    }
  }
};
</script>

<style lang="scss">
.personal{
  padding: 0.2rem;
  .caption{
    font-size: 0.18rem;
    line-height: 25px;
    color: #333333;
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e5e5;
  }
  .pawdbox{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    .formbox{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      min-width: 300px;
      .creactRightBtn{
        width: 130px;
        height: 36px;
        border-radius: 18px;
        font-size: 14px;
        line-height: 36px;
        padding: 0;
        margin-top: 30px;
        border: none;
        color: #FFBBC4;
        background: #ec2741d2;
        // &:hover{
        //   background: #FFBBC4;
        //   color: #FFFFFF;
        // }
      }
    }
  }
}
</style>
