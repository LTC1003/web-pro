<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <router-link to="/">Home</router-link>  |
    <router-link to="/about">About</router-link>
    <!-- <router-view /> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  el: '#app',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
