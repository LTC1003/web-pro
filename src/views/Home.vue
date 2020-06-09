<template>
  <div class="home" id="app">
    <HeaderParts></HeaderParts>
    <router-view></router-view>
    <FooterParts></FooterParts>
  </div>
</template>

<script>
import HeaderParts from "@/components/HeaderParts";
import FooterParts from "@/components/FooterParts";
export default {
  name: "home",
  components: {
    FooterParts,
    HeaderParts,
  },
  data() {
    return {
      text: '首页',
    }
  },
  mounted() {
  //  let vh = window.innerHeight;
  //  console.log(vh, 443)
  },
  methods: {
   
  }
};
</script>

<style lang="scss">
  @import "./common.scss";
  // .home{
  //   position: relative;
  // }
</style>
