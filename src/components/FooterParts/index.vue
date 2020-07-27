<template>
  <div class='footer-info'>
    <div class="official">
      <div v-for="certItem in certList" :key="certItem.text">
        {{certItem.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-parts",
  components: {},
  data() { 
    return {
      // hlepList: ["新人主播指引", "开播工具下载", "开播教程"],
      // navListRelation: ["关于视生活", "隐私政策", "用户服务协议", "建议与反馈","在线客服"],
      certList:[
        {text: 'ToSee用户服务协议 丨 隐私政策 丨 主播认证条款 丨 商务合作'},
        {text: '2020 © ToSee 丨 苏ICP备16016397号-3 丨 江苏精易达信息技术股份有限公司 丨 苏B2-20170846'},
        {text: '网络文化许可证-苏网文-（2016）2282-264号 丨 客户服务热线：400-992-2556 丨 违法和不良信息举报电话：400-140-2108'},
        {text: '苏公网安备 11000002002046号 | 地址 : 江苏省南京市秦淮区新街口金鹰国际A座8F'},
        ]
    }
  },
  mounted() {
    //初始化
  },
  methods: {

  },

};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
