<template>
  <div class="historylist">
    <div class="nullalert" v-if="!isContent">{{contentBackInfo}}</div>
    <div v-else class="historyvideo" v-for="(item, index) in datalist" :key="index">
      <div class="sourcev">
        <div class="deleteItem" v-show="deleteHidden" @click="onDelete(item.id)">
          <i class="el-icon-close"></i>
        </div>
        <img class="video-cover" :src="item.cover" alt="" @click="goToVideoDetail('video-detail', {videoId: item.video_id})">
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
        :page-size="pageSize"
        :current-page.sync="currentPage"
        :total="total"
         @current-change="onCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'history-video',
    props:[
      'itemChildData'
    ],
    data() {
      return {
        deleteHidden: false,
        total: 10, //总数
        pagerCount: 5, // 页码按钮的数量 大于等于 5 且小于等于 21 的奇数
        pageSize: 10, // 每页条数
        currentPage: 1, // 当前页
        pageCount: 1, // 页数
        localUserData: '',
        contentBackInfo: '空空如也，没有任何观看记录',
        isContent: 1,
        datalist:[],
      }
    },
    mounted() {
      if (!!localStorage.loginUserInfo) { 
        this.localUserData = JSON.parse(localStorage.loginUserInfo);
      }
      this.getVideoList();
    },
    methods: {
      // 获取列表
      getVideoList(){
        let reqData = {
          user_id: this.localUserData.id,
          token: this.localUserData.token,
          module_type : 2,
          page: this.currentPage,
          limit: this.pageSize,
        };
        this.$api.userInfo.viewHistoryList(reqData).then(res => {
          if(!!res.data.result){
            this.datalist = res.data.result;
            this.isContent = 1;
            this.pageCount = res.data.pageCount;
            this.total = this.pageSize *  this.pageCount;
            console.log(res);
          } else {
            this.contentBackInfo = "空空如也，没有留下任何观看记录";
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
        this.$api.userInfo.delListLookVideoHistory(reqData).then(res => {
          if (res.message === "success") {
            this.$message.success('成功删除');
            this.getVideoList();
          }
        })
      },
      // 跳转详情
      goToVideoDetail(name, obj){
        localStorage.detailVideoId = obj.videoId
        this.$router.push({name: name});
      },
      // 转时长
      computedTime(msTime){ //秒ms, 毫秒mss
        let minutes = parseInt((msTime % 3600000) / 60);
        let seconds = parseInt((msTime % 60)); 
        return this.duboolnum(minutes) + ':' + this.duboolnum(seconds)
      },
      duboolnum(num){
        if(num < 10){
          num = '0' + num;
        }
        return num
      },
      // 当前分页
      onCurrentChange(val){
        // console.log(`当前页: ${val}`);
        this.getVideoList();
      }
    },
    watch: {
      itemChildData: {
        handler(n,o) {
          if (n.childType) {
            // 传值在直播历史
          } else {
            // 传值视频历史
            this.deleteHidden = n.delStats;
          }
        },
        deep: true
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
        position: relative;
        top: 0;
        right: 0;
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
          // border-radius: 4px;
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
