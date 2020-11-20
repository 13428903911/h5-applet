<template>
<view>
	<view class="box box-quotes">
		<view class="boxs">
			<view class="box-hd">
				<h2 class="title">职位管理</h2> 
			</view>
			<view class="box-bd">
				<view class="data-empty" v-if="fl == false">
					<img src="/static/images/jianli_a.png"> 
					<p>您还没有投递过的职位</p>
				</view>
				<view class="">
					<view class="item" v-for="(item,index) in management" :key="index">
						<view class="info">
							<p class="title">
								<a>{{item.task_name}}</a>
							</p> 
							<view class="other"><span class="t-gray">投递时间：{{item.apply_time}}</span></view>
						</view>
						<view class="meta">
							<view class="status">
								<view class="cl"><p class="fl">待雇主筛选</p> <p class="filter t-gray fl">{{item.statetext}}</p><view style="clear: both;"></view></view>
							</view> 
							<view class="btn-group">
								<!-- <a class="btn-text btn-im">在线沟通</a> 
								<a class="btn-text">查看报价</a> -->
								<span class="btn-text" @click="chtt" v-show="flg">撤回投递</span>
							</view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
	
	<view class="dialog quote-retract" v-show="flag">
		<view class="panel">
			<view class="hd"><h2 class="title">投递职位</h2> <i @click="xx" class="icon iconfont">&#xe60d;</i></view>
			<view class="bd">
				<view class="dialog-retract">
					<form class="form-wrap">
						<radio-group @change="radioChange">
							<label style="display:block;" class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
								<view style="display:inline-block;">
									<radio style="transform:scale(0.7)" :value="item.value" :checked="index === current" />
								</view>
								<view style="display: inline-block;">{{item.name}}</view>
							</label>
						</radio-group>
					</form>
				</view>
			</view>
			<view class="ft"><span @click="tj" class="btn btn-blue">提交</span> <span @click="qx" class="btn btn-default">取消</span></view>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				management:[],
				radio: '0',
				 flag:false,
				 flg:false,
				 fl:false,
				 task_id:'',
				 revocate_reason:'',
				  items: [{
						  value: '1',
						  name: '误投递'
					  },
					  {
						  value: '2',
						  name: '和雇主沟通需求后认为职位不适合',
						  checked: 'true'
					  },
					  {
						  value: '3',
						  name: '和自己的工作时间冲突，无法完成工作'
					  },
					  {
						  value: '4',
						  name: '其他原因'
					  },
				  ],
				  current: ""
			}
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						console.log(this.items[i].name)
						this.revocate_reason = this.items[i].name
						break;	
					}
				}
			},
			// zhiweiguanli(){
			// 	wx.navigateTo({
			// 		url:'/pages/job_detail/job_detail'
			// 	})
			// },
			chtt(){
				 this.flag = !this.flag;
			},
			xx(){
				 this.flag = !this.flag;
			},
			qx(){
				 this.flag = !this.flag;
			},
			tj(){
				if(!this.revocate_reason){
					// alert('请选择撤回理由')
					  uni.showToast({icon: 'none',title: '请选择撤回理由'})
				}else{
					this.$http.post('/public/index.php/api/Work/revocateResume',{
						user_id:this.$store.state.userInfo.user_id,
						task_id:this.task_id,
						revocate_reason:this.revocate_reason
					}).then(res => {					
						// console.log(res)
					})
					 this.flag = !this.flag;
					 this.flg = !this.flg;
				}
				
			}
		},
		created() {
			this.$http.post('/public/index.php/api/Work/positionManagement',{
				user_id:this.$store.state.userInfo.user_id,
				page:1,
				limit:3
			}).then(res => {
				if(res.data.data.row.length==0){
					this.fl = false
				}else{
					this.fl = true
				}
				this.management = res.data.data.row
				this.management.forEach(item => {
					this.task_id = item.id
				})
				
			})
		}
	}
</script>

<style lang="scss" scoped>
.box {
    padding: 20px 15px;
	background: #fff;
	line-height: 24px;
	margin-top: 20px;
	.box-hd {
	    line-height: 28px;
		.title {
		    font-size: 18px;
			font-weight: 700;
		}
		.fl {
		    float: left;
		}
		.all {
		    height: 24px;
		    margin-top: 4px;
		    line-height: 24px;
			color: #008bf7;
			.icon {
			    margin-left: 5px;
				font-size: 20px;
				vertical-align: middle;
			}
		}
		.fr {
		    float: right;
		}
	}
	.box-bd {
	    margin-top: 10px;
		clear: both;
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
		.item {
		    display: block;
		    width: 100%;
		    min-height: unset;
		    padding: 20px 0;
			border-top: 1px solid #edf1f4;
			.info {
			    width: 100%;
				.title {
				    max-height: 48px;
					a {
					    color: #092235;
					}
				}
				.other {
				    margin-top: 2px;
					.t-gray {
					    color: #9ca6ae;
					}
					.fl {
					    float: left;
					}
				}
			}
			.meta {
			    display: block;
			    width: 100%;
			    margin-top: 20px;
				clear: both;
				.status {
				    width: 100%;
					margin-right: 30px;
					.fl {
					    float: left;
					}
					.filter {
					    margin-left: 10px;
					}
					.t-gray {
					    color: #9ca6ae;
					}
				}
				.btn-group {
				    display: -ms-flexbox;
				    display: flex;
				    -ms-flex-pack: justify;
				    justify-content: space-between;
				    width: 100%;
				    margin-top: 20px;
					text-align: center;
					.btn-text {
					    display: inline-block;
					    text-align: center;
					    color: #008bf7;
					    cursor: pointer;
						line-height: 24px;
					}
					.btn-im {
					    height: 24px;
					    padding-left: 26px;
					    background: url(/static/images/im-icon.gif) no-repeat 0 0;
					    background-size: 24px 24px;
					}
				}
			}
		}
	}
}
.box:not(:first-child) {
    margin-top: 20px;
}

</style>
