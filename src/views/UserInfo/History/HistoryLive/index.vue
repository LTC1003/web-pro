<template>
  <div>
    {{text}}
    <!-- <div v-for="(item, index) in datalist" :key="index">
      {{item}}
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'history-live',
    data() {
      return {
        text: 'historyLive',
        datalist:[
          {name: 'nameA', title:'title1', sourceVal: 'Val'},
          {name: 'nameB', title:'title2', sourceVal: 'source1'},
          {name: 'nameC', title:'title3', sourceVal: 'source2'}
        ],
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>
<style lang="scss">

</style>
