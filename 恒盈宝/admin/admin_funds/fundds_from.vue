<template>
	<view class="box box-bills">
		<view class="box-hd"><h2 class="title">交易账单</h2></view>
		<view class="filter">
			<view class="form-wrap">
				<view class="form-group form-group-select">
					<view style="width: 100%; margin: auto;margin-bottom: 20px;">
						 <view class="itemType"><label>账单类型</label></view>
						<xfl-select 
						:list="list"
						:showItemNum="6" 
						style="width: 100%"
						@change="billTpye"
						:isCanInput="false" 
					    :listShow="false"
						:clearable="false"
						:style_Container="listBoxStyle"
						:placeholder = "'选择账单类型'"
						:initValue="'选择账单类型'"
						>
						</xfl-select>
					</view>
		
				</view>	
			</view>
		</view>
		 <view class="block">
			 <view class="itemType"><label>起止时间</label></view>
			  <el-date-picker
			       v-model="value1"
				    @change="changeStatus"
					value-format="yyyy-MM-dd"
			       type="daterange"
			       range-separator="至"
			       start-placeholder="开始日期"
			       end-placeholder="结束日期">
			     </el-date-picker>
		  </view>
		  <span class="btn btn-blue fl" @tap="bill">查 询</span>
		  
		  <view class="header" v-for="(item,index) in billsList">
		  	<view class="header_cengter">
		  		<view class="left">
		  			<p>{{item.record_desc}}</p>
		  			<span class="ny">{{item.create_time}}</span>
		  		</view>
				<view class="billCenter">
					<view>{{item.record_type}}</view>
				</view>
		  		<view class="right">
		  			<p class="je">{{item.money}}</p>
		  		</view>
		  	</view>
		  </view>
		  
		  <view class="data-empty" v-if="fang"><img src="/static/images/order_g.png" alt=""> <p>您还没有交易账单</p></view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				fang:true,
				billsList:[],//交易账单数据
				value1: [],
				billData:{
					user_id:this.$store.state.userInfo.user_id,
					state:'',
					start_time: '',
					end_time: '',
					page:1,
					limit:10,
				},
				listBoxStyle: `height: 50px; font-size: 16px;`,
				list: [
					'全部',
					'入账',
					'提现',
					// {value: '选择账单类型', active: true},
					
				],
				
			}
		},
		mounted() {
			
		},
		methods: {
			billTpye(value){
				this.billData.state = value.index
				console.log(this.billData.state)
			},
			changeStatus(){
				this.billData.start_time = this.value1[0]
				this.billData.end_time = this.value1[1]
			},
			bill(){//查询交易账单
				this.$http.post('/public/index.php/api/User/getBillList',this.billData).then(res => {
					if(res.data.code == 1){
						this.fang = false
						this.billsList = res.data.data.row
						console.log(this.billsList)
					}
				})
			},
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
.itemType{
	font-size: 16px;
	font-weight: bold;
	padding-bottom:6px;
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


.header{
	
	margin-top: 30px;
	
	background: #FFFFFF;
	.header_cengter{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 20px;
		display: flex;
		border-bottom: 1px solid #edf1f4;
		border-top: 1px solid #edf1f4;
		.left{
			
			p{
				font-size: 16px;
			}
			.ny{
				font-size: 10px;
			}
		
		}
		.billCenter{
			font-size: 18px;
			font-weight: bold;
		}
		.right{
			.je{
				color: red;
				font-size: 23px;
				margin-top: -6px;
			}
		}
	}
}
</style>
