<template>
  <div class="video-detail">
    <!-- {{text}} -->
    <div class="divflex">
      <div class="play-main" v-model="palyData">
        <div class="playerbox">
          <video id="playerid"
          :src="palyData.videoUrl"  
          :poster="palyData.thumb" 
          controls = ""
          loop   
          preload="auto" 
          webkit-playsinline="true"      
          playsinline="true"
          x-webkit-airplay="allow"  
          x5-playsinline
          x5-video-player-type="h5"  
          x5-video-player-fullscreen="true"   
          x5-video-orientation="portraint"  
          style="object-fit:fill" 
          >
            <!-- <source  type="video/mp4" /> -->
          </video>
        </div>
        <div class="play-userinfo">
          <div class="title">{{palyData.title}}</div>
          <div class="auxiliary">
            <div class="auxItem"><span>主栏目: {{palyData.cateId}}</span><span>子栏目: {{palyData.catePid}}</span></div>
            <div class="auxItem">发布时间：{{palyData.createdAt}}</div>
            <div class="auxItem"><span class="">点赞</span> {{palyData.likes}}</div>
            <div class="auxItem"><span class="">分享</span> {{palyData.shares}}</div>
          </div>
        </div>
      </div>
      <div class="sidmain" >
        <div class="publisher">
          <div class="author">
            <el-avatar class="avatar" :src="palyData.avatars"></el-avatar>
            <span>
              {{palyData.userName}}
            </span>
          </div>
          <div class="briefly">{{palyData.userSignature}}</div>
          <div class="interest">
            <span>关注：{{0}}</span>
            <span>粉丝：{{0}}</span>
            <span>鼓励值：{{palyData.interests}}</span>
          </div>
          <div class="computgroup">
            <div class="olg">鼓励一下</div>
            <div class="gzt">关注TA</div>
          </div>
        </div>
        <div class="recommendations">
          <div class="title">相关推荐</div>
          <div class="videoRecom" v-for="(item, index) in recommendData" :key="index">
            <div class="videoposter">
              <video class="sorucev" :poster="item.thumb"></video>
            </div>
            <div class="videodesc">
              <div class="desc-title">{{item.title}}</div>
              <div class="desc-links">
                <div>links:{{item.likes}}</div>
              </div>
            </div>
          </div>
        </div>
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
        // attentionStatus: 1,
        // avatars: "http://qiniu.jyddnw.com/images/my_headportrait_default@3x.png",
        // cateId: 33,
        // catePid: 21,
        // createdAt: "2020-08-05 02:55:41",
        // id: 1218,
        // interestStatus: 1,
        // interests: 0,
        // iscombination: 1,
        // likes: 6,
        // shares: 0,
        // thumb: "http://qiniu.jyddnw.com/images/u=4169427256,4092912238&fm=26&gp=0.jpg",
        // title: "南京vlog：总统府",
        // userId: 25,
        // userName: "15051812959",
        // videoDuration: 561,
        // videoUrl: "http://qiniu.jyddnw.com/15967767250007ut3i8huopf.mp4",
        // views: 160,
      },
      recommendData: [
        {
          // attentionStatus: 1
          // avatars: "http://qiniu.jyddnw.com/images/资源28@3x.png"
          // cateName: "娱乐"
          // catePid: 18
          // createdAt: "2020-08-07 02:14:54"
          // id: 1227
          // interestStatus: 1
          // interests: 0
          // iscombination: 1
          // likes: 8
          // shares: 3
          // thumb: "http://qiniu.jyddnw.com/images/timg(23).jpg"
          // title: "南京--六合"
          // userId: 102
          // userName: "Add"
          // userSignature: "Asdasdwqd World"
          // videoDuration: 357
          // videoUrl: "http://qiniu.jyddnw.com/15967718990002zux1z1fa4m.mp4"
        }
      ],
    }
  },
  mounted() {
    if(!!localStorage.detailVideoId){
      console.log(localStorage.detailVideoId)
    }
    this.getVideoDetail(localStorage.detailVideoId);
    this.getVideoRecommend();
  },
  methods: {
    getVideoDetail(videoId){
      let paramObj = {
        videoId
      }
      if (!!localStorage.loginUserInfo && JSON.parse(localStorage.loginUserInfo).token) {
        paramObj['token'] = JSON.parse(localStorage.loginUserInfo).token;
        paramObj['userId'] = JSON.parse(localStorage.loginUserInfo).id;
        paramObj['isTourist'] = 2;

        this.$api.findService.getLongVideoParticulars(paramObj).then(
        res => {
          
          if(res.data){
            this.palyData = res.data.result;
          }
          console.log(this.palyData, 'detail');
        })
      }
    },
    getVideoRecommend(){
      let objParams = {
        // token: token,
        // userId: userId,
        // videoId: videoId,
        page: 1,
        limit: 5,
        isTourist: 1
      };
        console.log(JSON.parse(localStorage.loginUserInfo), 2333)
      if (!!localStorage.loginUserInfo) {
        objParams['token'] = JSON.parse(localStorage.loginUserInfo).token;
        objParams['userId'] = JSON.parse(localStorage.loginUserInfo).id;
        objParams['videoId'] = JSON.parse(localStorage.detailVideoId);
      }
      this.$api.findService.getLongVideoRecommend(objParams).then( res => {
        if (res.data.pageCount) {
          pageCount: 1
          this.recommendData = res.data.result;
        }
      })
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
