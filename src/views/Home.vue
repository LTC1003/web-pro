<template>
  <div class="home">
    <!-- <HeadCommon></HeadCommon> -->
    <div>
      <!-- <div v-for="(item, index) in navList" :key="item"
        @click="$router.push(item.route); 
        navIndex = index" 
        :class="{choose: navIndex == index}">
        <img :src="item.img" alt=""><p>{{item.name}}</p>
      </div> -->
      <div v-for="(item, index) in navList" :key="item.route" :name ="item.name"
        @click="$router.push(item.route); ">
        {{item.name}}
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      theme: "light",
      navList: [
        {name: '首页', img: require('@/assets/logo.png'), route: '/main-content'},
        {name: '直播', img: require('@/assets/logo.png'), route: '/lineplay'},
        {name: '视频', img: require('@/assets/logo.png'), route: '/Video'},
        {name: 'APP下载',img: require('@/assets/logo.png'), route: '/download-app'},
      ],
      // navIndex: 0,
    }
  },
};
</script>
