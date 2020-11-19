<template>
	<view class="header">
		<view class="header_my">
			<view class="avatar fl">
				<a>
					<img src="/static/images/wz.jpg">
				</a>
			</view>
			<h3>您与雇主 云队友-shul的合作还满意吗？</h3>
			<view class="ziwei">关联职位：<span>APP ui设计</span></view>
			<el-rate
			style="margin-top: 10px;"
			  v-model="value"
			  show-text>
			</el-rate>
			<view style="margin-top: 10px;">
				请选择去评价等级
			</view>
		</view>
		<view class="content suggest-wrap">
			<span id="texty" class="text-span">{{remnant}}/1000</span> 
			<textarea name="workExperience" maxlength="1000" id="textarea" class="ipt-area" @input = "descInput" />
		</view> 
		<view class="footer">
			<button type="default">提交评价</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: null,
				 remnant:0
			}
		},
		methods: {
			descInput(e){
				this.remnant = e.detail.value.length
			 },
		}
	}
</script>

<style lang="scss" scoped>
.header{
	padding: 0px 20px;
	.header_my{
		text-align: center;
		.avatar {
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-pack: center;
		    justify-content: center;
		    -ms-flex-align: center;
		    align-items: center;
		    width: 60px;
		    height: 60px;
		    margin-right: 20px;
		    overflow: hidden;
		    border-radius: 60px;
		    border: 1px solid #fff;
		    box-sizing: border-box;
			margin: 60px 0px 20px 40%;
			 img {
			    max-width: 60px;
			    max-height: 60px;
			}
		}
		h3{font-size: 18px;}
		.ziwei{
			margin-top: 5px;
			span{
				color: #008bf7;
			}
		}
	}
	.content {
	    position: relative;
	    margin-top: 20px;
	    border: 1px solid #9ca6ae;
	    box-sizing: border-box;
	    border-radius: 2px;
	}
	.text-span {
	    position: absolute;
	    right: 10px;
	    top: 85%;
	    color: #969896;
	}
	.ipt-area {
	    display: block;
	    width: 100%;
	    height: 152px;
	    padding: 12px 20px;
	    line-height: 24px;
	    border: none;
	    box-sizing: border-box;
	    resize: vertical;
	}
	.footer{
		button{
			width: 100%;
			height: 40px;
			line-height: 40px;
			background: rgb(0, 139, 247);
			margin:30px 0;
			color: #FFFFFF;
		}
	}
}
</style>
