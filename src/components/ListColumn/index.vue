
<template>
  <div class="thmemList" v-model="cardItem">
    <div class="thead">
      <div class="title">{{cardItem.cateName}}</div>
      <div class="btn"> 查看更多 <span>></span></div>
    </div>
    <div class="tbody">
      <div class="cardList" v-for="(item, index) in list.childVideoList" :key="index">
        <div class="userCont">
          <img :src="item.thumb" alt="" srcset="">
        </div>
        <div class="userDocs">
          <p> {{item.userName}} </p>
          <p> {{item.title}} </p>
          <!-- <p> {{item.docs}} </p>
          <p> {{item.userCont}} </p> -->
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: "list_column",
  components: {
  },
  props: [
    'cardItem'
  ],
  data() { 
    return {
      // itemImgsrc: require('@/assets/img/userWork.png'),
      cardData: function() {
        return this.$props['cardItem']
      }, 
      list: [],
    }
  },
  mounted() {
    // console.log(this.cardData(), 301);
   
    this.list = this.$props['cardItem'];
    console.log(this.list, 302);
  },
  methods: {
 
  },

};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
