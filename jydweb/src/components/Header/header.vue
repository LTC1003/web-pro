<template>
  <div class="header">
    <div class="nav">
      <div><img src="/src/asset/observing.png" alt="logo"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import store from 'store'
export default {
  name: 'header',
  component:{},
  data() {
    return {
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
<style lang="scss" scoped>
  @import 'Header';
</style>
