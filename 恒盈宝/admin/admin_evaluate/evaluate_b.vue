<template>
	<view>
		<view class="discounts_box">
			<view class="my_coupon">
				<view class="inne">
					<view class="titel" v-for="(item,index) in titel" :key='index'  :class="{active:index==num}" @click="pingjia(index)">{{item}}</view>
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
				titel:['我收到的评价','我发出的评价']
			}
		},
		methods: {
			pingjia(index){
				this.num = index
				this.$emit("pingjias",index)
			}
		}
	}
</script>

<style lang="scss" scoped>
.my_coupon{
	border-bottom: 1px solid #edf1f4;
	color: #9ca6ae;
	margin-bottom: -1px;
	overflow-x: auto;
	overflow-y: hidden;
	.inne{
		display: flex;
		.titel{
			margin-right: 20px;
			padding: 30px 0px 10px 0;
			
		}
	}
	.active{
		color: #008bf7;
	}
}
</style>
