<template>
	<view>
		<Evaluateb @pingjias="pingjias"></Evaluateb>
		<Evaluatec :class="[hideing === 0 ? 'actineclass' : 'errorclass']"></Evaluatec>
		<Evaluated :class="[hideing === 1 ? 'actineclass' : 'errorclass']"></Evaluated>
	</view>
</template>

<script>
	import Evaluateb from './evaluate_b.vue'
	import Evaluatec from './evalutate_c.vue'
	import Evaluated from './evalutate_d.vue'
	export default {
		data() {
			return {
				hideing:0
			}
		},
		methods: {
			// 被子组件调用的方法
			pingjias(index){
				this.hideing = index
			}
		},
		components:{
			Evaluateb,
			Evaluatec,
			Evaluated
		}
	}
</script>

<style lang="scss" scoped>
.actineclass{
	display: block;
}
.errorclass{
	display: none;
}
</style>
