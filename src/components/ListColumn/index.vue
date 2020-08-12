
<template>
  <div class="thmemList" id="cardItem">
    <!-- <div class="thead">
      <div class="title">{{videoData.cateName}}</div>
      <div class="btn"> 查看更多 <span>></span></div>
    </div>
    <div class="tbody">
      <div class="cardList" v-for="(item, index) in childVideoList" :key="index">
        <div class="userCont">
          <img :src="item.thumb" alt="" srcset="">
        </div>
        <div class="userDocs">
          <p> {{item.userName}} </p>
          <p> {{item.title}} </p>
          <p> {{item.docs}} </p>
          <p> {{item.userCont}} </p>
        </div>
      </div>
    </div> -->
    <div v-for="(item, index) in videoData.childList" :key="index">
      <div class="thead">
        <div class="title">{{item.cateName}}</div>
        <div class="btn"> 查看更多<span> > </span></div>
      </div>
      <div class="tbody">
        <div class="cardList" v-for="(item, index) in item.childVideoList" :key="index">
          <div class="userCont">
            <img :src="item.thumb" alt="" srcset="">
          </div>
          <div class="userDocs">
            <p> {{item.userName}} </p>
            <p> {{item.title}} </p>
          </div>
        </div>
        <div v-if="!item.childVideoList">{{'空空如也>>>>...'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list_column",
  props: ['cardItem'],
  components: {
  },
  data() { 
    return {
      itemImgsrc: require('@/assets/img/userWork.png'),
      // childVideoList: '',
      // childList: '',
      jihe: 1,
      videoData: '',
    }
  },
  mounted() {
    console.log(this.$props['cardItem'], 302);
    this.videoData = this.$props['cardItem'];
    if(this.videoData.length === 1){
      this.jihe = 0;
      this.videoData.childList
    }
  },
  methods: {

  },
  watch: {
    cardItem(n,o){
      console.log(n, 993);
      this.videoData = n;
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
