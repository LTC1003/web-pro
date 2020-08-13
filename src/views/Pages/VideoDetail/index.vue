<template>
  <div class="video-detail">
    <!-- {{text}} -->
    <div class="divflex">
      <div class="play-main">
        <video id="playerid">
          <source src="MY_VIDEO.mp4" type="video/mp4" />
          <source src="MY_VIDEO.webm" type="video/webm" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
              >supports HTML5 video</a
            >
          </p>
        </video>
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
      linshiUrl: require('@/assets/img/bodyBGImg.png'),

    }
  },
  mounted() {
    console.log(this.$route, 'ddddd');
    this.getVideoDetail(this.$route.params);
  },
  methods: {
    getVideoDetail(obj){
      let paramObj = {
        token: '',
        userId: obj.userId,
        videoId: obj.videoId
      };
      if(obj.token){
        paramObj.token = obj.token;
      } else {
        paramObj.token = 'laozimeidenglunotoken';
      }
      this.$api.findService.getLongVideoParticulars(paramObj).then(
        res => {
          console.log(res, 'detail');
        }
      )
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
