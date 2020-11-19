<template>
	<view class="box box-legalize">
		<ul class="legalize">
			<li class="item cl">
				<div class="step fl">1</div> 
				<p class="name"><a target="_blank">完善简历</a></p> 
				<p class="st">完成度 17%</p>
			</li> 
			<li class="item cl">
				<div class="step fl">2</div> 
				<p class="name">入驻审核</p> 
				<p class="st">待审核</p>
			</li> 
			<li class="item cl">
				<div class="step fl">3</div> 
				<p class="name">专业审核</p> 
				<p class="st">待审核</p>
			</li>
		</ul>
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
.box {
    padding: 20px 15px;
	background: #fff;
	line-height: 24px;
	.legalize {
		.item {
		    margin: 20px 0;
			flex: 1;
			padding: 0 10px;
			color: #9ca6ae;
			.step {
			    width: 48px;
			    height: 48px;
			    margin-right: 20px;
			    background: #dde6ec;
			    border-radius: 48px;
			    font-family: Montserrat-Regular;
			    text-align: center;
			    line-height: 48px;
			    font-weight: 700;
			}
			.fl {
			    float: left;
			}
			.name {
			    font-weight: 700;
				a {
				    text-decoration: none;
				    color: #008bf7;
				}
			}
		}
	}
}
</style>
