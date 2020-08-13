<template>
  <div class="resetmain">
    <div class="resetCont">
      <el-steps :active="pswdStepState" finish-status="success" process-status="wait" simple>
          <el-step title="填写资料"></el-step>
          <el-step title="重置密码"></el-step>
          <el-step title="完成"></el-step>
      </el-steps>
      <router-view @goStepState="stepVal"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'retrieve-paswd',
    components: {},
    data() {
      return {
        pswdStepState: 1,
      }
    },
    mounted() {

    },
    methods: {
      stepVal(val){
        console.log(val);
        this.pswdStepState = val;
      },
    }
  }
</script>
<style lang="scss">
  @import './index.scss'
    // .tabs{
    //   // width: 880px;
    //   font-size: 18px;
    //   margin: 26px 40px;
    //   height: 40px;
    //   line-height: 40px;
    //   display: flex;
    //   justify-content: space-evenly;
    //   &>a{
    //     display: inline-block;
    //     flex: 1;
    //   }
    //   .active{
    //     background: #95C21F;
    //     color: #fff;
    //     &:hover{
    //       color:#ffffff;
    //     }
    //     &::after{
    //       content: '';
    //       width: 40px;
    //       height: 40px;
    //       background: #745;
    //       backdrop-filter: 2px #745;
    //       transform: rotate(45deg);
    //       transform: translate( 40px);
    //     }
    //   }
    // }
</style>
