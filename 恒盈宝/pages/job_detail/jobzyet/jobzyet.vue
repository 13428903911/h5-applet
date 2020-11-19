<template>
	<view class="mod">
		<view class="hd cl"><h3 class="title">投递该职位需要回答的问题</h3></view>
		<view class="bd">
			<ul class="question">
				<li><em>问题1：</em>您是否有类似项目经验的工作，能否简单介绍一下？</li>
				<li><em>问题2：</em>您最擅长哪些工作技能？</li>
				<li><em>问题3：</em>您对项目或者职位描述是否有疑问？</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.mod:not(:first-child) {
		border-top: 1px solid #edf1f4;
	}
	.mod{
		line-height: 24px;
		padding: 20px 20px;
		.title {
		    font-size: 18px;
		    line-height: 28px;
		}
		.bd {
		    margin-top: 20px;
			.question em{
				font-style: normal;
				font-weight: 700;
			}
		}
	}
</style>
