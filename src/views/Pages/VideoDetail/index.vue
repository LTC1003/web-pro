<template>
  <div class="video-detail">
    <!-- {{text}} -->
    <div class="divflex">
      <div class="play-main">
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
            <div class="auxItem"><span>主栏目: {{palyData.oneClassify}}</span><span>子栏目: {{palyData.twoClassify}}</span></div>
            <div class="auxItem">发布时间：{{palyData.createdAt}}</div>
            <div class="auxItem">
              <!-- <span class="" @click="getAddHobbyVideo(palyData.id)">
              </span> -->
              <i icon="el-icon-videolink"  
                class="el-icon-videolink"
                slot="suffix"
                @click.prevent="getAddHobbyVideo(palyData.id)">
              </i> 
              {{palyData.likes}}
            </div>
            <div class="auxItem">
              <i icon="el-icon-videoshare"  
                class="el-icon-videoshare"
                slot="suffix">
                <!-- @click.prevent="getShareVideo(palyData.id)" -->
              </i> 
              {{palyData.shares}}
            </div>
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
            <span>关注：{{palyData.attCount}}</span>
            <span>粉丝：{{palyData.fansCount}}</span>
            <span>鼓励值：{{palyData.interests}}</span>
          </div>
          <div class="computgroup">
            <div class="olg">鼓励一下</div>
            <div class="gzt" @click="addAttentionUser(palyData.userId)">关注TA</div>
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
      localUserData: '',
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
      // console.log(localStorage.detailVideoId, '视频id');
    }
    if (!!localStorage.loginUserInfo) {
      this.localUserData = JSON.parse(localStorage.loginUserInfo);
    }
    this.getVideoDetail(localStorage.detailVideoId); // 视频详情
    this.getVideoRecommend(localStorage.detailVideoId); // 推荐
    this.getAddLookVideo(localStorage.detailVideoId); // 观看记录
  },
  methods: {
    getVideoDetail(videoId){
      let paramObj = {
        videoId,
        token: this.localUserData.token,
        userId: this.localUserData.id,
        isTourist: 2,
      }
      this.$api.findService.getLongVideoParticulars(paramObj).then(res => {
        if(res.data){
          this.palyData = res.data.result;
          console.log(this.palyData, 'detail');
        }
      })
    },
    // 推荐
    getVideoRecommend(videoId){
      let objParams = {
        token: this.localUserData.token,
        userId: this.localUserData.id,
        videoId,
        page: 1,
        limit: 4,
        isTourist: 1
      };
      // objParams['videoId'] = JSON.parse(localStorage.detailVideoId);
      this.$api.findService.getLongVideoRecommend(objParams).then(res => {
        if (res.data.pageCount) {
          this.recommendData = res.data.result;
        }
      });
    },
    // 添加用户关注
    addAttentionUser(userId){
      let reqData = {
        token: this.localUserData.token,
        uid: this.localUserData.id,
        touid: userId,
      }
      this.$api.userInfo.addAttention(reqData).then(res => {
        // console.log(res.data.result, '返回: attentionId');
        if (res.message == "操作成功") {
          this.palyData.fansCount += 1;
        }
      })
    },
    // 添加观看历史纪录
    getAddLookVideo(videoData){
      let reqData = {
        video_id: videoData,
        user_id: this.localUserData.id,
        module_type: 2,
      }
      console.log(reqData,'sdsd');
      this.$api.userInfo.addLookVideoHistory(reqData).then(res => {
        console.log(res, 'add videoId');
      })
    },
    // 添加兴趣(点赞)
    getAddHobbyVideo(videoId){
      let reqData = {
        video_id: videoId,
        user_id: this.localUserData.id,
        module_type: 2,
      }
      this.$api.userInfo.addHobbyVideo(reqData).then(res => {
        // message: "我的兴趣已存在success"
        if (res.message == "我的兴趣已存在") {
          this.palyData.likes -= 1;
        } else {
          this.palyData.likes += 1;
        }
      })
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
