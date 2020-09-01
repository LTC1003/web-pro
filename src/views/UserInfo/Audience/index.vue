<template>
  <div class="audience"> 
    <div class="caption">
      <div class="tabs">
        <div class="tab" :class="[tabItem.tabName == activeTab ? 'isActive' : '']" 
          v-for="(tabItem, index) in tabsDate" :key="index" 
          :name ="tabItem.tabName" 
          @click="onClickTab(tabItem.typePathName, tabItem.tabName)">
          {{tabItem.tabName}}
        </div>
      </div>
      <!-- <div class='managebtn'>管理</div> -->
    </div>  
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "audience",
  components: {

  },
  data() {
    return {
      activeTab: '',
      tabsDate: [
        {tabName: '我的关注', typePathName: 'myaudience'}, 
        {tabName: '与我有关', typePathName: 'audienceme'}
      ],
    }
  },
  mounted() {
    this.activeTab = '我的关注';
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
// scoped
<style lang="scss" scoped>
  @import "./index.scss";
</style>
