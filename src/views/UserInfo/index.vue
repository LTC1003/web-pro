<template>
  <div class="userinfo"> 
    <div class="user-menu">
      <div class="menu-item" :class="[index == activeName ? 'isActive' : '']" 
        v-for="(item, index) in items" :key="index">
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
      activeName: 0,
      items: [
        {name: '个人资料', pathName: 'personal'},
        {name: '观看历史', pathName: 'history'},
        {name: '我的作品', pathName: 'upload'},
        {name: '我的关注', pathName: 'audience'},
        {name: '我的兴趣', pathName: 'myhobby'},
        {name: '消息中心', pathName: 'messages'},
      ],
    }
  },
  mounted() {

  },
  methods: {
    optionKey(pathName, optionId){
      console.log(pathName, optionId);
      this.activeName = optionId;
      this.$router.push({name: pathName});
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
