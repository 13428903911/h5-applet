<template>
	<view class="harder">
		<Adminheader></Adminheader>
		<view class="container">
			<view class="page-hd">
				<h2 class="title">{{delestop}}</h2>
				<p>投递的职位：<a>{{delestop}}</a></p>
			</view>
		</view>
		<Admintab @deletes = "deletes" :apply_id="apply_id"></Admintab>
	</view>
</template>

<script>
	import Adminheader from '../admin_header/admin_header.vue'
	import Admintab from './admin_center/admin_tab.vue'
	export default {
		data() {
			return {
				delestop:"",
				apply_id:''
			}
		},
		onLoad(option) {
			this.apply_id = option.id
		},
		methods: {
			// diel(){
			// 	wx.navigateTo({
			// 		url:'/pages/job_detail/job_detail?id='+this.apply_id
			// 	})
			// },
			deletes(deletes){
				this.delestop = deletes 
			}
		},
		components:{
			Adminheader,
			Admintab
		},
		computed:{
			
		},
		
	}
</script>

<style lang="scss" scoped>
.harder{
	position: relative;
}
.container{
	padding: 20px 15px 80px 15px;
	background: #f6f8f9;
	.page-hd {
	    line-height: 34px;
		.title {
		    font-size: 24px;
			font-weight: 700;
		}
		p {
		    margin-top: 10px;
		    line-height: 24px;
			a {
			    color: #008bf7;
			}
		}
	}
}
</style>
