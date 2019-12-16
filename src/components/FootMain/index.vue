<template>
	<div class="footer">
		<div class="footer-link">
			<div class="link-child">
				<div class="partner">
					<div>
						<img src="@/assets/weibo.png" alt="">
					</div>
					<div class="partner-list">
						<h3>新浪微博</h3>
						<p>视生活官方微博</p>
					</div>
				</div>
				<div class="partner">
					<div>
						<img src="@/assets/applogo.png" alt="">
					</div>
					<div class="partner-list">
						<h3>官方网站</h3>
						<p>视生活官方网站</p>
					</div>
				</div>
			</div>
			<el-divider direction="vertical" class="vertical-line">
			</el-divider>
			<div class="link-child">
				<div class="security">
					<div class="security-group" v-for="ewmItem in securityList" :key="ewmItem.title">
						<p>{{ewmItem.title}}</p>
						<div>
							<img src="@/assets/wechat.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<el-divider direction="vertical" class="vertical-line">
			</el-divider>
			<div class="link-child">
				<ul class="help-list">
					<li v-for="helpTab in helpList" :key="helpTab.name">
						<a @click="routeLink(helpTab.path)">{{helpTab.name}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="copyright">
			<div class="lick-copyinfo">
				<a @click="routeLink('about')">关于视生活</a>
				<el-divider direction="vertical"></el-divider>
				<a @click="routeLink('privacy')">隐私政策</a>
				<el-divider direction="vertical"></el-divider>
				<a @click="routeLink('user-agreement')">用户服务协议</a>
				<el-divider direction="vertical"></el-divider>
				<a @click="routeLink('/')">建议与反馈</a>
				<el-divider direction="vertical"></el-divider>
				<a @click="routeLink('/')">在线客服</a>
			</div>
			<div class="copyinfo">
				<p>
					主办单位: 江苏精易达信息技术股份有限公司 客服热线： 025-85565201
				</p>
				<p>
					江苏精易达信息技术 版权所有 苏ICP备17004241号-3苏网文（2017）5573-119号，增值业务许可证：B2-20180782 苏B2-20170478
				</p>
				<p>
					江公安部网络违法犯罪举报网站 举报热线：12318 举报邮箱：service@qiaozhifu.com
				</p>
				<p>
				  Copyright © 江苏精易达信息技术 All Rights Reserved
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'foot-main',
		components: {

		},
		data() {
			return {
				securityList: [
					{
						title: '微信公众号',
						ewmUrl: '@/assets/ewm1.png'
					},
					{
						title: '安卓版下载',
						ewmUrl: '@/assets/ewm1.png'
					},
					{
						title: '苹果版下载',
						ewmUrl: '@/assets/ewm1.png'
					}
				],
				helpList: [
					{name: '主播帮助', path: '/'},
					{name: '新人主播指引', path: 'new-anchor-guidelines'},
					{name: '开播工具下载', path: '/launch-tool-download'},
					{name: '开播教程', path: '/launch-tutorial'}
				]
			}
		},
		mounted() {

		},
		methods: {
			routeLink(childName){
				console.log(childName, 'sssssss');
				this.$router.push({name: childName});
			}
		}
	}
</script>
<style lang="scss" type="text/scss" scoped>
	@import '@/components/FootMain';
</style>
