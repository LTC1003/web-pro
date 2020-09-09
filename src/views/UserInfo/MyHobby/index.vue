<template>
  <div class="hobby"> 
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
    <div class="typeContent">
      <router-view :itemChildData="itemChildData"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "myhobby",
  components: {

  },
  data() {
    return {
      delControlText: '管理',
      itemChildData: '',
      activeTab: 0,
      tabsDate: [
        {tabName: '短视频', typePathName: 'short-video'}, 
        {tabName: '专栏视频', typePathName:'column-video'},
      ],
    }
  },
  mounted() {
    this.activeTab = 1;
  },
  methods: {
    onClickTab(index){
      this.activeTab = index;
      this.$router.push({name: this.tabsDate[index].typePathName});
    },
    delControl(){
      if (this.delControlText === '管理') {
        this.delControlText = '完成';
        this.itemChildData = {childType: this.activeTab, delStats: true};
      } else {
        this.delControlText = '管理';
        this.itemChildData = {childType: this.activeTab, delStats: false};
      }
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
