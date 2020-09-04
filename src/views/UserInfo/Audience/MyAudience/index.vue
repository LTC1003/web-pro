<template>
  <div class="myaudience">
    <div class="nullalert" v-if="!isContent">{{contentBackInfo}}</div>
    <div v-else class="usercard" v-for="(item, index) in dataList" :key="index">
      <el-avatar class="user-avatar" :src="item.avatar"></el-avatar>
      <div class="user-cont">
        <div class="userinfo">
          <div class="userline">
            <div class="username">{{item.userName}}</div>
            <div class="userrole">
              {{item.userRole == 1 ? '旅行家': 
              (item.userRole == 2) ? '探索者' : 
              (item.userRole == 3) ? '文创师' :'未设定'}}
            </div>
          </div>
          <div class="dingyu" @click="getDelAttention(item.attentionId)">取消订阅</div> 
        </div>
        <div class="cardtitle">
          {{item.userCard}}
        </div>
      </div>
    </div>
    <div style="text-align:center; width: 100%">
      <el-pagination
        layout="prev, pager, next"
        :pager-count="pagerCount"
        :total="total"
        :page-size="pageSize"
        :current-page.sync="currentPage"
         @current-change="onCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: "myaudience",
  components: {

  },
  data() {
    return {
      isContent: 1,
      contentBackInfo: '我的关注',
      localUserData: '', // 本地用户数据
      dataList: [],
      total: 10, //总数
      pagerCount: 5, // 页码按钮的数量 大于等于 5 且小于等于 21 的奇数
      pageSize: 10, // 每页条数
      currentPage: 1, // 当前页
      pageCount: 1,
    }
  },
  mounted() {
    this.localUserData = JSON.parse(localStorage.loginUserInfo);
    this.getAttentionList();
  },
  methods: {
    getAttentionList(){
      let reqData = {
        token: this.localUserData.token,
        userId: this.localUserData.id, 
        page: this.currentPage,
        limit: this.pageSize,
      }
      this.$api.userInfo.attentionList(reqData).then(res => {
        if (res.data) { // 判断返回的对象的key data存在
          this.dataList = res.data.result;
          this.isContent = 1;
          // this.pageCount = res.data.pageCount;
          this.total = this.pageSize *  res.data.pageCount;
        } else {

          this.contentBackInfo = "空空如也，没有更多关注";
          this.isContent = 0;
        }
      })
    },
    // 取消关注 delAttention
    getDelAttention(attentionId){
      let reqData = {
        attentionId,
        token: this.localUserData.token
      }
      this.$api.userInfo.delAttention(reqData).then(res => {
        console.log(res, 'del')
        if (res.message == "操作成功") {
          this.getAttentionList();
        }
      })
    },
    // 调当前页
    onCurrentChange(val){
      console.log(`当前页: ${val}`);
      this.getAttentionList();
    }
  }
};
</script>

<style lang="scss">
  // @import "./index.scss";
  .myaudience{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 20px -10px;
    .nullalert{
      width: 100%;
      min-height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .usercard{
      width: 314px;
      // width: 30%;
      height: 140px;
      background: #F6F6F6;
      border-radius: 4px;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      .user-avatar{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .user-cont{
        flex: 1;
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .userinfo{
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-family: PingFangSC-Regular, PingFang SC;
          // margin-bottom: 10px;
          .dingyu{
            // width: 48px;
            height: 17px;
            font-size: 12px;
            line-height: 17px;
            &:hover{
              color: #479CDC;
              cursor: pointer;
            }
          }
          .userline{
            // border: 1px solid #333333;
            width: 1.35rem;
            display: flex;
            align-items: center;
            .username{
              display: inline-block; 
              width: 80px;
              height: 22px;
              line-height: 22px;
              font-size: 16px;
              color: #333333;
              // 单行文本
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              -o-text-overflow:ellipsis;
              -webkit-text-overflow:ellipsis;
            }
            .userrole{
              display: inline-block;
              height: 18px;
              line-height: 18px;
              padding: 2px 5px;
              background: linear-gradient(180deg, #FFE524 0%, #FDAE19 100%);
              border-radius: 9px;
              color: #ffffff;
            }
          }
        }
        .cardtitle{
          width: 198px;
          height: 34px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 17px;
          // 多行文本
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }

</style>