<template>
  <div class="personal"> 
    <h2 class="caption">创建密码</h2>
    <div class="pawdbox">
      <div class="formbox">
        <el-input v-model="firstPawd" placeholder="输入6-20位英文或数字密码" @blur="onBlir"></el-input>
        <div class="err-text" style="color: #f00" v-show="isErr">{{errText}}</div>
        <el-button type="danger" @click="isRight()">确定</el-button>
      </div>
    </div>  
  </div>
</template>

<script>
// import PopupWin from "@/components/PopupWin"
export default {
  name: "password-first",
  components: {
    // PopupWin,
  },
  data() {
    return {
      passwordFirst: '创建密码',
      userInfoDate: '',
      firstPawd: '',
      isErr: false,
      errText: '规则错误，密码6-20位',
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
        console.log('密码验证通过', this.userInfoDate);
        let objData = {
          // token: this.userInfoDate.token,
          // userMobile: this.userInfoDate.mobile,
          // newPassword: this.firstPawd
        }
        objData['token'] = this.userInfoDate.token;
        objData['userMobile'] = this.userInfoDate.userMobile;
        objData['newPassword'] = this.firstPawd;
        this.$api.userInfo.changePasdfirst(objData).then(res => {
          console.log(res);
          if(res.message === "操作成功"){
            this.$router.push({name: "userdata"});
          }
        });
      }
    },
    onBlir(){
      console.log(this.firstPawd, 2223);
      if(/^(\w){6,20}$/.test(this.firstPawd) == false){
        this.isErr = true;
        return 
      } else {
        this.isErr = false;
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
      border: 1px solid #444;
    }
  }
}
</style>
