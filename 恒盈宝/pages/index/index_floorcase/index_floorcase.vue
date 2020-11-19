<template>
	<view class="floor-case">
		<view class="hd"><h2 class="title">高效企业的信任之选</h2></view>
		<IndexDetail @index_detail = "index_detail"></IndexDetail>
		<Floora :class="[hideing === 0 ? 'actineclass' : 'errorclass']"></Floora>
		<Floorb :class="[hideing === 1 ? 'actineclass' : 'errorclass']"></Floorb>
		<Floorc :class="[hideing === 2 ? 'actineclass' : 'errorclass']"></Floorc>
	</view>
</template>

<script>
	import IndexDetail from './index_detail/index_detail.vue'
	import Floora from './index_detail/floor_a/floor_a.vue'
	import Floorb from './index_detail/floor_b/floor_b.vue'
	import Floorc from './index_detail/floor_c/floor_c.vue'
	export default {
		data() {
			return {
				hideing:0
			}
		},
		methods: {
			// 被子组件调用的方法
			index_detail(index){
				this.hideing = index
			}
		},
		components:{
			IndexDetail,
			Floora,
			Floorb,
			Floorc
		}
		
	}
</script>

<style lang="scss" scoped>
.floor-case{
	margin-top: 50px;
	.hd {
	    text-align: center;
		.title {
			font-size: 20px;
			line-height: 30px;
			font-weight: 600;
			text-align: center;
		}
	}
	.actineclass{
		display: block;
	}
	.errorclass{
		display: none;
	}
}
</style>
