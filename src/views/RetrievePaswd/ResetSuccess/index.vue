<template>
  <div class="tooltips">
    <div class="success-img">
      <i class="el-icon-check"></i>
    </div>
    <p class="doce-check">密码重置成功</p>
    <button class="btn-success-back" @click="reBackLogin">返回登录</button>
  </div>
</template>

<script>
  export default {
    name: 'reset-success',
    components: {

    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {
      reBackLogin(){
        this.$router.push({path: '/'});
      }
    }
  }
</script>
<style lang="scss">
  .tooltips{
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .success-img{
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: #95C21F;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
    }
    .doce-check{
      color: #999999;
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 31px;
    }
    .btn-success-back{
      background: #DF2E46;
      width:321px;
      height:40px;
      border-radius:5px;
      border-style: none;
      color: #ffffff;
    }
  }
</style>
