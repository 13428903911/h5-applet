<template>
	<view class="page-hd">
		<h2 class="title">{{header.name}}</h2>
		<view class="meta cl">
			<span class="fl"><em>所属领域</em>:{{header.position}}</span> <span class="fl"><em>雇主在线时间</em>：{{header.publisher}}</span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			header:{
				type:Object,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.page-hd {
		margin-bottom: 20px;
		padding: 0rpx 40rpx;
		.title {
		    font-size: 24px;
			font-weight: 700;
		}
		.meta {
		    margin-top: 10px;
		    line-height: 24px;
			span {
			    margin-right: 20px;
			    font-size: 14px;
				em {
				    font-weight: 700;
					font-style: normal;
				}
			}
		}
	}
</style>
