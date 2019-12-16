<template>
  <div class="short">
    {{content}}
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'lineplay-details',
    components: {
      
    },
    data() {
      return {
        content: '详情直播放区'
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
