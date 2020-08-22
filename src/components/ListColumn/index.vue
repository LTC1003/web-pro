
<template>
  <div class="thmemList" id="cardItem">
    <div v-for="(item, index) in videoData.childList" :key="index">
      <div class="thead">
        <div class="title">{{item.cateName}}</div>
        <div class="btn"> 查看更多<span> > </span></div>
      </div>
      <div class="tbody">
        <div class="cardList"
          v-for="(item, index) in item.childVideoList" :key="index"
          @click="goToVideoDetail('video-detail', {userId: item.userId, videoId: item.id})">
          <div class="userCont">
            <img :src="item.thumb" alt="" srcset="">
          </div>
          <div class="userDocs">
            <p class="username"> {{item.userName}} </p>
            <p class="usertitle"> {{item.title}} </p>
          </div>
        </div>
        <div v-if="!item.childVideoList">{{'空空如也>>>>...'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list_column",
  props: ['cardItem'],
  components: {
  },
  data() { 
    return {
      itemImgsrc: require('@/assets/img/userWork.png'),
      videoData: '',
      testList: [
        // {
        //   attentionStatus: 1,
        //   avatars: "http://qiniu.jyddnw.com/images/编组3@3x.png",
        //   catePid: 18,
        //   createdAt: "2020-08-11 02:36:51",
        //   id: 1285,
        //   interestStatus: 1,
        //   interests: 1,
        //   iscombination: 0,
        //   likes: 0,
        //   shares: 0,
        //   thumb: "http://qiniu.jyddnw.com/images/u=1050289692,3449739925&fm=26&gp=0.jpg",
        //   title: "测试",
        //   userId: 145,
        //   userName: "我想问一下",
        //   userSignature: "不许哭",
        //   videoDuration: 297,
        //   videoUrl: "http://qiniu.jyddnw.com/1596865626000i0l1xv3il4b.mp4",
        //   views: 85
        // }
      ]
    }
  },
  mounted() {
    // console.log(this.$props['cardItem'], 302);
    this.videoData = this.$props['cardItem'];
  },
  methods: {
    goToVideoDetail(name, obj){
      console.log(name, 3333)
      //判断用户是否登录
      if (!!localStorage.loginUserInfo && JSON.parse(localStorage.loginUserInfo).token) { 
        // 有token跳转详情调接口。
        this.$router.push({name: name, params: obj});
      } else{
        // 没有token就不调详情接口,弹框提示用户登录
      }
    }
  },
  watch: {
    cardItem(n,o){
      console.log(n, 993);
      this.videoData = n;
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
