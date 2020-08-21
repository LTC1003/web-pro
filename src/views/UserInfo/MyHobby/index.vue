<template>
  <div class="hobby"> 
    <div class="caption">
      <div class="tabs">
        <div class="tab" :class="[tabItem.tabName == activeTab ? 'isActive' : '']" 
          v-for="(tabItem, index) in tabsDate" :key="index" 
          :name ="tabItem.tabName" 
          @click="onClickTab(tabItem.typePathName, tabItem.tabName)">
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
  name: "myhobby",
  components: {

  },
  data() {
    return {
      activeTab: '',
      tabsDate: [
        {tabName: '短视频', typePathName: 'short-video'}, 
        {tabName: '专栏视频', typePathName:'column-video'}
      ],
    }
  },
  mounted() {
    this.activeTab = '短视频';
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
