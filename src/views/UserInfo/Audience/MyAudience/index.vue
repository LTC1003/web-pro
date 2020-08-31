<template>
  <div class="myaudience"> 
    <div class="usercard" v-for="(item, index) in dataList" :key="index">
      <!-- <div class="user-avatar">
        {{item.avatar}}
      </div> -->
      <el-avatar class="user-avatar" :src="item.avatar"></el-avatar>
      <div class="user-cont">
        <div class="userinfo">
          <div>
            <div class="username">{{item.touid}}</div>
            <div class="userrole" v-if="item.userRole == 1">{{'旅行家'}}</div>
            <div class="userrole" v-else-if="item.userRole == 2">{{'探索者'}}</div>
            <div class="userrole" v-else-if="item.userRole == 3">{{'文创师'}}</div>
            <div class="userrole" v-else>{{'没设定'}}</div>
          </div>
          <div class="dingyu" @click="getDelAttention(item.attentionId)">取消订阅</div> 
        </div>
        <div class="cardtitle">是个 iu 的人会改变历史的空间和 vi 饿不够了不错的s di j</div>
      </div>
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
      // contentBackInfo: '我的关注',
      localUserData: '', // 本地用户数据
      dataList: [
        {
          attentionId: 237,
          touid: 143,
          userRole: -1,
          avatar: "http://qiniu.jyddnw.com/images/my_headportrait_default@3x.png",
          userName: "ISEE用户1922",
          attentionStatus: 1
        },
      ],
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
        page: 1,
        limit: 10,
      }
      this.$api.userInfo.attentionList(reqData).then(res => {
        if (res.data) {
          this.dataList = res.data.result;
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
        .userinfo{
          width: 100%;
          display: flex;
          justify-content: space-between;
          .username{
            display: inline-block; 
            width: 48px;
            height: 22px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 22px;
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
        .cardtitle{
          width: 198px;
          height: 34px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 17px;
        }
      }
    }
  }

</style>