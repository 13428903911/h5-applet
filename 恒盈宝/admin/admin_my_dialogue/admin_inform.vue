<template>
	<view class="inform_nav">
		<uni-nav-bar >
			<template slot="default">
				<h2 style="font-size: 16px;margin-left:65px">系统通知</h2>
			</template>
		    <template slot="left">
		    	<view style="font-size: 30px;" @click="$router.back()"><</view>
		    </template>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data(){
			return{}
		},
		components:{uniNavBar}
	}
</script>

<style lang="less" scoped>
	.inform_nav{
		position: relative;
		top:-44px;
		z-index: 999;
	}
</style>
