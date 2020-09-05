<template>
  <div class="video-zone">
    <!-- 视频热推 广告 -->
    <div class="hotVideo" v-if="hotVideoHidden">
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
    <div v-for="(item, index) in dataList" :key="index" v-if="columnListHiddn">
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
      hotVideoHidden: false,
      columnListHiddn: true,
      dataList: [],
      previousList: [
        // thumb: "http://qiniu.jyddnw.com/images/timg(27).jpg",
        // title: "南京DNA航拍",
        // user_id: 78,
        // video_duration
      ],
      typeObj:{
        // id: '', // 栏目类id标识
        // type: '', // 热推和栏目区分 
      },
      bannerList: [],
      loginUserData: { // 用户未游客状态
        token: '',  // null
        userId: '', // null 
        videoClassifyId: '', // 栏目id
        isTourist: 1,  // 1游客 2用户
        page: 1,
        limit: 10,
      },
      localUserData: '',
    }
  },
  mounted() {
    console.log(this.$route.query, 999221);
    this.typeObj = this.$route.query;
    if (!!localStorage.loginUserInfo) {
      this.localUserData = JSON.parse(localStorage.loginUserInfo);
      this.loginUserData.isTourist = 2; // 用户登录
    } else {
      this.loginUserData.isTourist = 1; // 游客登录
    }
    if (this.typeObj.id) { //有栏目id 且类型是热推
      console.log(this.typeObj.type, 5666666)
      if (this.typeObj.type != '2') {
        console.log('热推单独展示');
        this.getHotPrevious();
        this.getHotBanner();
        this.hotVideoHidden = true;
        this.columnListHiddn = false;
      } else {
        console.log('栏目单项展示,除热推外,')
        this.columnListHiddn = true;
        this.hotVideoHidden = false;
      }
    } else {
      console.log('全部展示');
      this.getHotPrevious();
      this.getHotBanner();
      this.hotVideoHidden = true;
      this.columnListHiddn = true;
    }  
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
          // 拿前6条
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
    getVideoType(columnObj){
      if (this.loginUserData.isTourist == 2) {
        this.loginUserData.token = this.localUserData.token;
        this.loginUserData.userId = this.localUserData.id;
      } else {
        this.loginUserData.token = '';
        this.loginUserData.userId = '';
      }
      if(columnObj.id) {
        this.loginUserData.videoClassifyId = columnObj.id;
      } else {
        this.loginUserData.videoClassifyId = '';
      }
      this.$api.findService.getAllVideoListWeb(this.loginUserData).then( res => {
        this.dataList = res.data.result;
        // console.log(this.dataList, 666);
      });
    }
  },
  watch: {
    $route(){
      this.typeObj = this.$route.query
    },
    typeObj: {
      handler(n,o) {
        this.getVideoType(n);
      },
      deep: true
    }
  },
}
</script>
<style lang="scss">
  @import './index.scss';
</style>