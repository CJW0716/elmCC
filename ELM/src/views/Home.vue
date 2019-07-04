<template>
	<div class="home" @scroll="homeScroll">

		<div class="addr-abr header-bg">
			<router-link to="/home/address">
				<van-icon name="location" class="addr-icon" />
				{{address?address.name:"正在获取位置..."}}
				<van-icon name="arrow-down" class="addr-icon" />
			</router-link>
		</div>
		<div class=" search-bar header-bg">
			<router-link to="/home/search" class="search-btn">
				<van-icon name="search" class="addr-icon" />
				<span>搜索饿了么商家、商品名称</span>
			</router-link>

		</div>

		<!-- 页面中主要数据 -->
		<div class="total-view" v-show="address">
		
				<!-- 第一个轮播图 -->
				<van-swipe @change="swiperChange">
					<van-swipe-item v-for="page in swiper1Arr">
						<div class="swipe-page">
							<div v-for="item in page" class="swipe-page-item">
								<img :src="item.image_hash|iconFilter" alt="">
								<div>{{item.name}}</div>
							</div>

						</div>
					</van-swipe-item>
					<div class="custom-indicator" slot="indicator">
						<div class="indicator-item" :class="{'active-indicator-item':swiperIndex==i}" v-for="page,i in swiper1Arr">
						</div>
					</div>
				</van-swipe>
			
			<div class="homes-a">
				<div class="homes-a-1">
					<span class="span1">品质套餐</span>
					<span class="span2">搭配齐全吃得好</span>
					<div class="span3">立即抢购</div>
				</div>
				<div class="homes-a-2">
					<img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
					 alt="#">
				</div>
			</div>
			<Lunbo></Lunbo>
			<div class="homes-b">
				<div class="b1">——&nbsp;&nbsp;<span>推荐商家</span>&nbsp;&nbsp;——</div>
			</div>
				<div class="b2">
				<span>综合排序</span>
				<span>距离最近</span>
				<span>品质联盟</span>
				<span>筛选</span>
			</div>
		<!-- 	<Goodslist></Goodslist> -->
		<div class="rest-list">
			
			<RestCell 
				v-for="item,i in restArr"
				:rest='item.restaurant'
			></RestCell>
		</div>
		</div>
		<Loading v-show="!address"></Loading>

	</div>

</template>

<script>
	import Lunbo from '../components/Lunbo.vue'
	import Loading from '../components/Loading.vue'
	import RestCell from "../components/RestCell.vue"
	// import Goodslist from '../components/Goodslist.vue'
	export default {
		components: {
			Lunbo,
			Loading,
			// Goodslist
			RestCell
		},
		data() {
			return {
				swiper1Arr: [],
				swiperIndex: 0,
				address: null,
				restArr:[],
				isLoading:false
			}
		},
		methods:{
			swiperChange(index){
				this.swiperIndex = index
			},
			homeScroll(e){
				// console.log('........')
				let offset = e.target.scrollHeight -e.target.clientHeight
				if(e.target.scrollTop >= offset-100){
					var that = this
					// 判断是否正在发送请求
					if(!this.isLoading){
						this.isLoading = true
						let address  = localStorage.getItem('address')
						address = JSON.parse(address)
						// 获取商品数据
						this.http.get("/ele/restapi/shopping/v3/restaurants",{
							params:{
									latitude:address.latitude,
								longitude:address.longitude,
								offset:this.restArr.length,
								limit:10,
								extras:'["activities","tags","svip_template"]',
								extra_filters:"home",
								rank_id:'',
								"terminal":"h5"
							}
						})
						.then(res=>{
							// 追加数据
							that.restArr = that.restArr.concat(res.data.items)
							that.isLoading = false
						})
					}
				}
			}	
		},
		activated(){
			// 获取是否已经选择过地址
			let address = localStorage.getItem('address')
			address = JSON.parse(address)

			if (!address) {
				// 获取当前地址
				// getCurrentPosition 
				navigator.geolocation.getCurrentPosition(position =>{

						console.log(position)
					},
					err=>{
						// 获取地理位置失败,跳转到手动选择位置界面
						this.$router.push("/home/address")
					}, 
					{
						timeout:3000
					}
				)
			}
			// 选择的位置数据存在
			if(address){
				this.address = address
				console.log(address)
				let that = this
				// 获取第一个轮播图数据
				this.http.get('/ele/restapi/shopping/v2/entries',{
						params:{
							latitude:address.latitude,
							longitude:address.longitude,
							templates:["main_template", "favourable_template", "svip_template"],
							terminal:"h5"
						}
					})
					.then(res => {
						// 计算页码  如果是可变的变量 使用let
						let pageNum = Math.ceil(res.data[0].entries.length / 10)
						let arr = []
						// 处理数据，将数据拆分为2个小数组
						for (let i = 0; i < pageNum; i++) {
							arr.push([])
						}

						res.data[0].entries.forEach((el, i) => {
							arr[Math.floor(i / 10)].push(el)
						})
						// 					console.log(res)
						// 					console.log(arr)
						this.swiper1Arr = arr

					})
					// 获取商品数据
					this.http.get("/ele/restapi/shopping/v3/restaurants",{
						
						params:{
							latitude:address.latitude,
							longitude:address.longitude,
							offset:0,
							limit:10,
							extras:'["activities","tags","svip_template"]',
							extra_filters:"home",
							rank_id:'',
							"terminal":"h5"
						}
					})
					.then(res=>{
						that.restArr = res.data.items
						console.log(res.data)
					})
					

			}



		}

	}
</script>

<style scoped>
	.home {
		background-color: white;
		height: 300vw;
		overflow: scroll;
	}

	.addr-abr {
		color: white;
		font-weight: bold;
		font-size: 4.5vw;
		padding: 10px 18px 0px 18px;
		height: 10vw;
	}

	.addr-icon {
		position: relative;
		top: 3px;
	}

	.search-bar {
		text-align: center;
		position: sticky;
		top: 0;
		z-index: 1000;
		padding: 2vw;
		width: 100%;
		box-sizing: border-box;
	}

	.search-btn {
		display: inline-block;
		width: 100%;
		height: 10vw;
		background-color: white;
		color: #999;
		line-height: 10vw;
		font-size: 4vw;
	}

	.swipe-page {
		display: flex;
		flex-wrap: wrap;
	}

	.swipe-page-item {
		width: 20%;
		text-align: center;
		padding: 8px 0;
	}

	.swipe-page-item img {
		width: 60%;
	}

	.swipe-page-item div {
		font-size: 3vw;
		color: #999;
	}

	.custom-indicator {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 2px;
		align-items: center;
	}

	.indicator-item {
		background-color: #999999;
		height: 2px;
		width: 10px;
		margin: 0 5px;
	}

	.active-indicator-item {
		background-color: mediumaquamarine;
	}

	.homes-a {
		width: 100%;
		height: 18vh;
		display: flex;
		justify-content: space-around;
	}

	.homes-a-1,
	.homes-a-2 {
		width: 45%;
		height: 18vh;
		margin: 5px auto;
	}

	.homes-a-1 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.homes-a-1 span {
		height: 25px;
	}

	.homes-a-2 img {
		width: 100%;
		height: 18vh;
	}

	.span2 {
		font-size: 16px;
		color: #666;
	}

	.span3 {
		color: #af8260;
	}

	.homes-b {
		width: 100%;
		height: 7vw;
		margin: 0;
	}

	.b1 {
		width: 100%;
		height: 30px;
		text-align: center;
		margin: 5px auto;
		font-size: 20px;
	}

	.b2 {
		width: 100%;
		height: 10vw;
		display: flex;
		justify-content: space-around;
		color: #666;
		position: sticky;
		top: 13vw;
		background-color: white;
		z-index: 1000;
		line-height: 10vw;
	}
</style>
