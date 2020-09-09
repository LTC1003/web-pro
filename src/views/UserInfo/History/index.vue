<template>
  <div class="history"> 
    <div class="caption">
      <div class="tabs">
        <div class="tab" :class="[activeTab == index ? 'isActive' : '']" 
          v-for="(tabItem, index) in tabsDate" :key="index" 
          :name ="tabItem.tabName" 
          @click="onClickTab(index)">
          {{tabItem.tabName}}
        </div>
      </div>
      <div class='managebtn' @click="delControl()">{{delControlText}}</div>
    </div>  
    <router-view :itemChildData="itemChildData"></router-view>
  </div>
</template>

<script>

export default {
  name: "history",
  components: {

  },
  data() {
    return {
      delControlText: '管理',
      itemChildData: '',
      childPage: 0,
      activeTab: 0,
      tabsDate: [
        {tabName: '视频历史', historyType: 'history-video'}, 
        // {tabName: '直播历史', historyType:'history-live'}
      ],
    }
  },
  mounted() {
  },
  methods: {
    onClickTab(index){
      this.activeTab = index;
      this.childPage = index;
      // console.log(index, this.tabsDate[index].historyType, 2333)
      this.$router.push({name: this.tabsDate[index].historyType});
    },
    delControl(){
      if (this.delControlText === '管理') {
        this.delControlText = '完成';
        this.itemChildData = {childType: this.childPage, delStats: true};
      } else {
        this.delControlText = '管理';
        this.itemChildData = {childType: this.childPage, delStats: false};
      }
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
