<template>
  <div class="columnvideo">
    <div class="nullalert" v-if="!isContent">{{contentBackInfo}}</div>
    <div v-else class="videoItem" v-for="(item, index) in datalist" :key="index">
      <div class="sourcev">
        <div class="deleteItem" v-show="deleteHidden" @click="onDelete(item.id)">
          <i class="el-icon-close"></i>
        </div>
        <img class="video-cover" :src="item.thumb" alt="" @click="goToVideoDetail('video-detail', {videoId: item.video_id})">
        <div class="langtime">{{computedTime(item.duration)}}</div>
      </div>
      <div class="usercol">
        <div class="cardtitle">
          {{item.title}}
        </div>
        <div class="carduser">
          <div class="userole">{{'item.userRole'}}</div>
          <div class="usename">{{item.userName}}</div>
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
    name: 'column-video',
    props:[
      'itemChildData'
    ],
    data() {
      return {
        deleteHidden: false,
        contentBackInfo: '栏目视频',
        isContent: 1,
        datalist:[
          {
            // attentionStatus: 2
            // cate_name: "Mini剧"
            // duration: 300
            // id: 879
            // likes: 1
            // modelType2id: 879
            // shares: 0
            // show_url: "http://qiniu.jyddnw.com/159677776300061zr5l85aze.mp4"
            // thumb: "http://qiniu.jyddnw.com/images/timg25.jpg"
            // title: "街巷美食3"
            // userAvatar: "http://qiniu.jyddnw.com/images/编组3@3x.png"
            // userName: "Wee"
            // videoUrl: "http://qiniu.jyddnw.com/159677776300061zr5l85aze.mp4"
            // videoUserId: 78
            // video_id: 1237
          }
        ],
        localUserData: '',
        total: 100, 
        pagerCount: 7, // 大于等于 5 且小于等于 21 的奇数
        pageSize: 10, 
        currentPage: 1, 
      }
    },
    mounted() {
      this.localUserData = JSON.parse(localStorage.loginUserInfo);
      this.getColumnList();
    },
    methods: {
      getColumnList(){
        let reqData = {
          token: this.localUserData.token,
          user_id: this.localUserData.id,
          module_type: 2,
          page: this.currentPage,
          limit: this.pageSize
        };
        this.$api.userInfo.videoHobbyList(reqData).then(res => {
           if(res.data && res.data.result){
            this.datalist = res.data.result;
            this.isContent = 1;
          } else {
            this.contentBackInfo = "空空如也!";
            this.isContent = 0;
          }
        });
      },
      // 删除
      onDelete(itemId){
         let reqData = {
          user_id: this.localUserData.id,
          token: this.localUserData.token,
          module_type : 2,
          id_list: itemId
        };
        // reqData['id_list'] = itemId.toString();
        // console.log(reqData.id_list, 3435345);
        this.$api.userInfo.videoHobbyDelete(reqData).then(res => {
          if (res.message === "success") {
            this.$message.success('成功删除');
            this.getColumnList();
          }
        })
      },
      // 跳转详情
      goToVideoDetail(name, obj){
        localStorage.detailVideoId = obj.videoId
        this.$router.push({name: name});
      },
      // 时长
      computedTime(msTime){
        let minutes = parseInt((msTime % 3600000) / 60);
        let seconds = parseInt((msTime % 60)); 
        return this.duboolnum(minutes) + ':' + this.duboolnum(seconds);
      },
      duboolnum(num){
        if(num < 10){
          num = '0' + num;
        }
        return num
      },
      onCurrentChange(val){
        // console.log(`当前页: ${val}`);
        this.getColumnList();
      },
    },
    watch: {
      itemChildData: {
        handler(n,o) {
          if (n.childType) {
            this.deleteHidden = n.delStats;
          } else {
            // 短视频
          }
        },
        deep: true
      }
    }
  }
</script>
<style lang="scss">
  .columnvideo{
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
    .videoItem{
      margin: 10px;
      // width: 230px;
      width: 2.28rem;
      .sourcev{
        height: 124px;
        position: relative;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        .deleteItem{
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #CCCCCC;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: -13px;
          right: -13px;
          .el-icon-close{
            font-size: 10px;
            color: #FFFFFF;
          }
        }
        .video-cover{
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          &:hover{
            cursor: pointer;
          }
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
