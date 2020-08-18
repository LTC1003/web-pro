<template>
  <div class="historylist">
    <div class="history" v-for="(item, index) in datalist" :key="index">
      {{item}}
      <div class="sourcev">
        <div class="langtime">{{item.timeStr}}</div>
      </div>
      <div class="usercol">
        <div class="cardtitle">
          <div>{{item.title}}</div>
        </div>
        <div class="carduser">
          <div class="userole">{{item.role}}</div>
          <div class="usename">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'history-video',
    data() {
      return {
        text: 'historyVideo',
        datalist:[
          {name: 'name1', role: '身份1', title:'title1', timeStr: '20:19:12', sourceVal: 'source1'},
          {name: 'name2', role: '身份2', title:'title2', timeStr: '05:12:48', sourceVal: 'source2'},
          {name: 'name3', role: '身份3', title:'title3', timeStr: '10:09:57', sourceVal: 'source3'},
          {name: 'name4', role: '身份4', title:'title4', timeStr: '09:11:20', sourceVal: 'source4'},
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
