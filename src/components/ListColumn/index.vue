
<template>
  <div class="thmemList">
    <div class="thead">
      <div class="title">{{thmemList[0].title}}</div>
      <div class="btn"> 更多 <span>></span></div>
    </div>
    <div class="tbody">

      <div class="cardList">
        <div class="userCont">
          <img :src="itemImgsrc" alt="" srcset="">
        </div>
        <div class="userDocs">贷款和剧时间卡络磺钠方科技</div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "list_column",
  components: {
  },
  data() { 
    return {
      itemImgsrc: require('@/assets/img/userWork.png'),
      thmemList: [
        { title: '最新视频' },
        { title: '记录栏目' },
        { title: '剧情视频' },
        { title: '探路视频' },
      ] 
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
