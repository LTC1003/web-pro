<template>
  <div class="history"> 
    <div class="caption">
      <div class="tabs">
        <div v-for="(item, index) in items" :key="index" @click="onClickTab(item.historyType)">{{item.tabName}}</div>
      </div>
      <el-button type="danger" round size="mini">管理</el-button>
    </div>
        
      
    <div class="typeContent">
      
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
      items: [
        {tabName: '视频历史', historyType: "historyVideo"}, 
        {tabName: '直播历史', historyType:'historyLive'}
      ],
    }
  },
  mounted() {

  },
  methods: {
    onClickTab(i){
      console.log(i, this.items[i].tabName);
      
    }
   
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
