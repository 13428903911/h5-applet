<template>
	<view>
		<view v-for="(item,index) in getContract" :key="index">
			<view class="mod mod-role" >
				<view class="bd">
					<view class="list">
						<li class="fl">
							<view class="avatar fl">
								<img :src="item.user_avatar"></view> 
								<p class="name">{{item.publisher}}</p> 
								<p class="remark">雇主</p>
						</li>
						<li class="fl">
							<view class="avatar fl">
								<img :src="item.apply_avatar">
							</view> 
							<p class="name">{{item.apply_name}}</p> 
							<p class="remark">人才</p>
						</li>
					</view>
					<view style="clear: both;"></view>
				</view>
			</view>
			<view class="mod mod-salary">
				<view class="bd">
					<view class="list cl">
						<li class="fl" style="margin: 10px 0px;"><p>计费方式</p> <p class="num">{{item.income_method}}</p></li> 
						<li class="fl"><p>时薪</p> <p class="num">{{item.price}}</p></li> 
						<li class="fl" style="margin: 10px 0px;"><p>每周最长工作时间</p> <p class="num">{{item.working_hours}}</p></li>
						<view style="clear: both;"></view>
					</view>
					
				</view>
			</view>
			<view class="mod">
				<view class="hd">
					<h3 class="title">工作内容</h3>
				</view> 
				<view class="bd">
					<p><pre>{{item.description}}</pre></p>
				</view>
			</view>
			<div class="mod"><p style="margin-top: 30px;">您已同意<a>{{item.model_agree}}</a></p></div>
			<view class="mod" style="margin-bottom: 80px;">
				<view class="hd"><h3 class="title">常见问题</h3></view>
				<view class="bd">
					<dl>
						<dt>时薪制合同是如何运转的？</dt> 
						<dd>在工作开始之前，您需要先同意雇主发来的合同，合同正式生效。合同生效后，您的雇主将支付一定金额的款项作为预付款，在平台确认收到预付款后，您可以开始正式工作。您在工作时，效率管理工具将每10分钟获取一次您的屏幕快照，并以此统计您的工作时长，最终雇主将按照效率管理工具中统计的时长和对应的快照来验证您的工作成果，并根据工作时长进行付款。</dd>
					</dl>
					<dl>
						<dt>不同意合同中某些条款怎么办？</dt> 
						<dd>如果您不认可合同中的部分条款，可以点击与雇主沟通，通过内置沟通工具和雇主进行沟通，沟通的内容将作为信息留存，来保障您的权益不受侵犯。</dd>
					</dl>
					<dl>
						<dt>我如何结算工作收入？</dt> 
						<dd>工作开始时，您的雇主将预付一定金额的预付款交给平台托管，您在工作过程中可以对已经产生的工作成果提交给雇主进行结算。雇主审核通过您提交的工作后，平台将实时从雇主预付的款项中支付对应的金额至您的收款账户。具体支付的金额以合同中商定的时薪和本次结算的工作时长进行计算得出。</dd>
					</dl>
					<dl>
						<dt>工作过程中遇到问题怎么办？</dt> 
						<dd>工作过程中双方均受金斗云平台的保护，金斗云平台有对应的合同管理工具，效率管理工具和沟通管理工具等作为信息数据记录，同时有相应的纠纷处理机制，在纠纷发生时将进行介入，保障您的权益不受侵犯。</dd>
					</dl>
				</view>
			</view>
			<view class="ft-wrap w1060 cl"><span @click = "qianyue" class="btn btn-blue btn-disabled">确认</span></view>
		</view>
		<view class="dialog quote-retract" v-show="flag">
			<view class="panel">
				<view class="hd"><h2 class="title">是否确认该合同？</h2> <i @click="xx" class="icon iconfont">&#xe60d;</i></view>
				<view class="bd">
					<view class="dialog-retract">
						<p class="t-red">确认合同后，雇佣关系将正式确立。为保障您的资金安全，建议您在雇主托管预付款后再开始进行工作。</p> 
					</view>
				</view>
				<view class="ft"><span @click="qrht" class="btn btn-blue">确认合同</span> <span class="btn btn-default" @click="quxiao">取消</span></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				getContract:[],
				contractname:"",
				flag:false,
				task_id: this.appId,
			}
		},
		props:{
			appId:""
		},
		methods: {
			xx(){
				this.flag = !this.flag;
			},
			qianyue(){
				this.flag = !this.flag;
			},
			quxiao(){
				this.flag = !this.flag;
			},
			qrht(){
				this.$http.post('/public/index.php/api/Work/saveSign',{
					task_id:this.task_id,
					user_id:this.$store.state.userInfo.user_id,
				}).then(res => {
					this.flag = !this.flag;
					console.log(res)
				})
			}
		},
		created() {
			this.$http.post('/public/index.php/api/Work/getContract',{
				task_id:this.task_id
			}).then(res => {
				this.getContract = res.data.data
				this.getContract.forEach(item => {
					this.task_id = item.id
					this.contractname = item.name
					this.$emit("delete",this.contractname)
				})
			})
		}
	}
</script>

<style scoped lang="scss">
.mod {
    padding: 0 20px 30px;
	line-height: 24px;
	.bd {
	    margin-top: 20px;

		.list li {
		    margin: 0 4% 0 0;
			.avatar {
			    display: -ms-flexbox;
			    display: flex;
			    -ms-flex-align: center;
			    align-items: center;
			    -ms-flex-pack: center;
			    justify-content: center;
			    width: 50px;
			    height: 50px;
			    margin-right: 20px;
			    border-radius: 50px;
			    text-align: center;
			    overflow: hidden;
			    border: 1px solid rgba(9,34,53,.1);
			    box-sizing: border-box;
				img {
				    max-width: 100%;
				    max-height: 100%;
				}
			}
			.name {
			    margin-top: 5px;
			    font-weight: 700;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    overflow: hidden;
			}
			 p {
			    line-height: 20px;
			}
		}
		.fl {
		    float: left;
			width: 38%;
		}
	}

		a{color: #008bf7;}
	
}
.mod .bd .remark {
    color: #9ca6ae;
}
.mod.mod-salary .list {
	.fl {
	    float: left;
	}
}
.mod.mod-salary .list li {
    margin: 10px 2rem;
	.num {
	    font-size: 20px;
	    font-weight: 700;
	    color: #008bf7;
	}
	p{
		line-height: 24px;
	}
}
.mod:not(:first-child) {
    border-top: 1px solid #edf1f4;
}
.mod .hd .title {
    font-size: 18px;
    line-height: 28px;
}
.mod .hd{
	margin-top: 20px;
}
pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: inherit;
    word-break: break-all;
}
.mod dl {
    margin-top: 20px;
	dt {
	    font-weight: 700;
	}
	dd {
	    margin-top: 10px;
	    color: #9ca6ae;
	    font-size: 12px;
	    line-height: 20px;
	}
}
.ft-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 15px;
    background: #fff;
	border-top: 1px solid #edf1f4;
	.btn {
		display: inline-block;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border: none;
		border-radius: 2px;
		box-sizing: border-box;
	    width: 100%;
	    margin: 0;
	    float: none;
	}
	.btn.btn-blue.btn-disabled {
	   background: #008bf7;
	   color: #fff;
	}
}
.icon{
	position: fixed;
	top: 20px;
	right: 20px;
	width: 20px;
	height: 20px;
	line-height: 20px;
	text-align: center;
	color: #9ca6ae;
	cursor: pointer;
	z-index: 999;
	font-size: 26px;
}
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: #fff;
	.panel {
	    position: relative;
	    height: 100vh;
	    padding: 66px 15px 90px;
	    background: #fff;
	    box-sizing: border-box;
	    box-shadow: 0 0 10px 0 rgba(9,34,53,.1);
	    border-radius: 4px;
	    overflow-y: auto;
		.title {
		    font-size: 24px;
		    font-weight: 700;
		    line-height: 34px;
		}
		.iconpop_close1 {
		    position: fixed;
		    top: 20px;
		    right: 20px;
		    width: 20px;
		    height: 20px;
		    line-height: 20px;
		    text-align: center;
		    color: #9ca6ae;
		    cursor: pointer;
		    z-index: 999;
		}
		 .bd {
		    margin-top: 20px;
			 p {
			    line-height: 24px;
			}
			.t-red {
			    // color: #ff5853;
			}
			.form-group {
			    line-height: 24px;
			    margin-top: 10px;
				.uni-radio-input {
				    margin: 0 10px 0 1px;
				}
			}
		}
		.ft {
		    position: fixed;
		    left: 0;
		    bottom: 0;
		    width: 100%;
		    height: 70px;
		    padding: 10px 15px;
		    background: #fff;
		    box-sizing: border-box;
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
			.btn {
			    display: inline-block;
			    height: 50px;
			    line-height: 50px;
			    text-align: center;
			    border: none;
			    border-radius: 2px;
				width: calc(50% - 10px);
			    cursor: pointer;
			    box-sizing: border-box;
			}
			.btn.btn-blue {
			    background: #008bf7;
			    color: #fff;
			}
			.btn.btn-default {
			    border: 1px solid #008bf7;
			    color: #008bf7;
			    line-height: 48px;
			}
		}
	}
}
</style>
