<template>
	<view class="banner">
		<view class="page-section-spacing">
			<swiper class="swiper" 
				autoplay="true" 
				interval="5000" 
				duration="1500"	>
				<swiper-item v-for="(item , index) in homeSlide" :key="index">
					<image :src="item.imgUrl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homeSlide:[
					{
					    "id": "0001",
					    "imgUrl": "/static/images/banner1.png"
					  },{
					    "id": "0002",
					    "imgUrl": "/static/images/banner2.jpg"
					  },{
					    "id": "0003",
					    "imgUrl": "/static/images/banner3.jpg"
					  }
				]
			}
		},
		methods: {
			// getHomeSlideFunc() {
			// 	var _self = this;
			// 	uni.request({
			// 		url: '/static/mock/banner.json',
			// 		success: (res) => {
			// 			_self.homeSlide = res.data.data.swiperList
			// 		}
			// 	});
			// }
		},
		mounted(){
			// this.getHomeSlideFunc()
		}
		
	}
</script>

<style lang="scss" scoped>
	.banner{
		image{
			width: 100%;
			height: 150px;
		}
		.page-section-spacing{
			padding: 20px 0;
		}
	}
</style>
