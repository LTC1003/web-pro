<template>
  <div class="home">
    <HeaderParts></HeaderParts>
    <!-- <router-view></router-view> -->
    <div class="sitewarp">
      <div class="title">ToSee</div>
      <div class="docs-text">move yuor mood</div>
      <div class="control-download">
        <div class="discriminate_code">
          <div>
            <div><div><div></div></div></div>
          </div>
        </div>
        <div class="btn-group">
          <div class="iosDown load-btn"></div>
          <div class="androidDown load-btn"></div>
        </div>
      </div>
    </div>
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
    const Height = this.findDimensions()
    const AppHeight = document.getElementById('app');
    AppHeight.style.height = Height + "px";
  },
  methods: {
    findDimensions() {
      var winHeight = 0;
      //获取窗口高度
      if (window.innerHeight)
      winHeight = window.innerHeight;
      else if ((document.body) && (document.body.clientHeight))
      winHeight = document.body.clientHeight;
      //通过深入Document内部对body进行检测，获取窗口大小
      if (document.documentElement  && document.documentElement.clientHeight)
      {
      winHeight = document.documentElement.clientHeight;
      }
      return winHeight;
    }
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
