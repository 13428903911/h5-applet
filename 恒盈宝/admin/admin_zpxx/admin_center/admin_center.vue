<template>
	<view class="tabs">
		<view class="fl fg" v-for="(item,index) in htxx" :key='index' :class="{active:index==num}" @click="admcen(index)">
			<text>{{item}}</text>
		</view>
		<view style="clear: both;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:1,
				htxx:['订单信息','合同信息']
			}
		},
		methods: {
			admcen(index){
				this.num = index
				this.$emit("admcenter",index)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.tabs {
    position: absolute;
	top: 110px;
	background: #fff;
	border: none;
	color: #9ca6ae;
	width: 100%;
	.fl.cur {
	    background: #008bf7;
	    color: #fff;
	}
	.fl {
	    width: 50%;
	    text-align: center;
	    font-weight: 700;
	    cursor: pointer;
		height: 40px;
		line-height: 40px;
	}
	.fg{
		float: left;
	}
}
.active{
	background: #008bf7;
	color: #fff;
}
</style>
