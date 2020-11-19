<template>
	<view>
		<Settings></Settings>
		<Adminheader></Adminheader>
		<view class="img_list">
			<img src="@/static/images/bank-list.png" width="100%"/>
		</view>
	</view>
</template>

<script>
	import Settings from '../settings.vue'
	import Adminheader from '../../admin/admin_header/admin_header'
	export default {
		data(){
			return{}
		},
		components:{Settings,Adminheader}
	}
</script>

<style lang="less" scoped>
	.img_list{
		padding:20px;
	}
</style>
