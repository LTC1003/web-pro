<template>
  <div class="shortvideo">
    <div class="nullalert" v-if="!isContent">{{contentBackInfo}}</div>
    <div v-else class="videoItem" v-for="(item, index) in datalist" :key="index">
      <div class="sourcev">
        <img class="video-cover" :src="item.cover" alt="">
        <div class="langtime">{{computedTime(item.duration)}}</div>
      </div>
      <div class="usercol">
        <div class="cardtitle">
          {{item.title}}
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
    name: 'short-video',
    data() {
      return {
        total: 100, 
        pagerCount: 7, // 大于等于 5 且小于等于 21 的奇数
        pageSize: 10, 
        currentPage: 1, 
        contentBackInfo: 'short-video',
        isContent: 1,
        datalist:[],
        localUserData: '',
      }
    },
    mounted() {
      this.localUserData = JSON.parse(localStorage.loginUserInfo);
      this.getShortList();
    },
    methods: {
      getShortList(){
        let reqData = {
          user_id: this.localUserData.id,
          module_type: 1,
          page: this.currentPage,
          limit: this.pageSize
        };
        this.$api.userInfo.videoHobbyList(reqData).then(res => {
          if(res.data && res.data.pageCount){
            this.datalist = res.data.result;
            this.isContent = 1;
          } else {
            this.contentBackInfo = "空空如也，什么都没有观看过";
            this.isContent = 0;
          }
        });
      },
      computedTime(msTime){
        return msTime += 1
      },
      onCurrentChange(val){
        // console.log(`当前页: ${val}`);
        this.getShortList();
      }
    }
  }
</script>
<style lang="scss">
  .shortvideo{
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
