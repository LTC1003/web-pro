<template>
  <div class="content">
    <div class="content-themes">
						<div class="accordion">
				<el-collapse v-model="activeNames" 			@change="handleChange" class="typeList">
					<el-collapse-item title="综合" name="1"
					:header-cell-style="{
						'color': '#fff',
  					'background-color': '#3d3d3d'
					}">
						<ul class="combinedList">
							<li v-for="(combTxt, i) in combinedList" :key="i">
								<a href="#">{{combTxt.text}}</a>
							</li>
						</ul>
					</el-collapse-item>
					<el-collapse-item title="直播" name="2">
						<div class="tag-type" v-for="tag in tagList" :key="tag">{{tag}}</div>
					</el-collapse-item>
					<el-collapse-item title="小视频" name="3">
						<div class="tag-type" v-for="tag in tagList" :key="tag">{{tag}}</div>
					</el-collapse-item>
				</el-collapse>
				<div class="accordion-bottom" >
					 <el-row class="group-btn">
					 	<el-button type="warning" round>app应用</el-button>
					 	<el-button type="warning" round>我要开播</el-button>
					 </el-row>
					 <div class="info-link-bottom">
						 <a href="">直播指导</a>
						 <a href="">客户支持</a>
						 <a href="">12318举报</a>
					 </div>
				</div>
			</div>
      <div class="play-themes">
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
                    <img class="avatar" src="@/assets/applogo.png" alt="">
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
    name: 'short-video',
    components: {

    },
    data() {
      return {
        activeNames: ['1'],
				combinedList: [
					{text: '《驾驶俱乐部》2020年停服 全游戏...'},
					{text: '《驾驶俱乐部》2020年停服 全游戏...'},
					{text: '《驾驶俱乐部》2020年停服 全游戏...'},
					{text: '《驾驶俱乐部》2020年停服 全游戏...'}
				],
				tagList: [
					'热播', '医疗','娱乐','竞技','教育','直播'
				],
				themesList:[
					{ 
						type: '直播推荐',
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
								popularity: '10.2W'
							}
						]
					},
					{
						type: '全部直播',
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
								popularity: '10.2W'
							},
							{
								source:'@/assets/hotbar3.png',
								artwork:'小仙女LOL皮城小女警5杀进行...',
								author:'我是小仙女呀',
								pic: 'assets/logo.png',
								popularity: '10.2W'
							},{
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
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import "./index.scss";
</style>
