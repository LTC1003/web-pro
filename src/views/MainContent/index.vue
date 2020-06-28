<template>
  <div class="main-warpper">
    <div class="warp_play">
      <!-- 页头组件 -->
      <!-- <HeaderParts id="apphead"></HeaderParts> -->
      <div class="media-play">
        <div class="player">
          <!-- <img src="../../assets/home/playimg.png" alt=""> -->
        </div>
        <!-- 活动推送 热播推荐-->
        <RecommendLive />
      </div>
    </div>
    <div class="theme">
      <!-- 直播列表模板组件 -->
      <div class="theme-type">
        <div class="type-title">
          <div class="type-item-title">
            <div class="title-icon"></div>
            <span>{{"热播"}}</span>
          </div>
          <div class="type-item-more">more<span class=" icon-more"> > </span></div>
        </div>
        <div class="type-cover">
          <div class="item-cover" v-for="val in 7" :key="val">
            <div class="cover"></div>
            <div class="cover-info">
              <div class="info-title">
                {{"type player item live titlt"}}
              </div>
              <div class="info-user">
                <div class="user-avatar">
                  <div class="avatar"></div><span>UserNames</span>
                </div>
                <div class="user-link">
                  <span class="icon-zan">▲ | ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      coverList: 5,
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