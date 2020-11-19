<template>
	<view class="orders">
		<Adminheader></Adminheader>
		<Adminheaders></Adminheaders>
		<Orderstab></Orderstab>
		<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	import Adminheaders from '../admin_header/admin_headers.vue'
	import Orderstab from './orders_tab/orders_tab.vue'
	import Jobfooter from '../../pages/job_detail/jobfooter/jobfooter.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			Adminheader,
			Jobfooter,
			Orderstab,
			Adminheaders
		}
	}
</script>

<style>

</style>
