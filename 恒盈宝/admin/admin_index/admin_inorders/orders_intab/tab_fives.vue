<template>
	<view class="data-empty">
		<img src="/static/images/order_e.png"> 
		<p>您还没有待结算的合同订单</p>
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
.data-empty {
    padding: 100px 0;
    text-align: center;
	img {
	    width: 120px;
	}
	p {
	    margin-top: 10px;
	}
}
</style>
