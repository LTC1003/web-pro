<template>
  <div class="video-zone">
    <!-- 视频热推 广告 -->
    <div class="hotVideo">
      <div class="thead">
        <div class="title">热推</div>
        <div class="btn"> 查看更多<span> > </span></div>
      </div>
      <div class="hot-warp">
        <el-carousel class="banner">
          <el-carousel-item v-for="(item, index) in bannerList" :key="index">
            <h3 class="small banner_title">{{item.title}}</h3>
            <img :src="item.img" alt="">
          </el-carousel-item>
        </el-carousel>
        <div class="hot-video">
          <div class="userCard" v-for="(item, index) in previousList" :key="index">
            <div class="usercover" 
              @click="goToVideoDetail('video-detail', {userId: item.userId, videoId: item.id})"
              :style="{backgroundImage: 'url('+ item.thumb +')'}">
              <div class="userDocs">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 栏目组件 -->
    <div v-for="(item, index) in dataList" :key="index">
      <ListColumn :cardItem="item"></ListColumn>
    </div>
  </div>
</template>
<script>
import ListColumn from "@/components/ListColumn";
// import RecommendLive from "../../components/RecommendLive"
export default {
  name: 'video-zone',
  components: {
    ListColumn,
    // RecommendLive, 
  },
  data () {
    return {
      dataList: [],
      previousList: [
        // thumb: "http://qiniu.jyddnw.com/images/timg(27).jpg",
        // title: "南京DNA航拍",
        // user_id: 78,
        // video_duration
      ],
      typeId: 1,
      bannerList: [],
      loginUserData: {  // 用户未游客状态
        token: '',  // null
        videoClassifyId: '', // 栏目id
        userId: '', // null 
        isTourist: 1,  // 1游客 2用户
        page: 1,
        limit: 10
      }
    }
  },
  mounted() {
    this.typeId = this.$route.query.id
    this.getHotBanner();
    this.getHotPrevious();
  },
  methods: {
    // 视频详情
    goToVideoDetail(name, obj){
      localStorage.detailVideoId = obj.videoId
      this.$router.push({name: name});
    },
    // 推荐-广告
    getHotBanner(){
      let type = 1;
      this.$api.findService.hotBanner({type}).then((res, err) => {
        if(res.message === "success"){
          this.bannerList = res.data.result;
        } else {
          // console.log(err, 'banner/err');
          this.$message.error(res.message);
        }
      });
    },
    // 热推-往期推荐
    getHotPrevious(){
      this.$api.findService.hotPrevious({offset:1, type: 5}).then((res, err) => {
        let newArr = [];
        if(res.message === "success"){
          // 拿前四条
          res.data.result.forEach((res,index) => {
            if (index < 6) {
              newArr.push(res);
            } else {
              return
            }
          })
          // this.previousList = res.data.result;
          this.previousList = newArr;
        } else {
          this.$message.error(res.message);
        }
      });
    },
    // 全部长视频栏目
    getVideoType(columnId){
      let localData;
      if (!!localStorage.loginUserInfo && JSON.parse(localStorage.loginUserInfo).token) {
        localData = JSON.parse(localStorage.loginUserInfo);
        this.loginUserData.token = localData.token;
        this.loginUserData.userId = localData.id;
        this.loginUserData.isTourist = 2;
      }
      this.loginUserData['videoClassifyId'] = columnId;
      this.$api.findService.getAllVideoListWeb(this.loginUserData).then(
        (res) => {
          this.dataList = res.data.result;
          console.log(this.dataList, 666);
        }
      );
    }
  },
  watch: {
    $route(){
      this.typeId = this.$route.query.id
    },
    typeId(n,o){
      this.getVideoType(n);
    }
  },
}
</script>
<style lang="scss">
  @import './index.scss';
</style>