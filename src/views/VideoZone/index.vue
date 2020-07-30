<template>
  <div >
    <div class="video-zone">
      <div  v-for="(item, index) in dataList" :key="index">
        <ListColumn v-bind:cardItem="item" ></ListColumn>
      </div>
    </div>
  </div>
</template>
<script>
import ListColumn from "../../components/ListColumn"
// import RecommendLive from "../../components/RecommendLive"
export default {
  // name: 'video-zone',
  components: {
    ListColumn,
    // RecommendLive,
  },
  data () {
    return {
      // text: '视频专区',
      cardItem: '',
      dataList: [
        { type: '记录栏目', 
          cardList: [
            { userCont: 'user1', docs: '123123', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user2', docs: '22222', imgUrl: "../../assets/img/bodyBGImg.png" },
            { userCont: 'user3', docs: '3333', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user4', docs: '4444', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user4', docs: '4444', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user4', docs: '4444', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user4', docs: '4444', imgUrl: require('@/assets/img/userWork.png') },
          ]
        },
        { type: '剧情视频', 
          cardList: [
            { userCont: 'user1', docs: '123123', imgUrl: require('@/assets/img/bodyBGImg.png') },
            { userCont: 'user2', docs: '22222', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user3', docs: '3333', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user4', docs: '4444', imgUrl: require('@/assets/img/userWork.png') },
          ]
        },
        { type: '探路视频', 
          cardList: [
            { userCont: 'user1', docs: '123123', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user2', docs: '22222', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user3', docs: '3333', imgUrl: require('@/assets/img/userWork.png') },
            { userCont: 'user4', docs: '4444', imgUrl: require('@/assets/img/bodyBGImg.png')},
          ]
        },
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
  @import './index.scss';
</style>