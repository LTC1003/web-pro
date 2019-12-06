<template>
  <div class="video">
    {{content}}
    <router-view />
  </div>
</template>

<script>
    export default {
        name: 'video',
        components: {
        },
        data() {
            return {
              content: '视频类型播放区'
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
