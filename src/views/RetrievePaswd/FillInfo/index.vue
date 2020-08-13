<template>
  <div class="fillinfo">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
      <el-form-item prop="phone">
        <el-input v-model="ruleForm.phone" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" size="small" style="width: 100%"  @click="goStepPage(2)">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'fillinfo',
    components: {},
    data() {
      return {
        ruleForm: {
          phone: '',
        },
        rules: {
          phone: [
            { required: true, message: '必填', trigger: 'blur' },
            { validator: (rule, value, callback) => {
              if(/^1[3456789]\d{9}$/.test(value) == false){
                return callback(new Error("11位手机号不正确"));
              } else {
                callback();
              }
            }, trigger: 'change'}
          ]
        }
      }
    },
    mounted() {
      if (localStorage.phone !== this.ruleForm.phone) {
        if(this.ruleForm.phone === undefined || this.ruleForm.phone === ''){
          this.ruleForm.phone = localStorage.phone;
        }
      }
    },
    methods: {
      goStepPage(num){
        this.$refs.ruleForm.validate((valid) => {
          if (valid){
            localStorage.phone = this.ruleForm.phone;
            this.$router.push({name: 'reset-paswd'})
            this.$emit('goStepState', num);
          } else {
            return false;
          }
        })
      },
      resetForm(){ // 重置
        this.$refs['ruleForm'].resetFields();
      }
    }
  }
</script>
<style lang="scss">
  .fillinfo{
    width: 320px;
    margin: 0 auto;
    margin-top: 70px;
  }
</style>
