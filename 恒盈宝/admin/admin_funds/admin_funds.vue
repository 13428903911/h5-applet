<template>
	<view>
		<Adminheader></Adminheader>
		<Adminheaders></Adminheaders>
		<Funds></Funds>
		<Fundsfrom></Fundsfrom>
		<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	import Adminheaders from '../admin_header/admin_headers.vue'
	import Jobfooter from '../../pages/job_detail/jobfooter/jobfooter.vue'
	import Funds from './funds.vue'
	import Fundsfrom from './fundds_from.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			Adminheader,
			Adminheaders,
			Jobfooter,
			Funds,
			Fundsfrom
		}
	}
</script>

<style lang="scss" scoped>

</style>
