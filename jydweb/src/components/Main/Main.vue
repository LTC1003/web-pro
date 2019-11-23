<template>
  <div class="main">
    {{viewData}}
  </div>
</template>

<script>
export default {
  name: 'main',
  props: {

  },
  component:{},
  data() {
    return {
      viewData: '页面主要内容'
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>

<style scoped>
    .main{
        background: #f23a93;
        font-size: 36px;
        color: #000;
    }
</style>
