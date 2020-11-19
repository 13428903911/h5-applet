<template>
	<view class="tabs">
		<view class="inner">
			<view class="cl">
				<view class="fl" v-for="(item,index) in tabs" :key='index'>
					<text :class="{active:index==num}" @click="tabbox(index)">{{item}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0,
				tabs:['全部','待签约','待预付','工作中','待结算','已完成']
			}
		},
		methods: {
			tabbox(index){
				this.num = index
				this.$emit("tabboxs",index)
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabs {
	    color: #9ca6ae;
		border-bottom: 1px solid #edf1f4;
		.inner {
		    overflow-x: auto;
		    overflow-y: hidden;
			.cl {
			    white-space: nowrap;
				.fl {
				    height: 44px;
				    line-height: 44px;
					cursor: pointer;
					padding-bottom: 1px;
					float: none;
					display: inline-block;
				}
				.fl:not(:last-child) {
				    margin-right: 20px;
				}
			}
		}
		.active{
			color: #008bf7;
		}
	}
</style>
