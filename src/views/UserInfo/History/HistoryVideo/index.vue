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
    <div style="text-align:center; width: 100%">
      <el-pagination
        layout="prev, pager, next"
        :pager-count="pagerCount"
        :total="100"
        :page-size="pageSize"
        :current-page.sync="currentPage"
         @current-change="onCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'history-video',
    data() {
      return {
        total: 100, //总数
        pagerCount: 7, // 页码按钮的数量 大于等于 5 且小于等于 21 的奇数
        pageSize: 10, // 每页条数
        currentPage: 1, // 当前页
        localUserData: '',
        contentBackInfo: '空空如也，没有任何观看记录',
        isContent: 1,
        datalist:[
          // {
              // cate_name: "Mini剧"
              // cover: "http://qiniu.jyddnw.com/images/timg25.jpg"
              // duration: 300
              // id: 638
              // show_url: "http://qiniu.jyddnw.com/159677776300061zr5l85aze.mp4"
              // title: "街巷美食3"
              // userName: "奥术大师多"
              // userRole: "探索者"
              // video_id: 1237
          // },
        ],

      }
    },
    mounted() {
      this.localUserData = JSON.parse(localStorage.loginUserInfo);
      this.getVideoList();
    },
    methods: {
      getVideoList(){
        let reqData = {
          user_id: this.localUserData.id,
          module_type : 2,
          page: this.currentPage,
          limit: this.pageSize,
        };
        this.$api.userInfo.viewHistoryList(reqData).then(res => {
          if(res.data.result){
            this.datalist = res.data.result;
            this.isContent = 1;
          } else {
            this.contentBackInfo = "空空如也，没有留下任何观看记录";
            this.isContent = 0;
          }
        });
      },
      // 转时长
      computedTime(msTime){ //秒ms, 毫秒mss
        // let day = Math.floor((time) / (86400000)); //天
        // let hours = Math.floor((mssTime % 86400000) / 3600000); //时
        let minutes = parseInt((msTime % 3600000) / 60); //分 ((mstime % (1000 * 60 *60)) / 60)
        let seconds = parseInt((msTime % 60)); //秒
        // console.log(this.duboolnum(minutes), this.duboolnum(seconds));
        return this.duboolnum(minutes) + ':' + this.duboolnum(seconds)
      },
      duboolnum(num){
        if(num < 10){
          num = '0' + num;
        }
        return num
      },
      onCurrentChange(val){
        // console.log(`当前页: ${val}`);
        this.getVideoList();
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
      width: 2.28rem;
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
          width:208px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow:ellipsis;
          -webkit-text-overflow:ellipsis;
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
