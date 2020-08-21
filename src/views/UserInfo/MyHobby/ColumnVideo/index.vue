<template>
  <div class="columnvideo">
    <div v-if="!isContent">{{contentBackInfo}}</div>
    <div v-else class="videoItem" v-for="(item, index) in datalist" :key="index">
      <div class="sourcev">
        <img :src="item.thumb" alt="">
        <div class="langtime">{{item.duration}}</div>
      </div>
      <div class="videocard">
        <div class="title">{{item.title}}</div>
        <div class="carduser">
          <div class="user">
            <img :src="item.userAvatar" alt="">
            <div class="usename">{{item.userName}}</div>
          </div>
          <div class="cordthird">
            <div class="likes">{{item.likes}}</div>
            <div class="shares">{{item.shares}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'column-video',
    data() {
      return {
        contentBackInfo: 'columnVideo',
        isContent: 1,
        datalist:[
          // {
          //   attentionStatus: 1, //关注过该用户
          //   duration: 14, // 	视频时长(S)
          //   id: 4,
          //   likes: 2, // 点赞数
          //   shares: 0,  // 分享数
          //   show_url: "http://qiniu.jyddnw.com/20191129/5de0bbe5d74fb.mp4", // 视频url
          //   thumb: "http://qiniu.jyddnw.com/20191129/5de0bbd71a2d1.png", // 封面
          //   title: "让你再喝酒，今天老娘全方位伺候你这个醉鬼", // 标题
          //   userAvatar: "http://qiniu.jyddnw.com/images/my_headportrait_default@3x.png", //头像
          //   userName: "好好学", // 用户名
          //   videoUserId: 26, // 视频用户id
          //   video_id: 1161, // 视频id
          // },
        ],
      }
    },
    mounted() {
      this.getColumnList();
    },
    methods: {
      getColumnList(){
        let userdata = JSON.parse(localStorage.loginUserInfo);
        let reqData = {};
        // reqData['user_id'] = userdata.id;
        reqData['user_id'] = 25;
        reqData['module_type'] = 2;
        reqData['page'] = 1;
        reqData['limit'] = 10;
        this.$api.userInfo.videoHobbyList(reqData).then(res => {
           if(!res.data.pageCount){
            this.contentBackInfo = "空空如也，什么都没有观看过";
            this.isContent = 0;
          } else {
            this.datalist = res.data.result;
          }
        });
      }
    }
  }
</script>
<style lang="scss">
  .columnvideo{
    display: flex;
    margin: -10px;
    .videoItem{
      margin: 10px;
      width: 230px;
      border:1px solid #333;
      .sourcev{
        height: 125px;
        // box-sizing: content-box;
        position: relative;
        img{
          width: 100%;
        }
        .langtime{
          position: absolute;
          bottom: 20px;
          right: 20px;
        }
      }
      .videocard{
        height: 230px;
        height: 70px;
        background: #ffffff;
        .carduser{
          height: 50px;
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .user{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 40px;
              height: 40px;
            }
            .usename{
              margin-left: 10px;
            }
          }
          .cordthird{
            width: 20px;
            line-height: 20px;
            div{
              border: 1px solid #333;
            }
          }
        }
        .title{
          line-height: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
  
      }
    }
  }
</style>
