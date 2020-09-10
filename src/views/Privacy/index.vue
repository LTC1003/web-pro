<template>
  <div id="privacy">
      <div class="title">
        <!-- {{agrData.title}} -->
        “TooSee”隐私政策  
      </div>
      <div>最近更新时间：2020年06月10日</div>
      <div>上次更新时间：2020年01月10日</div>
      <div class="section-content">
        <!-- {{agrData.content}} -->
        <div>江苏精易达信息技术股份有限公司及其关联公司（简称“我们”）作为”TooSee”的运营者，深知个人信息对您的重要性，我们将按照法律法规的规定，保护您的个人信息及隐私安全</div>
        <div class="kaitou">
          本隐私政策将帮助您了解：
          <ol>
            <li>我们如何收集和使用个人信息</li>
            <li>我们如何使用Cookie等同类技术</li>
            <li>我们如何共享、转让、公开披露个人信息</li>
            <li>我们如何存储个人信息</li>
            <li>我们如何保护个人信息的安全</li>
            <li>管理您的个人信息</li>
            <li>未成年人使用条款</li>
            <li>隐私政策的修订和通知</li>
            <li>联系我们  </li>
          </ol>
          <!-- 1、我们如何收集和使用个人信息
          2、我们如何使用Cookie等同类技术
          3、我们如何共享、转让、公开披露个人信息
          4、我们如何存储个人信息
          5、我们如何保护个人信息的安全
          6、管理您的个人信息
          7、未成年人使用条款
          8、隐私政策的修订和通知
          9、联系我们 -->
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'privacy',
    components: {

    },
    data() {
      return {
        // text: '隐私政策',
        localUserData: '',
        agrData: {
          // content: "的“TooSee”服务协议↵“TooSee”服务协议（下称“本协议”）是您与“TooSee”软件（网站）",
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
        this.$api.userInfo.toseeUserAgreement({toSeeType: 2, token: this.localUserData.token}).then(res => {
          this.agrData = res.data.result;
        })
      },
    }
  }
</script>
<style lang="scss" scoped>
  #privacy{
    width: 78%;
    min-height: 400px;
    background: #eaeaf0;
    margin: 20px auto;
    font-size: 0.12rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 10px;
    padding: 10px;
    .title{
      font-size: 0.22rem;
      color: #333333;
      line-height: 60px;
      text-align: center;

    } 
    .section-content{
      color: #666666;
      line-height: 24px;
      .kaitou{
        margin-left: 20px;
      }
      ol,li {
        list-style-type: decimal;
        margin-left: 20px;
      }
    }
  }
</style>
