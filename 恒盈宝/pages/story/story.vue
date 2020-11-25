<template>
	<view class="storyBox">
		<Header></Header>
		<view class="header">
			<h2 class="text">金斗云故事</h2>
		</view>
		<view class="main">
			<view class="main_box" v-for="(item,index) in toryList" :key="item.id">	
					<view class="img_text">
						<img :src="item.head_image"/>
					</view>
					<view class="text" @click="title(item.id)">
						<h3>{{item.title}}</h3>
						<p>
							{{item.digest}}
						 </p>
						 <p>{{item.create_time}}</p>
					</view>
			</view>
		</view>
			<!-- 底部 -->
			<Jobfooter></Jobfooter>
	</view>
</template>

<script>
	import Header from '@/pages/header/header.vue'
	import Jobfooter from '@/pages/job_detail/jobfooter/jobfooter.vue'
	export default {
		data() {
			return{
				toryList:[],
			}
		},
		methods:{
			getStory(){
				this.$http.post('/public/index.php/api/Index/getStoryList',{
					page:1,
					limit:2,
				}).then(res =>{
					this.toryList  = res.data.data.row
				})
			},
			title(id){
				uni.reLaunch({url: '/pages/story/details/details1?id='+id})	
			}
		},
		components:{
			Header,
			Jobfooter
		},
		mounted(){
			this.getStory()
		}
	}
</script>

<style lang="scss" scoped>
	.storyBox{
		background-color: #F6F8F9;
		padding: 0 15px;
		.header{
			// padding: 0 20px;
			.text{
				font-size: 24px;
				font-weight: bold;
				padding: 20px 0 10px 0;
			}
		}
		.main{
			.main_box{
				margin-top: 20px;
				background-color: #FFFFFF;
					.img_text{
						img{
							padding-top:5px;
							width: 100%;
							height: 147px;
							margin: auto;
						}
					}
					.text{
						padding:20px;
						h3{
							font-size: 16px;
							font-weight: bold;
						}
						p{
							
							max-height: 72px;
							margin-top: 20px;
							color: #9ca6ae;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
							font-size: 16px;
							
						}
							
					}

			}
			
		}
	}
</style>