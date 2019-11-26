<template>
  <div class="header">
    {{datastr}}
    {{count}}
    <router-view/>
  </div>
</template>

<script>
// import store from 'store'
console.log(333);
export default {
  name: 'header',
  component:{},
  data() {
    return {
      datastr: '所有页面的头部'  
    }
  },
  computed: {
    count: function() {
      return this.$store.state.count
    }
  },
  mounted() {
    console.log(this.$store, 'ssss')
  },
  methods: {
    
  },
}
</script>
