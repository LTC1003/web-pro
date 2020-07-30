<template>
  <div class="pages">
    <HeaderParts> </HeaderParts>
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
    }
  },
  mounted() {

  },
  methods: {
   
  }
};
</script>

<style lang="scss">
  @import "./index.scss";
  .pages{
    font-size: 0.14rem;
    .page-contnet{
      background-color: #f1f2f6;
      min-height: 300px;
      padding: 20px 0;
    }
  }
</style>
