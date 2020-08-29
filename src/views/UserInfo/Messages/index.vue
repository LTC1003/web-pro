<template>
  <div class="messages"> 
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
    <div class="typeContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "messages",
  components: {

  },
  data() {
    return {
      activeTab: '',
      tabsDate: [
        {tabName: '反馈消息', typePathName: 'feedback-message'}, 
        {tabName: '官方通知', typePathName: 'official-notice'}
      ],
    }
  },
  mounted() {
    this.activeTab = '反馈消息';
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
