<template>
  <div class="feedback"> 
    <div class="feedlist">
      <div class="feeditem" v-for="(item, index) in feedbackDatas" :key="index">
        <div class="fgmsglogo" 
          :style="{backgroundImage: 'url('+gfImgUrl+')',
          backgroundSize:'cover'}">
        </div>
        <div class="msgrow">
          <div class="msgcol-head">
            <div class="msgcol-title">{{item.title}}</div>  
            <div class="msgcol-name">{{item.order}}</div>
          </div>    
          <div class="msgcol" v-html="item.content"></div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "feedback-message",
  components: {

  },
  data() {
    return {
      text: '反馈消息',
      feedbackDatas: [],
      gfImgUrl: require('@/assets/img/message_default_avatar.png'),
    }
  },
  mounted() {
    this.getFeedbackList()
  },
  methods: {
   getFeedbackList(){
    this.$api.userInfo.feedbackList().then(res => {
      console.log(res.data.result, 444555);
      if(res.message == "success"){
        this.feedbackDatas = res.data.result;
        // content: "<p></p><p>1、忘记密码怎么办？</p>"
        // id: 4
        // order: 0
        // title: "密码相关问题"
      }
    })
   }
  }
};
</script>

<style lang="scss" scoped>
  // @import "./index.scss";
  .feedback{
    .feedlist{
      .feeditem{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid #E5E5E5;
        .fgmsglogo{
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .msgrow{
          .msgcol-head{
             margin-bottom: 10px;
            .msgcol-title{
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #999999;
              line-height: 20px;
              display: inline-block;
            }
            .msgcol-name{
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #999999;
              line-height: 20px;
              display: inline-block;
              margin-left: 40px;
            }
          }
        }
      }
    }
  }
</style>
