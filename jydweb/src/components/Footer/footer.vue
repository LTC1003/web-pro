<template>
  <div class="footer">
    {{viewData}}
  </div>
</template>

<script>
export default {
  name: 'footer',
  component:{},
  data() {
    return {
      viewData: '所有页面底部---信息介绍'
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>

<style scoped>
    .footer{
        background: #f23a93;
        font-size: 36px;
        color: #000;
    }
</style>
