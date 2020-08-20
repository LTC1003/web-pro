<template>
  <div class="paswd-modify">
    <h2 class="caption">{{text}}</h2>
    <div class="formbox">
      <el-form :model="modifyForm" :rules="modifyRules" ref="modifyForm" 
        label-width="100px" class="modifyform">
        <el-form-item label="原密码" prop="paswdOld">
          <el-input v-model="modifyForm.paswdOld"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="paswdNew">
          <el-input v-model="modifyForm.paswdNew"></el-input>
        </el-form-item>
        </el-form-item >
          <div style="text-align: center">
            <el-button type="danger" style="width: 130px" round size="small" @click="onModifyForm()">确定</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "paswd-modify",
  data() {
    var validPawd = (rule, value, callback) => {
      if(/^(\w){6,15}$/.test(value) == false){
        callback(new Error('只能输入6-15个字母、数字、下划线'));
      }else{
        callback();
      }
    };
    return {
      text: '修改密码',
      modifyForm: {
        paswdOld: '',
        paswdNew: '',
      },
      modifyRules: {
        paswdOld: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validPawd, trigger: 'blur' }
        ],
        paswdNew:[
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validPawd, trigger: 'blur' }
        ],
      },
      userData: {},
    }
  },
  mounted() {
    if(localStorage && localStorage.loginUserInfo){
      this.userData['token'] = JSON.parse(localStorage.loginUserInfo).token
      this.userData['userMobile'] = JSON.parse(localStorage.loginUserInfo).userMobile
    }
  },
  methods: {
    onModifyForm(){
      this.$refs.modifyForm.validate(valid => {
        if (valid) {
          
            this.userData['oldPassword'] = this.modifyForm.paswdOld
            this.userData['newPassword'] = this.modifyForm.paswdNew
         
          this.$api.userInfo.changePassword(this.userData).then(res => {
            console.log(res.data);
            if(res.message == '密码重置成功'){
              this.$message.success(res.message);
              this.$router.push({name: "userdata"});
            } else {
              this.$message.error(res.message);
            }
          });
        }
      })
    }
  }
};
</script>

<style lang="scss">
  // @import "./index.scss";
  .paswd-modify{
    padding: 0.2rem;
    height: 100%;
    .caption{
      font-size: 0.18rem;
      line-height: 25px;
      color: #333333;
      padding-bottom: 20px;
      border-bottom: 1px solid #e5e5e5;
    }

    .formbox{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      .modifyform{
        width: 400px;
      }
    }
  }
</style>
