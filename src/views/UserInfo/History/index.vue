<template>
  <div class="history"> 
    <div class="caption">
      <div class="tabs">
        <div class="tab" :class="[tabItem.tabName == activeTab ? 'isActive' : '']" 
          v-for="(tabItem, index) in tabsDate" :key="index" 
          :name ="tabItem.tabName" 
          @click="onClickTab(tabItem.historyType, tabItem.tabName)">
          {{tabItem.tabName}}
        </div>
      </div>
      <div class='managebtn'>管理</div>
    </div>  
    <div class="typeContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "history",
  components: {

  },
  data() {
    return {
      activeTab: '',
      tabsDate: [
        {tabName: '视频历史', historyType: 'history-video'}, 
        {tabName: '直播历史', historyType:'history-live'}
      ],
    }
  },
  mounted() {
    this.activeTab = '视频历史';
  },
  methods: {
    onClickTab(pathName,name){
      this.activeTab = name;
      console.log(pathName)
      this.$router.push({name: pathName});
    }
   
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
