<template>
	<view class="box box-bills">
		<view class="box-hd"><h2 class="title">交易账单</h2></view>
		<view class="filter">
			<view class="form-wrap">
				<view class="form-group form-group-select">
					<view style="width: 100%; margin: auto;margin-bottom: 20px;">
						<xfl-select 
						:list="list"
						:showItemNum="6" 
						:isCanInput="false" 
					    :listShow="false"
						:clearable="false"
						:style_Container="listBoxStyle"
						:placeholder = "'选择账单类型'"
						:initValue="'选择账单类型'"
						>
						</xfl-select>
					</view>
					<view style="width: 100%; margin: auto;margin-bottom: 20px;">
						<xfl-select 
						:list="lists"
						:showItemNum="5" 
						:isCanInput="false" 
					    :listShow="false"
						:clearable="false"
						:style_Container="listBoxStyle"
						:placeholder = "'选择账单状态'"
						:initValue="'选择账单状态'"
						>
						</xfl-select>
					</view>
				</view>	
			</view>
		</view>
		 <view class="block">
		    <el-date-picker
		      v-model="value1"
		      type="datetimerange"
		      range-separator="至"
		      start-placeholder="开始日期"
		      end-placeholder="结束日期"
			  >
		    </el-date-picker>
		  </view>
		  <span class="btn btn-blue fl">查 询</span>
		  <view class="data-empty"><img src="/static/images/order_g.png" alt=""> <p>您还没有交易账单</p></view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				listBoxStyle: `height: 50px; font-size: 16px;`,
				list: [
					{value: '选择账单类型', active: true},
					'入账',
					'提现',
					'付款',
					'退款'
				],
				lists: [
					{value: '选择账单状态', active: true},
					'待确认',
					'已完成',
					'已驳回',
					'处理中'
				],
				 value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
			}
		},
		methods: {
			visibleChange(isShow){ // 列表框的显示隐藏事件
				console.log('isShow::', isShow);
			},
			change({newVal, oldVal, index, orignItem}){ 
				console.log(newVal, oldVal, index, orignItem);
			},
			open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				console.log(e);
			}
			
		}
	}
</script>
 
<style lang="scss">
.box{
	padding: 20px 15px;
	.box-hd {
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    -ms-flex-align: end;
	    align-items: flex-end;
		line-height: 28px;
		.title {
		    font-size: 18px;
			font-weight: 700;
		}
	}
	.filter{
		.form-wrap{
			margin: 0;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-flow: row wrap;
			flex-flow: row wrap;
			-ms-flex-pack: justify;
			justify-content: space-between;
			.form-group {
			    width: 100%;
			    margin: 10px 0;
				display: flex;
			}
		}
	}
}
.show-box .list-container .popper__arrow{
	left: 50%!important;
}
.show-box{
	border-radius:0px;
	    width: 90%;
}

.show-box.active[data-v-64567a38] {
    border-color: #CCCCCC!important;
}
.item.active:nth-child(1){
    color: #409eff;
    font-weight: 500;
    background-color: #f5f7fa;
}
/deep/ .el-date-editor--datetimerange.el-input__inner {
    width: 100%!important;
}
/deep/ .el-picker-panel{
	left: 0px!important;
	width: 100%!important;
}
/deep/ .el-date-range-picker.el-picker-panel__body {
    min-width: 100%!important;
}
/deep/ .el-date-range-picker {
    width: 100%!important;
}
.btn {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    box-sizing: border-box;
	padding: 0 24px;
	width: 100%;
	margin: 20px 0;
}
.btn.btn-blue {
    background: #008bf7;
    color: #fff;
}
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
