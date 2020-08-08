<template>
  <div >
    <div class="video-zone">
      <div class="askjshfabsdfhj">{{hostVideo}}</div>
      <div v-for="(item, index) in dataList" :key="index">
        <ListColumn v-bind:cardItem="item" ></ListColumn>
      </div>
    </div>
  </div>
</template>
<script>
import ListColumn from "../../components/ListColumn"
// import RecommendLive from "../../components/RecommendLive"
export default {
  name: 'video-zone',
  components: {
    ListColumn,
    // RecommendLive,
  },
  data () {
    return {
      // text: '视频专区',
      cardItem: '',
      dataList: [],
      hostVideo:"热播",

    }
  },
  mounted() {
    console.log(this.$route.query, 33444);
    this.getVideoType(this.$route.query.type);
  },
  methods: {
    getVideoType(type){
      var reData = {
        "token":"",
        "videoClassifyId": type,
        "userId": '',
        "type": "",
        "page": 1,
        "limit": 10,
        "isTourist":1
      }
      this.$api.findService.getVideoList(reData).then(
        (res) => {
            console.log(res.data.result.length, 666);
          let newData;
          if(res.data.result.length > 0 && res.data.result.length < 2){
            this.dataList = res.data.result[0].childList
            console.log(res.data.result[0].childList, 611);
            
          }
         
        }
      );
    }
  }
}
</script>
<style lang="scss">
  @import './index.scss';
  .askjshfabsdfhj{
    background: olive;
    width: 100%;
    height: 300px;
  }
</style>