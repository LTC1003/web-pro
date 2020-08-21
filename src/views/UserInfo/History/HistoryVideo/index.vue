<template>
  <div class="historylist">
    <div class="nullalert" v-if="!isContent">{{contentBackInfo}}</div>
    <div v-else class="historyvideo" v-for="(item, index) in datalist" :key="index">
      <div class="sourcev">
        <img :src="item.cover" alt="">
        <div class="langtime">{{item.duration}}</div>
      </div>
      <div class="usercol">
        <div class="cardtitle">
          <div>{{item.title}}</div>
        </div>
        <div class="carduser">
          <div class="userole">{{item.id}}</div>
          <div class="usename">{{item.cate_name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'history-video',
    data() {
      return {
        contentBackInfo: 'historyVideo',
        isContent: 1,
        datalist:[
          {
            cate_name: "娱乐",  //分类名称
            cover: "http://qiniu.jyddnw.com/images/TEST10.jpg",  // 视频封面
            duration: 15,  // 视频时长
            id: 2,
            show_url: "http://qiniu.jyddnw.com/20191127/5dde3e84510f3.mp4", //视频url
            title: "测试主题",
            video_id: 1153,  //视频id
          }
        ],
      }
    },
    mounted() {
      this.getVideoList();
    },
    methods: {
      getVideoList(){
        let userdata = JSON.parse(localStorage.loginUserInfo);
        let reqData = {};
        // reqData['user_id'] = userdata.id;
        reqData['user_id'] = 25;
        reqData['module_type'] = 1;
        reqData['page'] = 1;
        reqData['limit'] = 10;
        this.$api.userInfo.viewHistoryList(reqData).then(res => {
          console.log(res, 'list');
          if(!res.data.pageCount){
            this.contentBackInfo = "空空如也，没有留下任何观看记录";
            this.isContent = 0;
          } else {
            this.datalist = res.data.result;
          }
        });
      },
    }
  }
</script>
<style lang="scss" >
  .historylist{
    display: flex;
    margin: -10px;
    .nullalert{
      width: 100%;
      min-height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .historyvideo{
      margin: 10px;
      border:1px solid #333333;
      width: 230px;
      .sourcev{
        height: 125px;
        position: relative;
        .langtime{
          color: #ffffff;
          position: absolute;
          bottom: 20px;
          right: 20px;
        }
      }
      .usercol{
        background: #c5c5e5;
        height: 65px;
        .cardtitle{
          font-size: 14px;
          color: #666666;
          line-height: 20px;
        }
        .carduser{
          height: 45px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
        }
      }
    }
  }
</style>
