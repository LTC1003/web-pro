<template>
  <div class="main-warpper">
    <div class="warp_play">
      <HeaderParts id="apphead"></HeaderParts>
      <div class="media-play">
        <div class="player">
          <!-- <img src="../../assets/home/playimg.png" alt=""> -->
        </div>
        <RecommendLive />
      </div>
    </div>
    <div class="theme">
      <div class="theme-type">
        <div class="type-host"></div>
      </div>
      <div class="theme-type">
        <div class="thrme-news">新闻</div>
      </div>
    </div>
    {{text}}
  </div>
</template>
<script>
import HeaderParts from "../../components/HeaderParts"
import RecommendLive from "../../components/RecommendLive"
export default {
  name: 'main-content',
  components: {
    HeaderParts,
    RecommendLive
  },
  data () {
    return {
      text: '主页面板块',
      drawer: false,

    }
  },
  mounted() {
    
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
      .then(_ => {
        done();
      })
      .catch(_ => {});
    }
  }
}
</script>
<style lang="scss">
  @import './index.scss';
</style>