<template>
  <div class="video-detail">
    <!-- {{text}} -->
    <div class="divflex">
      <div class="play-main">
        <div class="playerbox">
          <video id="playerid">
            <source :src="palyData.videoUrl" type="video/mp4" />
            <!-- <source src="MY_VIDEO.webm" type="video/webm" /> -->
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
          </video>
        </div>
        <div class="play-userinfo">
          <div class="title">{{palyData.title}}</div>
          <div></div>
        </div>
      </div>
      <div class="sidmain" >
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "video-detail",
  props: [],
  components: {},
  data() {
    return {
      text: "视频详情",
      palyData: {
        attentionStatus: 1,
        avatars: "http://qiniu.jyddnw.com/images/my_headportrait_default@3x.png",
        cateId: 33,
        catePid: 21,
        createdAt: "2020-08-05 02:55:41",
        id: 1218,
        interestStatus: 1,
        interests: 0,
        iscombination: 1,
        likes: 6,
        shares: 0,
        thumb: "http://qiniu.jyddnw.com/images/u=4169427256,4092912238&fm=26&gp=0.jpg",
        title: "南京vlog：总统府",
        userId: 25,
        userName: "15051812959",
        videoDuration: 561,
        videoUrl: "http://qiniu.jyddnw.com/15967767250007ut3i8huopf.mp4",
        views: 160,
      },
    }
  },
  mounted() {
    console.log(this.$route, 'ddddd');
    this.getVideoDetail(this.$route.params);
  },
  methods: {
    getVideoDetail(obj){
      let paramObj = {
        videoId: obj.videoId
      }
      if (!!localStorage.loginUserInfo && JSON.parse(localStorage.loginUserInfo).token) {
        paramObj['token'] = JSON.parse(localStorage.loginUserInfo).token;
        paramObj['userId'] = JSON.parse(localStorage.loginUserInfo).id;
        paramObj['isTourist'] = 2;

        this.$api.findService.getLongVideoParticulars(paramObj).then(
        res => {
          console.log(res, 'detail');
          if(res.data){
            this.palyData = res.data.result;
          }
          
        })
      }
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
