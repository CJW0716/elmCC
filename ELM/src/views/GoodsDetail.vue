<template>

	<div class="root">
		<div class="nav">
			
			<div class="header"> 
				<van-icon name="arrow-left" class="back-btn" @click="$router.back()"/>
				<img class="logo-bg" src="http://fuss10.elemecdn.com/7/6a/a98b6044628328f9561fa20b919c9png.png?imageMogr/format/webp/thumbnail/750x/" alt="">
				<img class="shop-logo" :src="detail.rst.image_path|iconFilter5" alt="">
			</div>
			<div class="shop-info">
				<h3 @click="showDialog=!showDialog">{{detail.rst.name}}</h3>
				<div class="shop-rating">
					<span>评价{{detail.rst.rating}}</span>
					<span>月售{{detail.rst.recent_order_num}}单</span>
					<span>蜂鸟转送约{{detail.rst.order_lead_time}}分钟</span>
				</div>
				<div class="activates" @click="show=!show">
					<div class="activates-info">
						<span>
							{{}}
						</span>
						<span>{{}}</span>
					</div>
					<p>{{}}个优惠</p>
				</div>
				<p class="shop-note"></p>
				
			</div>
			
			
			
		</div>
		
		<div class="order">
			
			<ul class="order-1">
				<li @click="detailClick1"><p>点餐</p></li>
				<li @click="detailClick2"><p>评价</p></li>
				<li @click="detailClick3"><p>商家</p></li>
			</ul>
			
		<!-- 商品列表+Menu推荐 -->
			<div class="menu-list" v-show="ordershow">
				<Menu
					:menu="detail.menu"
					:recommend="detail.recommend"
					:bought="detail.bought_list"
				>
					
				</Menu>
			</div>
			<Estimate v-show="pingjiashow"></Estimate>
			<Business v-show="shangjiashow"></Business>
		</div>
		<!-- 购物车 -->
		
		<div class="cart-box">
			<div class="manjian">
				{{}}
			</div>
			
			<div class="cart-bar">
				
				<div class="cart-left">
					<van-icon name="shopping-cart" class="cart-icon" />
					<div class="cart-tip">
						<p>未选购商品</p>
						<p>配送费{{detail.rst.float_delivery_fee}}元</p>
					</div>
				</div>
				<div class="commit-btn">下单前请选择商品</div>
			</div>
			
		</div>
		
		
		
		<van-actionsheet v-model="show" title="优惠活动">
		  
		  <div class="ac-list">
			  
			  <div v-for="ac in detail.rst.activities" class="ac-list-item">
				  <span
					:style="{'background-color':'#'+ac.icon_color}"
				  >{{ac.icon_name}}</span>
				  <span>{{ac.description}}</span>
			  </div>
			  
		  </div>
		  
		</van-actionsheet>
		
		<van-dialog
			v-model="showDialog"
		>
			<h2 class="tip-title">
				{{detail.rst.name}}
			</h2>
			
			<table class="tip-table">
				<tr>
					<td class="first-line">{{detail.rst.rating}}</td>
					<td class="first-line">{{detail.rst.recent_order_num}}单</td>
					<td class="first-line">{{detail.rst.float_delivery_fee}}元</td>
					<td class="first-line">蜂鸟专送</td>
					<td class="first-line">{{detail.rst.distance|iconFilter4}}</td>
				</tr>
				<tr class="second-line">
					<td>评分</td>
					<td>月售</td>
					<td>约{{detail.rst.order_lead_time}}分钟</td>
					<td>配送费</td>
					<td>距离</td>
				</tr>
			</table>
			<p class="note">
				<span>公告</span>
			</p>
			<p class="note-content">{{detail.rst.promotion_info}}</p>
			
			
		</van-dialog>
		
				
	</div>
	
</template>

<script>
	import Estimate from '../components/Estimate.vue'
	import Business from '../components/Business.vue'
	import Menu from "../components/Menu.vue"
	export default {
		data(){
			return{shopid:"",
			detail:{},
			ordershow:true,
			show:false,
			pingjiashow:false,
			shangjiashow:false,
			showDialog:false,
			activeIndex:0
			}
		},
		components:{
			Estimate,
			Business,
			Menu
		},
		methods:{
			detailClick1:function(e){
				this.ordershow = true
				this.pingjiashow = false
				this.shangjiashow = false
			},
			detailClick2:function(e){
				this.ordershow = false
				this.pingjiashow = true
				this.shangjiashow = false
			},
			detailClick3:function(e){
				this.ordershow = false
				this.pingjiashow = false
				this.shangjiashow = true
			}
		}
		,
		activated(){
			// 获取路由传值， 赋值给当前的shopid数据变量
			this.shopid = this.$route.params.shopid
			// console.log(this.shopid)
			let address = localStorage.getItem('address')
			address = JSON.parse(address)
			let url  = '/ele/pizza/shopping/restaurants/'+ this.shopid+'/batch_shop'
			// console.log(localStorage.getItem('user_id'))
			this.http.get(url,{
				params: {
					user_id:localStorage.getItem('user_id'),
					latitude: address.latitude,
					longitude: address.longitude,
					extras: ["activities","albums","license","identification","qualification"],
					"terminal": "h5"
				}
				
			})
			.then(resp=>{
				this.detail = resp.data
				console.log(this.detail)
			})
			
		}

}
</script>

<style scoped>
	.nav{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	
	
	.header{
		width: 100%;
		height: 40vw;
		position: relative;
	}
	.header .logo-bg{
		position: absolute;
		top: 0;
		left: 0;
		height: 30vw;
		width: 100%;
	}
	.header .shop-logo{
		position: absolute;
		top: 20vw;
		display: block;
		left: 40vw;
		width: 20vw;
		
	}
	.back-btn{
		position: absolute;
		left: 0;
		top: 0;
		padding: 12px;
		z-index: 100;
		color:white;
	}
	
	.shop-info{
		text-align: center;
	}
	.shop-info h3{
		font-size: 8vw;
		margin: 0;
	}
	.shop-rating{
		display: flex;
		justify-content:space-around;
	}
	.shop-rating span, .activates{
		font-size: 4vw;
		color: #999;
	}
	.activates{
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		align-items: center;
		width: 95vw;
	}
	.activates-info{
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 75%;
	}
	.activates>p{
		width: 25%;
		text-align: center;
	}
	.ac-list-item{
		margin: 3vw auto;
		font-size: 3vw;
		padding-left: 10vw;
	}
	.ac-list-item span:nth-child(2){
		color: black;
		margin-left: 5vw;
	}
	.ac-list-item span:nth-child(1){
		display: inline-block;
		color: white;
		padding: 2px 5px;
	}
	.tip-title{
		text-align: center;
	}
	.tip-table{
		text-align: center;
		margin: 0 auto;
		width: 100%;
	}
	.first-line{
		font-weight: bold;
		font-size: 4vw;
	}
	.second-line{
		font-size: 3vw;
	}
	.note{
		text-align: center;
	}
	.note-content{
		padding: 0 3vw;
	}
	
	.cart-box{
		position: fixed;
		left:0;
		bottom:0;
		width: 100%;
		z-index: 1000;
	}
	.manjian{
		height: 5vw;
		background: #fffad6;
		border-top: 1px solid #f9e8a3;
		text-align: center;
		font-size: 3vw;
		line-height: 5vw;
		color: #333;
	}
	.cart-icon{
		display: inline-block;
		width: 10vw;
		height: 10vw;
		font-size: 8vw;
		border: 1.5vw solid black;
		border-radius: 50%;
		text-align: center;
		line-height: 10vw;
		color:#666;
		background-color: #363636;
		margin-left: 3vw;
		position: relative;
		top: -5vw;
	}
	.cart-left{
		display: flex;
		color: white;
	}
	.cart-left p{
		margin: 0;
	}
	.cart-bar{
		height: 14vw;
		background-color: #363636;
		display: flex;
		justify-content: space-between;
	}
	.cart-tip{
		margin-left: 5vw;
	}
	.commit-btn{
		color:white;
		height: 14vw;
		line-height: 14vw;
		text-align: center;
	}
	
	.menu-list{
		width: 100vw;
		margin: 0 auto;
		overflow-y: scroll;
		margin-bottom: 14vw;
	}
	.order{
		width: 100%;
	}
	.order-1{
		width: 100%;
		height: 11vw;
		display: flex;
		border-bottom: 1px solid #999999;
		margin-bottom: 5px;
	}
	.order-1 li{
		width: 33%;
		height: 8vw;
		line-height: 8vw;
		text-align: center;
	}
	.order-1 p{
		width: 50%;
		height: 8vw;
		text-align: center;
		line-height: 8vw;
		margin: 0 auto;
	}
</style>
