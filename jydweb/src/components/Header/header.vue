<template>
  <div class="header">
    {{datastr}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {

  },
  component:{},
  data() {
    return {
      datastr: '所有页面的头部'  
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>

<style scoped>
    .header{
        background: #399;
        font-size: 36px;
        color: #000;
    }
</style>
