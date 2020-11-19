<template>
	<view class="admin_idnex">
		<Adminheader></Adminheader>
		<Adminheaders></Adminheaders>
		<IndexContainer></IndexContainer>
		<Legalize></Legalize>
		<AdminInordes></AdminInordes>
		<Quotes></Quotes>
		<Recommend></Recommend>
		<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	import Adminheaders from '../admin_header/admin_headers.vue'
	import IndexContainer from './index_container/container.vue'
	import Legalize from './index_container/legalize.vue'
	import Quotes from './index_container/quotes.vue'
	import Recommend from './index_container/recommend.vue'
	import Jobfooter from '../../pages/job_detail/jobfooter/jobfooter.vue'
	import AdminInordes from './admin_inorders/admin_inorders.vue'
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
			IndexContainer,
			Legalize,
			Quotes,
			Recommend,
			Jobfooter,
			AdminInordes
		}
	}
</script>

<style lang="scss" scoped>
.admin_idnex{
	background: #f6f8f9;
}
.page-admin.ontainer{
	padding-top: 20px;
}
</style>
