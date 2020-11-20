<template>
	<view class="box box-quotes">
		<view class="box-hd cl">
			<h2 class="title">推荐职位</h2>
		</view>
		<view class="mod mod-jobs hide-jobs" @click="details(item.id)" v-for="(item,index) in offerJob">
			<view class="hd cl">
				<h3 class="title">{{item.income_method}}</h3>
			</view>
			<view class="bd">
				<view class="hot-list">

					<view class="item cl">
						<a>
							<view class="item-side fl">
								<p class="num">{{item.price}}</p>
								<p class="t-gray">{{item.income_method}}</p>
							</view>
							<view class="item-main">
								<h3 class="t-default">
									<!---->{{item.name}}</h3>
								<p class="t-gray"><span style="padding-right: 15px;">{{item.hiring_type}}</span> <span>{{item.working_hours}}</span>
									<!---->
								</p>
								<view class="tags">
									<view style="display: inline-block;" class="inner cl t-gray" v-for="items in item.skill"><span>{{items}}</span>
									</view>
								</view>
								<view class="meta"></view>
							</view>
						</a>
					</view>
				</view>
			</view>
		</view>
		<view class="mod-more"><span class="btn-text">点击查看更多</span></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				offerJob: []
			}
		},
		methods: {
			details(id) {
				wx.navigateTo({url: '/pages/job_detail/job_detail?id='+id})
			}
		},
		created() {
			this.$http.post('/public/index.php/api/Work/positionRecommend', {
				user_id: this.$store.state.userInfo.user_id,
				page: 1,
				limit: 15
			}).then(res => {
				if (res.data.code == 1) {
					this.offerJob = res.data.data.row
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		padding: 20px 15px;
		background: #fff;
		line-height: 24px;

		.box-hd {
			line-height: 28px;

			.title {
				font-size: 18px;
				font-weight: 700;
			}

		}

		a {
			text-decoration: none;
			color: #008bf7;
		}

		.mod:not(:first-child) {
			border-top: 1px solid #edf1f4;
		}

		.mod {
			margin-top: 50px;
			line-height: 24px;
			padding: 20px;

			.title {
				font-size: 18px;
				line-height: 28px;
			}

			.bd {
				margin-top: 20px;

				.salary {
					margin-top: -20px;

					li {

						// margin: 20px 32px 0 0;
						.num {
							line-height: 30px;
							font-weight: 700;
							font-size: 20px;
							color: #008bf7;
						}
					}

					li.fl {
						float: left;
					}

				}

				.desc {
					margin-top: 25px;

					li {
						margin-top: 2px;
						padding: 20px;
						background: #f6f8f9;
						border-radius: 2px;

						.icon {
							width: 20px;
							height: 24px;
							margin-right: 20px;
							font-size: 20px;
						}

						.fl {
							float: left;
						}

						p {
							overflow: hidden;

							em {
								font-weight: 700;
								font-style: normal;
							}
						}
					}
				}

				.hot-list {
					overflow: hidden;
					position: relative;
					line-height: 24px;
					margin-top: -10px;

					.item {
						border-top: 1px solid #edf1f4;
						border-bottom: none;

						a {
							padding: 20px 0;
							margin: 0;
							display: block;
						}

						.item-side {
							margin-right: 10px;
							width: 100px;

							.t-gray {
								color: #9ca6ae;
							}
						}

						.fl {
							float: left;
						}

						.item-main {
							padding: 0;
							position: relative;
							overflow: hidden;

							.t-default {
								color: #092235;
							}

							.t-gray {
								color: #9ca6ae;
							}

							.tags {
								position: relative;
								margin-top: 4px;
								font-size: 0;
								line-height: 0;
								width: 100%;
								white-space: nowrap;
								overflow-x: auto;
								overflow-y: hidden;

								.inner {
									white-space: nowrap;
									overflow-x: auto;
									overflow-y: hidden;
									margin: 0;

									span {
										height: 24px;
										line-height: 24px;
										font-size: 12px;
										margin: 5px 5px 0 0;
										display: inline-block;
										padding: 0 8px;
										background: #edf1f4;
										border-radius: 1px;
									}
								}
							}
						}
					}

					.item:first-child {
						border-top: none;
					}
				}
			}
		}

		.mod-more {
			line-height: 24px;
			// margin-top:20px;
			border-top: 1px solid #edf1f4;
			text-align: center;
			border-bottom: 1px solid #edf1f4;
			padding: 20px 0;

			.btn-text {
				display: inline-block;
				text-align: center;
				color: #008bf7;
				cursor: pointer;
				line-height: 20px;

			}
		}


	}
</style>
