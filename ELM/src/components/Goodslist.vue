<template>
	<div class="goodslist">
		<router-link v-for=" g in shoplist" :to="'/home/goodsdetail/'+g.restaurant.id">
			<div class="total">
				<div class="ga">
					<div class="a1">
						<img :src="g.restaurant.image_path|iconFilter3" alt="">
					</div>
					<div class="a2">
						<div class="a2-left">
							<div class="left1">
								<h2>{{g.restaurant.name}}</h2>
							</div>
							<div class="left2">
								<div class="star">
								<van-rate v-model="g.restaurant.rating" allow-half="" void-icon="star" void-color="#eee" gutter="0px"/>
									<span>{{g.restaurant.rating}}分</span>
									</div>
								<span class="left-2">月销{{g.restaurant.rating_count}}单</span>
							</div>
							<div class="left3">
								<span class="left-3">￥{{g.restaurant.float_minimum_order_amount}}起送</span>
								<span>|</span>
								<span class="left-4">{{g.restaurant.piecewise_agent_fee.description}}</span>
							</div>
						</div>
						<div class="a2-right">
							<div class="right1">
								<span>蜂鸟专送</span>
							</div>
							<div class="right2">
								<span class="right-1">{{g.restaurant.distance|iconFilter4}}</span>
								<span class="right-2">{{g.restaurant.order_lead_time}}分钟</span>
							</div>

						</div>
					</div>
				</div>
				<div class="gb">
					<div class="b1">

					</div>
					<div class="b2">
						<div class="b2-1">
							<span>{{g.restaurant.flavors[0].name}}</span>

						</div>
						<div class="b2-2">
							<div class="b2-a">
								<div class="youhui" v-for="f in g.restaurant.activities ">
									<span class="youhui-1" :class="'c'+ f.icon_color">{{f.icon_name}}</span>
									<span class="youhui-2">{{f.tips}}</span>
								</div>
							</div>
							<div class="huodong">
								<span>{{g.restaurant.activities.length}}个活动</span>
								<van-icon name="arrow-down" @click="btnClick" class="huodong-2" />
							</div>
						</div>

					</div>

				</div>
			</div>
			</router-link>
	</div>
	</div>
</template>

<script>
	export default {
		data() {

			return {
				shoplist: [],
			}
		},
		mounted() {
			let address = localStorage.getItem('address')
			address = JSON.parse(address)
			this.http.get("/ele/restapi/shopping/v3/restaurants", {
					params: {
						latitude: address.latitude,
						longitude: address.longitude,
						offset: 0,
						limit: 10,
						extras: ["activities","tags","svip_template"],
						extra_filters: "home",
						rank_id: '',
						"terminal": "h5"
					}
				})
				.then(res => {
					this.shoplist = res.data.items
					// console.log(this.shoplist)
				})

		},
		methods: {
			btnClick(e) {
				// console.log(e.path[2])

			}
		}


	}
</script>

<style scoped>
	.goodslist {
		width: 100%;
		height: 100%;
		margin: 0;
		display: flex;
		flex-wrap: wrap !important;
		flex-direction: column;
		margin-bottom: 50px;
	}

	a {
		color: black !important;
	}

	.total {
		width: 100%;
		height: 200px;
	}

	.ga
	 {
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-between;
	}
	.gb{
		width: 100%;
		display: flex;
		justify-content: space-between;	
	}
	.a1 {
		width: 75px;
		height: 100px;
	}

	.a1 img {
		width: 65px;
		height: 75px;
		margin: 5px 5px;
	}

	.a2 {
		width: 80%;
		height: 100px;
		display: flex;
		justify-content: space-around;
		flex-shrink: 0;
	}

	.a2-left {
		width: 70%;
		height: 100px;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	}

	.a2-left div {
		width: 100%;
		display: flex;
		height: 33%;
	}

	.left1,
	.left2,
	.left3 {
		width: 100%;
		display: flex;
		height: 33px;
		text-align: center;
	}

	.left-1 {
		width: 50px;
		height: 30px;
		font-size: 12px;
		line-height: 30px;
		background-color: #fff100;
	}

	.left1 h2 {
		height: 30px;
		width: 220px;
		font-size: 15px;
		line-height: 30px;
		margin: 0;
		text-align: left !important;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

	}
	.star {
		width: 130px !important;
		height: 30px !important;
		line-height: 30px;
	}
	.star span{
		width: 20px;
		height: 30px;
		line-height: 30px;
		white-space: nowrap;
		font-size: 10px;
	}
	.van-rate{
		width:90px;
	}
	.van-rate_item{
		width:15px !important;
		height: 30px;
	}
	.van-icon {
		width: 10px !important;
		height: 30px;
		line-height: 30px;
		font-size: 8px !important;
		margin: 0px;
	}
	.left-2 {
		font-size: 10px;
		width: 70px;
		height: 30px;
		line-height: 30px;
		margin-left: 5px;
	}

	.left3 span {
		height: 30px;
		line-height: 30px;
		color: #666;
		font-size: 14px;
		margin-left: 5px;
	}

	.a2-right {
		width: 30%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.right1,
	.right2 {
		width: 90px;
		height: 33px;
	}

	.right1 span {
		width: 40px;
		height: 30px;
		color: white;
		font-size: 15px;
		line-height: 30px;
		background-color: #0af;
	}

	.right2 span {
		font-size: 10px;
		color: #666;
		height: 30px;
		line-height: 30px;
	}

	.b1 {
		width: 20vw;
		height: 100px;
		background-color: white;
	}

	.b2 {
		width: 80vw;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.b2-1 {
		width: 100%;
		height: 33px;
	}

	.b2-1>span {
		width: 100%;
		height: 30px;
		line-height: 30px;
		color: rgb(102, 102, 102);
		border-color: rgb(221, 221, 221);
		font-size: 13px;
		margin-left: 10px;
		border: 1px solid lightgray;
		border-radius: 3px;
	}

	.b2-2 {
		width: 100%;
		height: 18.5vw;
		display: flex;
	}

	.b2-a {
		width: 70%;
		height: 18.5vw;
		overflow: hidden;
	}

	.huodong {
		width: 30%;
		height: 18.5vw;
	}

	.youhui {
		width: 100%;
		height: 50%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.cf07373 {
		background-color: #f07373;
	}

	.cf1884f {
		background-color: #f1884f;
	}

	.c70bc46 {
		background-color: #70bc46;
	}

	.c00b762 {
		background-color: #00b762;
	}

	.c3cc791 {
		background-color: #3cc791;
	}

	.youhui-1 {
		color: white;
		margin-right: 5px;
	}

	.huodong-2 {
		width: 20px;
	}
</style>
