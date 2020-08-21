<template>
  <div class="myaudience"> 
    <div v-if="!isContent">{{contentBackInfo}}</div>
    <div v-for="(item, index) in dataList" :key="index">
      <div>
        {{item.avatar}}
      </div>
      <div>
        <div>{{item.userName}}</div>
        <div>{{item.userRole}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "myaudience",
  components: {

  },
  data() {
    return {
      contentBackInfo: '我的关注',
      isContent: 1,
      dataList: [
        {
          attentionId: 237,
          touid: 143,
          userRole: -1,
          avatar: "http://qiniu.jyddnw.com/images/my_headportrait_default@3x.png",
          userName: "ISEE用户1922",
          attentionStatus: 1
        },
      ],
    }
  },
  mounted() {
    this.getAttentionList();
  },
  methods: {
    getAttentionList(){
      let loaclObj = JSON.parse(localStorage.loginUserInfo);
      let reqData = {
        token: loaclObj.token,
        // token: "ffed1db5de614796aece86e4a387001c",
        userId: loaclObj.id, 
        page: 1,
        limit: 10,
      }
      this.$api.userInfo.attentionList(reqData).then(res => {
        console.log(res, '9999')
        if (res.data) {
          this.dataList = res.data.result;
        } else {

        }
      })
    }
  }
};
</script>

<style lang="scss">
  // @import "./index.scss";
</style>
