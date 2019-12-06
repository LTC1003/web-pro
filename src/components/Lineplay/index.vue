<template>
  <div class="lineplay">
    {{playcontent}}
    <router-view />
  </div>
</template>

<script>
    export default {
        name: 'lineplay',
        components: {
        },
        data() {
            return {
              playcontent: '直播页面'
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
  @import 'index.scss'
</style>
