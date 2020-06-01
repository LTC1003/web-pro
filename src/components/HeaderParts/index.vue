<template>
  <div class="header-parts">
    <div class="appLogo">
      <img :src="require('@/assets/home/appLogo.png')" alt="logo">
    </div>
    <div class="menuList">
      <div class="item-tab active">首页</div>
      <div class="item-tab">直播</div>
      <div class="item-tab">视频</div>
      <div class="item-tab">app下载</div>
    </div>
    <div class="control-group">
      <el-input class="search-type" suffix-icon="el-icon-search" v-model="searchVal"></el-input>
      <div class="cont-follow">关注</div>
      <div class="cont-user-group">
        Signin | register
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-parts",
  components: {},
  data() { 
    return {
      text: "commont header parts",
      searchVal: '和平精英2.0v',
    }
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
