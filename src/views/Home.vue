<template>
  <div class="home" id="home">
    <HeaderParts></HeaderParts>
    <!-- <router-view></router-view> -->
    <div class="sitewarp">
      <div class="title">ToSee</div>
      <div class="docs-text">move yuor mood</div>
      <div class="control-download">
        <div class="discriminate_code">
          <div>
            <div><div><div></div></div></div>
          </div>
        </div>
        <div class="btn-group">
          <div class="iosDown load-btn"></div>
          <div class="androidDown load-btn"></div>
        </div>
      </div>
    </div>
    <FooterParts></FooterParts>
  </div>
</template>

<script>
import HeaderParts from "@/components/HeaderParts";
import FooterParts from "@/components/FooterParts";
export default {
  name: "home",
  components: {
  FooterParts,
    HeaderParts,
  },
  data() {
    return {
      text: '首页',
    }
  },
  mounted() {
    const Height = this.findDimensions()
    const AppHeight = document.getElementById('app');
    AppHeight.style.height = Height + "px";
  },
  methods: {
    findDimensions() {
      var winHeight = 0;
      //获取窗口高度
      if (window.innerHeight)
      winHeight = window.innerHeight;
      else if ((document.body) && (document.body.clientHeight))
      winHeight = document.body.clientHeight;
      //通过深入Document内部对body进行检测，获取窗口大小
      if (document.documentElement  && document.documentElement.clientHeight)
      {
      winHeight = document.documentElement.clientHeight;
      }
      return winHeight;
    }
  }
};
</script>

<style lang="scss">
  @import "./common.scss";
  .sitewarp{
    width: 78%;
    margin: auto;
    flex: 1;
    margin-top: 2rem;
    .title{
      font-size:60px;
      font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:79px;
    }
    .docs-text{
      font-size:40px;
      font-family:MicrosoftYaHei;
      color:rgba(255,255,255,1);
      line-height:52px;
      margin-top: 10px ;
      margin-bottom: 50px;
    }
    .control-download{
      display: flex;
      .discriminate_code{
        width: 128px;
        height: 128px;
        margin-right: 20px;
        background: #333;
        div{
          margin: 2px;
          padding: 13px;
          border: 1px solid #fff;
          border-radius: 8px;
        }
      }
      .btn-group{        
        .load-btn{
          width: 180px;
          height: 60px;
          background: #fff;
          border-radius: 18px;
        }
        .iosDown{
          background: url("../assets/img/iosBtn.png");
          margin-bottom: 8px;
        }
        .androidDown{
          background: url("../assets/img/androidBtn.png") no-repeat;
        }
      }
     
    }
  }
</style>
