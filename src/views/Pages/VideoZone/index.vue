<template>
  <div >
    <div class="video-zone">
      <!-- 视频热推 广告 -->
      <div class="hotVideo">
        <div class="thead">
          <div class="title">hdbsbd</div>
          <div class="btn"> 查看更多<span> > </span></div>
        </div>
        <div class="hot-warp">
          <el-carousel class="banner">
            <el-carousel-item v-for="item, index in bannerList" :key="index">
              <h3 class="small banner_title">{{item.title}}</h3>
              <img :src="item.img" alt="">
            </el-carousel-item>
          </el-carousel>
          <div class="hot-video">
            <div class="userCard" v-for="(item, index) in previousList" :key="index">
              <div class="userCont">
                <img :src=" item.thumb">
              </div>
              <!-- <div class="userDocs">{{item.title}}</div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- 栏目组件 -->
      <div v-for="(item, index) in dataList" :key="index">
        <ListColumn :cardItem="item"></ListColumn>
      </div>
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
      typeId: 1,
      bannerList: [],
      previousList: [
        // thumb: "http://qiniu.jyddnw.com/images/timg(27).jpg",
        // title: "南京DNA航拍",
        // user_id: 78,
        // video_duration
      ],
    }
  },
  mounted() {
    this.typeId =this.$route.query.id
    this.getHotBanner();
    this.getHotPrevious();
  },
  methods: {
    // 推荐
    getHotBanner(){
      let type = 1;
      this.$api.findService.hotBanner({type}).then((res, err) => {
        if(res.message === "success"){
          this.bannerList = res.data.result;
        } else {
          console.log(err, 'banner/err');
        }
      });
    },
    getHotPrevious(){
      this.$api.findService.hotPrevious({offset:1, type: 5}).then((res, err) => {
        if(res.message === "success"){
          this.previousList = res.data.result;
        } else {
          console.log(err, 'banner/err');
        }
      });
    },
    getVideoType(videoClassifyId){
      var reqObj = {
        token: '',
        videoClassifyId,
        userId: '',
        isTourist: 1, 
        page: 1,
        limit: 10
      }
      this.$api.findService.getAllVideoListWeb(reqObj).then(
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
      console.log(n,1111111111);
      this.getVideoType(n);
    }
  },
}
</script>
<style lang="scss">
  @import './index.scss';
</style>