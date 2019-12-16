<template>
  <div class="downapp">
    <div class="main-warpper">
      <div class="warp-left">
        <div class="down-content">
          <div class="title">视生活APP</div>
          <div class="desc">一款会陪你聊天的直播APP</div>
          <div class="code-info">
            <div class="ios-regional">
              <div class="ios-code"></div>
              <p><i class="ios"></i>IOS 扫描下载</p>
              <button class="btn-ios"></button>
            </div>
            <div class="android-regional">
              <div class="andr-code"></div>
              <p><i class="andr"></i>Android 扫描下载</p>
              <button class="btn-andr"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="warp-right"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'download-app',
    components: {

    },
    data() {
      return {
        content: 'app下载'
      }
    },
    mounted() {

    },
    methods: {
      
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import "./index.scss";
</style>
