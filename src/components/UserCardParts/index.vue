
<template>
  <div class="thmemList" v-model="cardItem">
    {{text}}
  </div>
</template>

<script>
export default {
  name: "user-card-parts",
  components: { },
  props: [
    'cardItem'
  ],
  data() { 
    return {
      text: 'user卡片组件',
      cardData: function() {
        return this.$props['cardItem']
      }, 
    }
  },
  mounted() {
    console.log(this.cardData(), 301);
  },
  methods: {
 
  },

};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
