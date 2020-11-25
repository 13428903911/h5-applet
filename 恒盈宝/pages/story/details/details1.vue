<template>
	<view>
		<Header></Header>
		<view class="detailsBox">
			<view class="detailsText">
				<h2 class="title">{{title}}</h2>
				<view class="title_date">
					{{nickname}}<span>|</span>{{create_time}}
				</view>
				<view class="details_main">
					
				</view>
			</view>
			<!-- 底部 -->
			<Jobfooter></Jobfooter>
		</view>
	</view>
	
</template>

<script>
	import Header from '@/pages/header/header.vue'
	import Jobfooter from '@/pages/job_detail/jobfooter/jobfooter.vue'
	export default {
		data() {
			return{
				title:"",
				nickname:"",
				create_time:"",
				content:"",
			}
		},
		components:{
			Header,
			Jobfooter
		},
		onLoad(id) {
			
		},
		mounted() {
			this.$http.post('/public/index.php/api/Index/getStoryInfo',{
				story_id:1
			}).then(res =>{
				console.log(res)
				this.title  = res.data.data.title
				this.nickname  = res.data.data.nickname
				this.create_time  = res.data.data.create_time
				this.content  = res.data.data.content
				document.getElementsByClassName("details_main")[0].innerHTML = this.content
			})
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .details_main img{
		width: 100%;
		height: 100%;
	}
	.detailsBox{
		padding:20px 15px;
		.detailsText{
			padding:30px 5px;
			.title{
				font-size: 24px;
				font-weight: bold;
			}
			.title_date{
				margin-top: 10px;
				color: #9ca6ae;
				text-align: center;
				span{
					padding:0 10px;
				}
			}
			.details_main{
				margin-top: 30px;
				font-size: 0px;
				img{
					width: 100%;
					height: 147px;
				}
				p{
					font-size: 16px;
					line-height: 2;
					word-wrap: break-word;
					margin: 32px 0;
					text-align: justify;
				}
				h1{
					font-size: 24px;
					text-align:center;
					margin-bottom: 20px;
				}
			}
		}
	}
</style>
