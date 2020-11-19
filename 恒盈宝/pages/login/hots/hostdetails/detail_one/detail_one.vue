<template>
	<view>
		<Hostdetails @fatherMethod="fatherMethod"></Hostdetails>
		<Detaila :class="[hideing === 0 ? 'actineclass' : 'errorclass']"></Detaila>
		<Detailb :class="[hideing === 1 ? 'actineclass' : 'errorclass']"></Detailb>
		<Detailc :class="[hideing === 2 ? 'actineclass' : 'errorclass']"></Detailc>
		<Detaild :class="[hideing === 3 ? 'actineclass' : 'errorclass']"></Detaild>
		<Detailf :class="[hideing === 4 ? 'actineclass' : 'errorclass']"></Detailf>
	</view>
</template>

<script>
	import Hostdetails from '../hostdetails.vue'
	import Detaila from './detail_a/detail_a.vue'
	import Detailb from './detail_b/detail_b.vue'
	import Detailc from './detail_c/detail_c.vue'
	import Detaild from './detail_d/detail_d.vue'
	import Detailf from './detail_f/detail_f.vue'
	export default {
		data() {
			return {
				hideing:0,
			}
		},
		methods: {
			// 被子组件调用的方法
			fatherMethod(index){
				this.hideing = index	
			},
		},
		components:{
			Hostdetails,
			Detaila,
			Detailb,
			Detailc,
			Detaild,
			Detailf
		}
	}
</script>

<style lang="less" scoped>
	.actineclass{
		display: block;
	}
	.errorclass{
		display: none;
	}
</style>