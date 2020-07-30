
<template>
  <div class="thmemList" v-model="cardItem">
    <div class="thead">
      <div class="title">{{cardItem.type}}</div>
      <div class="btn"> 查看更多 <span>></span></div>
    </div>
    <div class="tbody">
      <div class="cardList" v-for="(item, index) in cardItem.cardList" :key="index">
        <div class="userCont">
          <img :src="item.imgUrl" alt="" srcset="">
        </div>
        <div class="userDocs">
          <p> {{item.docs}} </p>
          <p> {{item.userCont}} </p>
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
    }
  },
  mounted() {
    // console.log(this.cardData(), 301);
    // console.log(this.$props['cardItem'], 302);
  },
  methods: {
 
  },

};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
