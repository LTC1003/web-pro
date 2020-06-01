<template>
  <div class="home">
    <HeaderParts />
    <div>{{text}}</div>
    <router-view></router-view>
    <FooterParts />
  </div>
</template>

<script>
import FooterParts from "@/components/FooterParts";
import HeaderParts from "@/components/HeaderParts";
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
  @import "common.scss";
</style>
