<template>
	<view class="btn-group">
		<span @click = "denglu()" data-ga-name="JobdetailSubmitBtnClick" class="btn btn-blue">投递职位</span> 
		<a @click = "denglu()" href="javascript:;" class="btn btn-default">免费发布类似职位</a></view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			denglu(){
				wx.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.btn-group {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 15px;
		background: #fff;
		margin: 0;
		.btn:not(:first-child) {
		    margin-top: 10px;
		}
		.btn {
		    display: inline-block;
		    width: 100%;
		    height: 50px;
		    line-height: 50px;
		    text-align: center;
		    border: none;
		    border-radius: 2px;
		    color: #fff;
		    cursor: pointer;
		    box-sizing: border-box;
		}
		.btn.btn-default {
		    border: 1px solid #008bf7;
		    color: #008bf7;
		    line-height: 48px;
		}
		
		.btn.btn-blue {
		    background: #008bf7;
		    color: #fff;
		}
	}
</style>
