<template>
  <div class="main-warpper">
    
    <div class="warp_play">
      <HeaderParts id="apphead"></HeaderParts>
      <div class="media-play">
        <div class="player">
          <!-- <img src="../../assets/home/playimg.png" alt=""> -->
        </div>
        <div class="activity">
          <div class="item-order">1</div>
          <div class="item-order">2</div>
          <div class="item-order">3</div>
          <div class="item-order">4</div>
        </div>
      </div>
    </div>
    <div class="theme">
      <div class="theme-host">热门直播</div>
      新闻


      <div class="type1">
        <div class="type2">
          <div class="type4"></div>  
        </div>  
        <div class="type3"></div>  
      </div> 
    </div>
    {{text}}
  </div>
</template>
<script>
import HeaderParts from "../../components/HeaderParts"
export default {
  name: 'main-content',
  components: {
    HeaderParts
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