<template>
  <div class="supplement">

    <el-container>
      <el-header class="supp-top" >{{supplement}}</el-header>
      <el-container class="main-warp">
        <el-aside width="260px" class="main-aside">
          <ul class="tabs-vertical">
            <li v-for="(tabItem, i) in supptabs" :key="i" @click="$router.push(tabItem.path)">
              {{tabItem.name}}
            </li>
          </ul>
        </el-aside>
        <el-main class="main-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>
<script>

  export default {
    name: '',
    components: {
    },
    data () {
      return {
        supplement: '辅助信息列表：隐私协议条款',
        supptabs: [
          {name: '关于视生活', path: '/supplementary/about'},
          {name: '隐私政策', path: '/supplementary/privacy'},
          {name: '用户服务协议', path: '/supplementary/user-agreement'},
          {name: '新人主播指引', path: '/supplementary/new-anchor-guidelines'},
          {name: '开播工具下载', path: '/supplementary/launch-tool-download'},
          {name: '开播教程', path: '/supplementary/launch-tutorial'},
        ]
      
      }
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import 'index.scss'
</style> 