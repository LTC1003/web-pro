<template>
  <div class="content">
   {{text}}
  </div>
</template>
<script>
export default {
  name: 'main-content',
  components: {
  },
  data () {
    return {
      text: 'main页面主题文件'
    }
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  @import 'index.scss';
</style>