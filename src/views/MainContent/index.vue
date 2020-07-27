<template>
  <div >
    <HeaderParts></HeaderParts>
    <div class="video-zone">
      <ListColumn />
    </div>
    <FooterParts></FooterParts>
  </div>
</template>
<script>
import HeaderParts from "../../components/HeaderParts"
import FooterParts from "@/components/FooterParts"
import ListColumn from "../../components/ListColumn"
import RecommendLive from "../../components/RecommendLive"
export default {
  // name: 'video-zone',
  name: 'main-content',
  components: {
    HeaderParts,
    FooterParts,
    ListColumn,
    RecommendLive
  },
  data () {
    return {
      text: '视频专区',
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang="scss">
  @import './index.scss';
</style>