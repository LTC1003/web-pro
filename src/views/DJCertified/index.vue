<template>
  <div id="djcertified">
      <div class="title">
        {{agrData.title}}
      </div>
      <div class="section-content">
        {{agrData.content}}
      </div>
  </div>
</template>

<script>
  export default {
    name: 'djcertified',
    components: {

    },
    data() {
      return {
        // text: '隐私政策',
        localUserData: '',
        agrData: {
          // content: "的“ToSee”服务协议↵“ToSee”服务协议（下称“本协议”）是您与“ToSee”软件（网站）",
          // createTime: "2020-06-15 13:26:16",
          // effectTime: "2020-07-01 15:07:40",
          // id: 1,
          // title: "隐私政策",
          // type: 1,
          // updateTime: "2020-06-30 10:37:24",
        },
      }
    },
    mounted() {
      if (localStorage.loginUserInfo && JSON.parse(localStorage.loginUserInfo).token){
        this.localUserData = JSON.parse(localStorage.loginUserInfo);
      }
      this.getUserAgreement();
    },
    methods: {
      getUserAgreement(){
        this.$api.userInfo.toseeUserAgreement({toSeeType: 3, token: this.localUserData.token}).then(res => {
          this.agrData = res.data.result;
        })
      },
    }
  }
</script>
<style lang="scss" scoped>
  #djcertified{
    width: 78%;
    min-height: 400px;
    background: #eaeaf0;
    margin: 20px auto;
    font-size: 0.14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 10px;
    .title{
      font-size: 0.22rem;
      color: #333333;
      line-height: 60px;
      text-align: center;

    } 
    .section-content{
      color: #666666;
      line-height: 24px;
    }
  }
</style>
