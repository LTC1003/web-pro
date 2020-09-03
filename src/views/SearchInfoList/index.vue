<template>
  <div class="search-info">
    <div class="searchcontent">
      <div class="elarttext">{{text}}</div>
      <div class="searchtypebox">
        <div class="theade">视频 <span>{{'(' + videosCount + ')'}}</span> </div>
        <div class="searchlist">
          <div class="searchitem" 
            v-for="(item, index) in videoSearchList"
            :key="index">
            <div class="div1">{{item}}</div>
            <div class="div2">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="searchtypebox">
        <div class="theade">直播 <span>{{'(' + livesCount + ')'}}</span> </div>
        <div class="searchlist">
          <div class="searchitem" 
            v-for="(item, index) in liveSearchList"
            :key="index">
            <div class="div1">{{item}}</div>
            <div class="div2">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="searchtypebox">
        <div class="theade">用户 <span>{{'(' + usersCount + ')'}}</span> </div>
        <div class="searchlist">
          <div class="searchitem" 
            v-for="(item, index) in userSearchList"
            :key="index">
            <div class="div1">{{item}}</div>
            <div class="div2">{{item}}</div>
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
      videosCount: 7,
      videoSearchList: [1,2,3,4,5,6,7],
      livesCount: 5,
      liveSearchList: [1,2,3,4,5],
      usersCount: 3,
      userSearchList: [2,3,4],
      localUserData: '',
      isTourist: 1, 
    }
  },
  mounted() {
    if (!!localStorage.loginUserInfo) {
      this.localUserData = JSON.parse(localStorage.loginUserInfo);
      this.isTourist = 2; // 用户类型
    } else {
       this.isTourist = 1; // 游客
    }
    this.getSearchResult();
  },
  methods: {
    getSearchResult(){
      let reqData = {
        token: this.localUserData.token,
        userId: this.localUserData.id,
        searchKey: 'sssss', 
        page: 1, 
        limit: 10, 
        isTourist: this.isTourist,
        type: 2
      }
      this.$api.searchAll.getSearchContent(reqData).then(res =>{
        console.log(res, 6333);
      })
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
