<template>
  <div class="bindmobile">
    <h2 class="caption">{{text}}</h2>
    <el-form :model="bindForm" :rules="bingRules" ref="bindForm" 
      label-width="100px" class="bingform">
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="bindForm.mobile"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verify">
        <el-input v-model="bindForm.verify">
          <template slot="suffix">
            <el-button type="primary" @click="getVerify(bindForm.mobile)"
            :disabled="isDisabled" >{{getCodeState}}</el-button>
          </template>
        </el-input>
      </el-form-item>
      </el-form-item>
        <el-button type="primary" @click="onBindForm(bindForm)">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "bind-mobile",
  data() {
    var validMoblie = (rule, value, callback) => {
      if(/^1[3456789]\d{9}$/.test(value) == false){
        return callback(new Error("11位手机号不正确"));
      } else {
        callback();
      }
    };
    var validVer = (rule, value, callback) => {
      if(/^(\d){6}$/.test(value) == false) {
        callback(new Error("6位数字失效"));
      } else {
        callback();
      }
    };
    return {
      text: 'bind-mobile',
      getCodeState: '获取验证码',
      isDisabled: false,
      bindForm: {
        mobile: '',
        verify: '',
      },
      bingRules: {
        mobile: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validMoblie, trigger: 'blur' }
        ],
        verify:[
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validVer, trigger: 'blur' }
        ],
      },
    }
  },
  mounted() {

  },
  methods: {
    getVerify(mobile){
      if(/^1[3456789]\d{9}$/.test(mobile) == false){
        return this.$message.error("11位手机号不正确");
      } else {
        this.$api.userInfo.getLoginSendcode({phone_number:  mobile}).then(res => {
          console.log(res, 889)
        });
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
              this.getCodeState = `倒计时${seed}`;
            }
          };
          let count = setInterval(num, 1000);
        }
      }
      
    },
    onBindForm(formName){
      this.$refs.formName.validate(valid => {
        if (valid) {
          this.$api.userInfo.bindMobile(formName).then(res => {
            console.log(res, 455);
          })
        }
      })
    }
  }
};
</script>

<style lang="scss">
  // @import "./index.scss";
  .bindmobile{
    padding: 0.2rem;
    .caption{
      font-size: 0.18rem;
      line-height: 25px;
      color: #333333;
      padding-bottom: 20px;
      border-bottom: 1px solid #e5e5e5;
    }
  }
  .el-message{
    font-size: 0.2rem;
  }
</style>
