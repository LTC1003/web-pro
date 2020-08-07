<template>
  <div class="userinfo"> 
    <!-- <el-menu class="el-menu-vertical"
     @select="handleSelect">
      <el-menu-item v-for="(item, index) in items" :key="index" :index="index.toString()" @click="optionKey(item.pathName, index)">
        {{item.name}}
      </el-menu-item>
    </el-menu> -->
    <div class="user-menu">
      <div class="menu-item" v-for="(item, index) in items" :key="index">
        <div @click="optionKey(item.pathName, index)">{{item.name}}</div>
      </div>
    </div>
    
    <div class="item-container">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "userinfo",
  components: {

  },
  data() {
    return {
      activeIndex: 1,
      items: [
        {name: '个人资料', pathName: 'personal'},
        {name: '观看历史', pathName: 'history'},
        {name: '我的作品', pathName: 'upload'},
        {name: '我的关注', pathName: 'audience'},
        // {name: '我的兴趣', pathName: 'e'},
        {name: '消息中心', pathName: 'messages'},
      ],
    }
  },
  mounted() {

  },
  methods: {
    handleSelect(key, keyPath){
      this.activeIndex = key;
      console.log(key, keyPath);
    },
    optionKey(pathName, optionId){
      console.log(pathName, optionId);
      this.$router.push({name: pathName, query: optionId});
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
