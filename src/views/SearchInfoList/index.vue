<template>
  <div class="search-info">
    <div class="searchcontent">
      <div class="elarttext" v-if="searchVal">
        <span>{{'找到 "'}}</span>
        <span style="color: #f00">{{searchVal}}</span>
        <span>{{'" 相关内容 '+ (videosCount + livesCount + usersCount) +' 条'}}</span> 
      </div>
      <div v-else>搜索没有找到结果</div>
      <div class="searchtypebox" v-if="videosCount > 0">
        <div class="theade">视频 <span>{{'(' + videosCount + ')'}}</span> </div>
        <div class="searchlist">
          <div class="searchitem" 
            v-for="(item, index) in videoSearchList"
            :key="index">
            <div class="div1"
              @click="goToVideoDetail('video-detail', {userId: item.userId, videoId: item.id})"
              :style="{backgroundImage: 'url('+ item.thumb +')'}" >
              <div class="duration">{{computedTime(item.videoDuration)}}</div>
            </div>
            <div class="div2">{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="searchtypebox" v-if="livesCount > 0">
        <div class="theade">直播 <span>{{'(' + livesCount + ')'}}</span> </div>
        <div class="searchlist">
          <div class="searchitem"  
            v-for="(item, index) in liveSearchList"
            :key="index">
            <div class="div1" 
              :style="{backgroundImage: 'url(' + item.thumb + ')'}" >
            </div>
            <div class="div2">{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="searchtypebox" v-if="usersCount > 0">
        <div class="theade">用户 <span>{{'(' + usersCount + ')'}}</span> </div>
        <div class="searchlist">
          <div class="searchitem users"
            v-for="(item, index) in userSearchList"
            :key="index">
            <el-avatar class="useavatar" :src="item.avatars"></el-avatar>
            <div class="usercard">
              <div class="cardinfo">
                <div class="cardname">
                  <div class="username">{{item.userName}}</div>
                  <div class="userrole">{{item.roleName}}</div>
                </div>
                <div class="cardbtn activeuse" v-if="item.attentionStatus > 1">关注TA</div>
                <div class="cardbtn" v-else @click="addAttentionUser(item.id)">关注TA</div>
              </div>
              <div class="cardtitle">{{item.userSignature}}哈尔害怕白癜风VB早上发播放VB色号吧波波大V把日本风水电费不好爸爸</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-info-list",
  components: {

  },
  data() {
    return {
      text: '找到 “山药” 相关内容526条',
      videosCount: 0,
      videoSearchList: [],
      livesCount: 0,
      liveSearchList: [],
      usersCount: 0,
      userSearchList: [],
      localUserData: '',
      isTourist: 1,
      searchVal: '', 
      pageCount: '',
    }
  },
  mounted() {
    if (!!localStorage.loginUserInfo) {
      this.localUserData = JSON.parse(localStorage.loginUserInfo);
      this.isTourist = 2; // 用户类型
    } else {
       this.isTourist = 1; // 游客
    }
    this.searchVal = this.$route.query.searchVal
    // this.getSearchResult();
  },
  methods: {
    getSearchResult(searchData){
      // console.log(searchData, 344);
      let reqData = {
        token: this.localUserData.token,
        userId: this.localUserData.id,
        searchKey: searchData, 
        page: 1, 
        limit: 10, 
        isTourist: this.isTourist,
        type: '',
      }
      this.$api.searchAll.getSearchContent(reqData).then(res =>{
        if (res.message === "操作成功") {
          if (res.data.result.longVideo) {
            this.videosCount = res.data.result.longVideo.count;
            this.pageCount = res.data.result.longVideo.pageCount;
            this.videoSearchList = res.data.result.longVideo.videoList;
          }
          if (res.data.result.live) {
            this.livesCount = res.data.result.live.count;
            this.liveSearchList = res.data.result.live.liveList;
          } 
          if(res.data.result.user) {
            this.usersCount = res.data.result.user.count;
            this.userSearchList = res.data.result.user.userList;
          }
        }
      })
    },
    // 添加用户关注
    addAttentionUser(userId){
      let reqData = {
        token: this.localUserData.token,
        uid: this.localUserData.id,
        touid: userId,
      }
      this.$api.userInfo.addAttention(reqData).then(res => {
        if (res.message == "操作成功") {
          this.$message.success('成功关注！');
          this.getSearchResult(this.searchVal);
        }
      })
    },
    // 视频详情
    goToVideoDetail(name, obj){
      console.log(name, 3333)
      localStorage.detailVideoId = obj.videoId
      this.$router.push({name: name});
    },
    computedTime(msTime){ //秒ms, 毫秒mss
      let minutes = parseInt((msTime % 3600000) / 60); // 分
      let seconds = parseInt((msTime % 60)); // 秒
      return this.duboolnum(minutes) + ':' + this.duboolnum(seconds)
    },
    duboolnum(num){
      if(num < 10){
        num = '0' + num;
      }
      return num
    },
  },
   watch: {
    $route(){
      this.searchVal = this.$route.query.searchVal
    },
    searchVal(n,o){
      this.getSearchResult(n);
    }
  },

};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
