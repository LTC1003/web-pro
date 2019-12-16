<template>
  <div class="content">
   <!-- {{text}} -->
    <div class="playpart">
      <!-- <img src="../../assets/icon-theme1" alt=""> -->
      <div class="playdemand">
        <div class="play-left">
        </div>
        <div class="play-right">
          <div v-for="imgItem in imgList" :key="imgItem.name" class="activityImg">
            <!-- <img src="@/assets/hotbar1.png" alt=""> -->
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-themes">
      <div class="play-themes">
        <div class="themes-help">
          <div>
            <p>辅助功能</p>
            <div class="accessibility">
              <div v-for="itemBility in bilityList" :key="itemBility.name">
                {{itemBility.name}}
              </div>
            </div>
          </div>
        </div>
        <div class="themes-Item" v-for="(itemThemes, index) in themesList" :key="itemThemes[index]">
          <div class="theme-title">
            <!-- <i class="icon-unit"></i> -->
            <img class="icon-unit" src="@/assets/icon-theme1.png" alt="">
            {{itemThemes.type}}
          </div>
          <div class="pieces-flex">
            <div class="pieces" v-for="(vPieces,key) in itemThemes.themeItem" :key="vPieces[key]">
              <div class="pieces-border">
                <div class="source">
                  <!-- {{vPieces.source}} -->
                  <img src="@/assets/themes-play.png" alt="">
                </div>
                <div class="author-card">
                  <div class="pieces-text">
                    {{vPieces.artwork}}
                  </div>
                  <div class="author">
                    <div class="author-info fl">
                      <img class="avatar" src="@/assets/logo.png" alt="">
                      {{vPieces.author}}
                    </div>
                    <div class="author-popularity fr">
                      <i></i>
                      <span>{{vPieces.popularity}}</span>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'main-content',
  components: {
  },
  data () {
    return {
      text: 'main页面主题文件',
      bilityList: [
        {name: '开播'},
        {name: '帮助'},
        {name: '反馈'},
        {name: '指定'}
      ],
      imgList:[
        {name: 'activity1',activityUrl:'@/assets/hotbar1.png'},
        {name: 'activity2',activityUrl:'@/assets/hotbar2.png'},
        {name: 'activity3',activityUrl:'@/assets/hotbar3.png'},
        {name: 'activity4',activityUrl:'@/assets/hotbar4.png'}
      ],
      themesList:[
        { 
          type: 'hot-play',
          themeItem: [
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '23W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '9999+'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '2967'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            }
          ]
        },
        {
          type: 'game-play',
          themeItem: [
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            }
          ]
        },
        {
          type: 'Medical-play',
          themeItem: [
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            }
          ]
        },
        {
          type: 'life-play',
          themeItem: [
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            },
            {
              source:'@/assets/hotbar3.png',
              artwork:'小仙女LOL皮城小女警5杀进行...',
              author:'我是小仙女呀',
              pic: 'assets/logo.png',
              popularity: '10.2W'
            }
          ]
        },
        
      ]
    }
  },
  mounted() {
    
  },
  methods: {

  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  @import 'index.scss';

</style>