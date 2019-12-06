<template>
  <div class="downapp">
    {{content}}
    <router-view />
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
