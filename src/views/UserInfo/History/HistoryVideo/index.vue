<template>
  <div class="historylist">
    <div class="nullalert" v-if="!isContent">{{contentBackInfo}}</div>
    <div v-else class="historyvideo" v-for="(item, index) in datalist" :key="index">
      <div class="sourcev">
        <img class="video-cover" :src="item.cover" alt="">
        <div class="langtime">{{computedTime(item.duration)}}</div>
      </div>
      <div class="usercol">
        <div class="cardtitle">
          <div>{{item.title}}</div>
        </div>
        <div class="carduser">
          <div class="userole">{{item.userRole}}</div>
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
        localUserData: '',
        contentBackInfo: '空空如也，没有任何观看记录',
        isContent: 1,
        datalist:[
          {
            cate_name: "娱乐",  //分类名称
            cover: "http://qiniu.jyddnw.com/images/TEST10.jpg",  // 视频封面
            duration: 15,  // 视频时长
            id: 2, 
            show_url: "http://qiniu.jyddnw.com/20191127/5dde3e84510f3.mp4", //视频url
            title: "测试主题",
            userRole: -1,
            video_id: 1153,  //视频id
          },
          {
            cate_name: "娱乐",  //分类名称
            cover: "http://qiniu.jyddnw.com/images/TEST10.jpg",  // 视频封面
            duration: 15,  // 视频时长
            id: 2, 
            show_url: "http://qiniu.jyddnw.com/20191127/5dde3e84510f3.mp4", //视频url
            title: "测试主题",
            video_id: 1153,  //视频id
            userRole: 1,
          },
          {
            cate_name: "娱乐",  //分类名称
            cover: "http://qiniu.jyddnw.com/images/TEST10.jpg",  // 视频封面
            duration: 15,  // 视频时长
            id: 2, 
            show_url: "http://qiniu.jyddnw.com/20191127/5dde3e84510f3.mp4", //视频url
            title: "测试主题",
            video_id: 1153,  //视频id
            userRole: 2,
          },
          {
            cate_name: "娱乐",  //分类名称
            cover: "http://qiniu.jyddnw.com/images/TEST10.jpg",  // 视频封面
            duration: 15,  // 视频时长
            id: 2, 
            show_url: "http://qiniu.jyddnw.com/20191127/5dde3e84510f3.mp4", //视频url
            title: "测试主题",
            video_id: 1153,  //视频id
            userRole: 3,
          },
          {
            cate_name: "娱乐",  //分类名称
            cover: "http://qiniu.jyddnw.com/images/TEST10.jpg",  // 视频封面
            duration: 15,  // 视频时长
            id: 2, 
            show_url: "http://qiniu.jyddnw.com/20191127/5dde3e84510f3.mp4", //视频url
            title: "测试主题",
            video_id: 1153,  //视频id
            userRole: 1,
          }
        ],

      }
    },
    mounted() {
      this.localUserData = JSON.parse(localStorage.loginUserInfo);
      this.getVideoList();
    },
    methods: {
      getVideoList(){
        let reqData = {};
        // reqData['user_id'] = this.localUserData.id;
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
      computedTime(msTime){
        return msTime += 1
      }
    }
  }
</script>
<style lang="scss" >
  .historylist{
    display: flex;
    flex-wrap: wrap;
    margin: 20px -10px;
    .nullalert{
      width: 100%;
      min-height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .historyvideo{
      margin: 10px;
      width: 229px;
      .sourcev{
        height: 124px;
        position: relative;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        .video-cover{
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        .langtime{
          color: #ffffff;
          position: absolute;
          bottom: 6px;
          right: 10px;
        }
      }
      .usercol{
        background: #ffffff;
        height: 67px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        padding: 10px;
        font-family: PingFangSC-Regular, PingFang SC;
        .cardtitle{
          height: 20px;
          font-size: 14px;
          color: #333333;
          line-height: 20px;
        }
        .carduser{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          .userole{
            height: 17px;
            font-size: 12px;
            color: #FFFFFF;
            line-height: 17px;
            padding: 0 6px;
            background: linear-gradient(180deg, #FFE524 0%, #FDAE19 100%);
            border-radius: 9px;
          }
          .usename{
            height: 17px;
            font-size: 12px;
            color: #999999;
            line-height: 17px;
          }
        }
      }
    }
  }
</style>
