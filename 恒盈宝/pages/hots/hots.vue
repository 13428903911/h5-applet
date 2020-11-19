<template>
	<view class="hots">
		<Header></Header>
		<Hotsbanner></Hotsbanner>
		<Hostcenter></Hostcenter>
		<Detailsone></Detailsone>
		<Hostrz></Hostrz>
		<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Header from '@/pages/header/header.vue'
	import Hotsbanner from './hots_banner/hots_banner.vue'
	import Hostcenter from './host_center/host_center.vue'
	import Detailsone from './hostdetails/detail_one/detail_one.vue'
	import Hostrz from './host_rz/host_rz'
	import Jobfooter from '@/pages/job_detail/jobfooter/jobfooter.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			Header,
			Hotsbanner,
			Hostcenter,
			Hostrz,
			Detailsone,
			Jobfooter
		}
	}
</script>

<style lang="scss" scoped>
</style>
