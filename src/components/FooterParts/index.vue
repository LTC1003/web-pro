<template>
  <div class='footer-info'>
    <div class="info-cooperation">
      <div class="relation">
        <div class="relationWB">
          <div class="icon iconWB">
            <img src="" alt="WB">
          </div>
          <div class="docs">
            <h3>新浪微博</h3>
            <div>视生活官网微博</div>
          </div>
        </div>
        <div class="relationGF">
          <div class="icon iconGF">
            <!-- <img src="" alt="GF"> -->
          </div>
          <div class="docs">
            <h3>官方网站</h3>
            <div>视生活官网网站</div>
          </div>
        </div>
      </div>
      <div class="ewcode">
        <div class="item-ewcode">
          <span class="demonstration">微信公众号</span>  
          <div class="ewcodeimg ewcodeimg-wechat">
            <!-- <img src="" alt="wxcode"> -->
          </div>
        </div>
        <div class="item-ewcode">
          <span class="demonstration">安卓版下载</span>  
          <div class="ewcodeimg ewcodeimg-wechat">
            <!-- <img src="" alt="wxcode"> -->
          </div>
        </div>
        <div class="item-ewcode">
          <span class="demonstration">苹果版下载</span>  
          <div class="ewcodeimg ewcodeimg-wechat">
            <!-- <img src="" alt="wxcode"> -->
          </div>
        </div>
      </div>
      <div class="Dj-help">
        <span>直播帮助</span>
        <div class="helpList" v-for="item in hlepList" :key="item">
          <a class="item-help" href="#">{{item}}</a>
        </div>
      </div>
    </div>
    <div class="info-explain">
      <div class="relation-nav">
        <div class="navlist" v-for="item in navListRelation" :key="item">
          <a href="#">{{item}}</a>
        </div>
      </div>
      <div class="certificate">
        <div v-for="certItem in certList" :key="certItem.text">
          {{certItem.text}}
        </div>
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
      text: 'footer main',
      hlepList: ["新人主播指引", "开播工具下载", "开播教程"],
      navListRelation: ["关于视生活", "隐私政策", "用户服务协议", "建议与反馈","在线客服"],
      certList:[
        {text: '主办单位: 江苏精易达信息技术股份有限公司'},
        {text: '江苏精易达信息技术 版权所有 苏ICP备17004241号-3苏网文（2017）5573-119号，增值业务许可证：B2-20180782 苏B2-20170478'},
        {text: '公安部网络违法犯罪举报网站 举报热线：12318 举报邮箱：service@qiaozhifu.com'},
        {text: 'Copyright © 江苏精易达信息技术 All Rights Reserved'},
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
