<template>
  <div class="feedback"> 
    <div class="feedlist">
      <div class="feeditem" v-for="(item, index) in feedbackDatas" :key="index">
        <!-- <div>{{item.content}}</div> -->
        <div>{{item.order}}</div>
        <div>{{itemtitle}}</div>    
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
    flex: 1;
    padding: 20px;
    .feedlist{
      display: flex;
      flex-wrap: wrap;
      .feeditem{
        flex: 1;
      }
    }
  }
</style>
