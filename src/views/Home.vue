<template>
  <div class="home">
    <!-- <HeaderParts></HeaderParts> -->
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
    HeaderParts
  },
  data() {
    return {
      text: '首页'
    }
  },
  mounted() {

  },
  methods: {
   
  }
};
</script>

<style lang="scss">
  @import "./common.scss";
</style>
