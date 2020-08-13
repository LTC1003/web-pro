<template>
	<div class="lineplayPage">
		<div  v-for="(item, index) in dataList" :key="index">
			<ListColumn v-bind:cardItem="item" ></ListColumn>
		</div>
	</div>
</template>

<script>
import ListColumn from "@/components/ListColumn";
export default {
	name: 'lineplay',
	components: {
		ListColumn
	},
	data() {
		return {
			text: "直播页模块",
			dataList: [
			// { type: '直播间1', 
			// 	cardList: [
			// 		{ userCont: 'user1', docs: '123123', imgUrl: require('@/assets/img/userWork.png') },
			// 		{ userCont: 'user2', docs: '22222', imgUrl: "../../assets/img/bodyBGImg.png" },
			// 		{ userCont: 'user4', docs: '4444', imgUrl: require('@/assets/img/userWork.png') },
			// 	]
			// },
			// { type: '直播间2', 
			// 	cardList: [
			// 		{ userCont: 'user1', docs: '123123', imgUrl: require('@/assets/img/userWork.png') },
			// 		{ userCont: 'user2', docs: '22222', imgUrl: "../../assets/img/bodyBGImg.png" },
			// 		{ userCont: 'user4', docs: '4444', imgUrl: require('@/assets/img/userWork.png') },
			// 	]
			// },
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
	@import 'index.scss'
</style>
