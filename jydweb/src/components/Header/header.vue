<template>
  <div class="header">
    <div class="nav">
      <div class="logo">
        <img src="../../assets/observing-log.png" alt="logo">
      </div>
        <!-- <div>{{textCard}}</div> -->
        <!-- <div v-for="value in ListData" :key="value">
          <div><a>{{value.text}}</a></div>
        </div> -->
      <div class="navList">
        <Menu mode="horizontal" :theme="theme" active-name="1" style="display:inline-block; background: none; vertical-align: middle;">
          <MenuItem name="1">
            首页
          </MenuItem>
          <MenuItem name="2">
            直播
          </MenuItem>
          <MenuItem name="3">
            视频
          </MenuItem>
          <MenuItem name="4">
            App下载   
          </MenuItem>
        </Menu>
        <div class="navItem">
          <Input search clearable style="width: 200px"/>
          <div>
           <Icon type="md-star-outline" />
            关注
          </div>
          <div>
            <Icon type="md-person" />
            登录 | 注册
          </div>
        </div>
      </div>
    </div>  
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Header',
  component:{},
  data() {
    return {
      theme: "light",
      textCard: "导航列表",
      ListData: [
        {text: "首页"},
        {text: "直播"},
        {text: "视频"},
        {text: "下载App"}
      ]
    }
  },
  computed: {
    count: function() {
      return this.$store.state.count
    }
  },
  mounted() {
    // console.log(this.$store, 'ssss');
    this.funcTest();
    // this.data;
    console.log(this.funcTest,this.ListData, 12332);
  },
  methods: {
    funcTest: function () {
     console.log(this.ListData, 'sdsd');
    }
  },
}
</script>
<style lang="scss" scoped>
  @import 'Header';
</style>
