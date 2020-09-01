<template>
  <div class='footer-info'>
    <div class="official" >
      <router-link target="_blank" to="/user-agreement"> 
        {{agreements.userAgreement}} 
      </router-link> |
      <router-link target="_blank" to="/privacy">
        {{agreements.privacy}} 
      </router-link> |
      <router-link target="_blank" to="/djcertified">
        {{agreements.djCertified}} 
      </router-link> |
      <div>{{agreements.businessTogether}}</div>
    </div>
    <div class="official">
      <div>{{archiving.years}}</div> |
      <div>{{archiving.filing}}</div> |
      <div>{{archiving.companyname}}</div> |
      <div>{{archiving.filingCode}}</div>
    </div>
    <div class="official">
      <div>{{interCertificate.itCode}}</div> |
      <div>{{interCertificate.servePhone}}</div> |
      <div>{{interCertificate.eportPhone}}</div>
      </div>
    <div class="official">
      <div>{{address.filingAddress}}</div> |
      <div>{{address.companyAddress}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-parts",
  components: {},
  data() { 
    return {
      agreements: {
        userAgreement: 'ToSee用户服务协议',
        privacy:' 隐私政策',
        djCertified:'主播认证条款',
        businessTogether:'商务合作'
      },
      archiving:{
        years: '2020 © ToSee',
        filing: '苏ICP备16016397号-3',
        companyname: '江苏精易达信息技术股份有限公司',
        filingCode: '苏B2-20170846',
      },
      interCertificate: {
        itCode: '网络文化许可证-苏网文-（2016）2282-264号',
        servePhone: '客户服务热线：400-992-2556',
        eportPhone: '违法和不良信息举报电话：400-140-2108'
      },
      address: {
        filingAddress: '苏公网安备 11000002002046号',
        companyAddress: '地址 : 江苏省南京市秦淮区新街口金鹰国际A座8F'
      },
      // certList:[
      //   {text: 'ToSee用户服务协议 | 隐私政策 | 主播认证条款 | 商务合作'},
      //   {text: '2020 © ToSee 丨 苏ICP备16016397号-3 丨 江苏精易达信息技术股份有限公司 丨 苏B2-20170846'},
      //   {text: '网络文化许可证-苏网文-（2016）2282-264号 丨 客户服务热线：400-992-2556 丨 违法和不良信息举报电话：400-140-2108'},
      //   {text: '苏公网安备 11000002002046号 | 地址 : 江苏省南京市秦淮区新街口金鹰国际A座8F'},
      // ],
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
