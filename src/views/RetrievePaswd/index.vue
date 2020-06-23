<template>
  <!-- <div class="resetmain">
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">填写资料</el-breadcrumb-item>
    <el-breadcrumb-item>重置密码</el-breadcrumb-item>
    <el-breadcrumb-item>完成</el-breadcrumb-item>
  </el-breadcrumb> -->
  <div class="resetmain">
    <div class="resetCont">
      <div class="tabs">
        <router-link class="active" :to="{name: 'fillinfo'}">填写资料</router-link>
        <router-link :to="{name: 'reset-paswd'}">重置密码</router-link>
        <router-link :to="{name: 'reset-success'}">完成</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'retrieve-paswd',
    components: {

    },
    data() {
      return {

      }
    },
    mounted() {
      console.log((960 / 1920));
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  .resetmain{
    background-color: #f4f4f4;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    
  }
  .resetCont{
    background-color: #ffffff;
    height: 520px;
    width: 960px;
    .tabs{
      // width: 880px;
      font-size: 18px;
      margin: 26px 40px;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-evenly;
      &>a{
        display: inline-block;
        flex: 1;
      }
      .active{
        background: #95C21F;
        color: #fff;
        &:hover{
          color:#ffffff;
        }
        &::after{
          content: '';
          width: 40px;
          height: 40px;
          background: #745;
          backdrop-filter: 2px #745;
          transform: rotate(45deg);
          transform: translate( 40px);
        }
      }
    }
  }
</style>
