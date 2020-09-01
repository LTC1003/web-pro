<template>
  <div class="pages">
    <HeaderParts :typeList="videoTypeList"> </HeaderParts>
    <div class="page-contnet">
      <router-view ></router-view>
    </div>
    <FooterParts> </FooterParts>
  </div>
</template>

<script>
import HeaderParts from "@/components/HeaderParts"
import FooterParts from "@/components/FooterParts"
export default {
  name: "pages",
  components: {
    HeaderParts,
    FooterParts,
  },
  data() {
    return {
      // typeList: '', // 子组件变量
      videoTypeList: [], // 视频类型
      videoCategory: [], 
    }
  },
  mounted() {
    this.$api.findService.getVideoClassifyList({token:'',isTourist: 1}).then(
      (res) => {
        if(res.message === "操作成功"){
          this.videoTypeList = res.data.result;
        }
        // else if (res.code !== '10001') {
        //   console.log(err.data, "栏目类型获取失败")
        // }
      }
    )
  },
  methods: {
   
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
  .pages{
    font-size: 0.14rem;
    // display: flex;
    // flex-direction: column;
    .page-contnet{
      background-color: #f1f2f6;
      min-height: 500px;
      padding: 20px 0;
    }
  }
</style>
