<template>
	<view>
		<Header></Header>
		<IndexBanner></IndexBanner>
		<IndexCategory></IndexCategory>
		<IdnexIntro></IdnexIntro>
		<IndexFloorcase></IndexFloorcase>
		<IndexFloorstep></IndexFloorstep>
		<IndexFloorcomment></IndexFloorcomment>
		<IndexFloorcustomer></IndexFloorcustomer>
		<IndexContainer></IndexContainer>
		<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Header from '@/pages/header/header.vue'
	import IndexBanner from './index_banner/index_banner.vue'
	import IndexCategory from './index_category/index_category.vue'
	import IdnexIntro from './idnex_intro/idnex_intro.vue'
	import IndexFloorcase from './index_floorcase/index_floorcase.vue'
	import IndexFloorstep from './index_floorstep/index_floorstep.vue'
	import IndexFloorcomment from './index_floorcomment/index_floorcomment.vue'
	import IndexFloorcustomer from './index_floorcustomer/index_floorcustomer.vue'
	import IndexContainer from './index_container/index_container.vue'
	import Jobfooter from '../job_detail/jobfooter/jobfooter.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
		
		},
		components:{
			Header,
			IndexBanner,
			IndexCategory,
			IdnexIntro,
			IndexFloorcase,
			IndexFloorstep,
			IndexFloorcomment,
			IndexFloorcustomer,
			IndexContainer,
			Jobfooter
		}
	}
</script>

<style lang="scss" scoped> 

</style>
