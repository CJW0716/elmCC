<template>
	<div class="address">
		<div class="header header-bg">
			<div @click="$router.back()">
				<van-icon name="arrow-left" class="back-btn" />
			</div>
			请选择收货地址
			
		</div>
		
		<div class="choose-bar">
			<div class="city-btn" @click="cityBtnClick">
				<span>{{cityname?cityname:"请选择"}}</span>
				<van-icon name="arrow-down" />
			</div>
			<div class="addr-input-box">
				<van-icon name="search" class="search-icon" />
				<input 
					type="text"
					class="search-input"
					placeholder="请输入地址"
					v-model="addrtxt"
				>
			</div>
		</div>
		
		<van-area
			:area-list="areaList"
			v-show="showAreaList"
			@confirm="chooseCity"
			@cancel="showAreaList=false"
		>
			
			
		</van-area>
		
		<ul v-show="showAddrList" class="add-list">
			<li v-for="add in addrList" class="add-list-item" @click="chooseAddr(add)">
				<div class="addr-title">
					<h4>{{add.name}}</h4>
					<span>{{add.distance}}</span>
				</div>
				<p>{{add.address}}</p>
			</li>
		</ul>
		
		
	</div>
</template>

<script>
	import areaList from "@/data/area.js"
	
	export default {
		data(){
			return {
				areaList,
				showAreaList:false,
				showAddrList:false,
				cityname:null,
				addrtxt:"",
				addrList:[]
			}
		},
		mounted(){
			let cityname = localStorage.getItem('cityname')
			if(cityname){
				this.cityname = cityname
			}
		},
		methods:{
			chooseAddr(add){
				// 回到home页面
				this.$router.push('/')
				this.showAddrList = false
				// 保存当前选择位置信息
				let address = JSON.stringify(add)
				localStorage.setItem('address', address)
				this.addrtxt = ''
			},
			cityBtnClick(){
				this.showAreaList = true
			},
			chooseCity(e){
				// 拼接选择的城市
				this.cityname = e[1].name + e[2].name
				// 保存选择的城市信息
				localStorage.setItem('cityname',this.cityname)
				this.showAreaList = false
				
				// 根据城市名称，获取该城市所在的经纬度
				this.http.get('/geo/geocoder/v2/',{
					params:{
						address:this.cityname,
						ak:"p32oLMwF41j3GoTB6Gjh2vo8wthwGgil",
						output:'json'
					}
				})
				.then(res=>{
					// localStorage 本地仓库 前端自带的小型数据库
					// localStorage 只能存储字符串类型数据
					// stringify()对象转换为字符串
					let position = JSON.stringify(res.data.result.location)
					// typeof 查看变量类型
					// console.log(typeof position)
					localStorage.setItem("position", position)
				})
			}
		},
		watch:{
			addrtxt(){
				this.showAddrList = true
				let that = this
				// 取出经纬度 JSON.parse将字符串转换为对象
				let position = JSON.parse(localStorage.getItem('position'))
				console.log(position)
				this.http.get('/ele/restapi/bgs/poi/search_poi_nearby_alipay',{
					params:{
						keyword:this.addrtxt,
						limit:20,
						offset:0,
						latitude:position.lat,
						longitude:position.lng
					}
				})
				.then(res=>{
					that.addrList = res.data
				})
			}
		}
	}
	
	
</script>

<style scoped>
	.header{
		text-align: center;
		color: white;
		font-size: 5vw;
		height: 10vw;
		line-height: 10vw;
		position: relative;
	}
	.back-btn{
		position: absolute;
		left: 0;
		top: 0;
		height: 10vw;
		line-height: 10vw;
		font-size: 6vw;
		padding: 0 10vw 0 2.5vw;
	}
	
	.choose-bar{
		display: flex;
		height: 14vw;
		background-color: white;
	}
	
	.city-btn{
		line-height: 14vw;
		width: 15vw;
		padding: 0 2.5vw;
		text-align: center;
		/* 文本不允许换行 */
		white-space: nowrap;
		overflow: hidden;
		/* 超出范围以...显示 ellipsis */
		text-overflow: ellipsis;
		/* font-size: 3vw; */
		color: gray;
	}
	
	.addr-input-box{
			/* flex-grow 内容自动撑开补充 */
		flex-grow: 1;
		background-color: #edededff;
		box-sizing: border-box;
		margin: 8px;
		padding-left: 2vw;
	}
	.search-input{
		border: none;
		background-color: #edededff;
		font-size: 4vw;
		line-height: 9vw;
		margin-left: 2vw;
	}
	.search-icon{
		position: relative;
		top: 3px;
	}
	.add-list{
		padding: 0;
		list-style: none;
		margin: 0;
	}
	.add-list-item{
		background-color: white;
		margin: 0;
		border-bottom: 1px #eeeeee solid;
		padding: 2vw;
	}
	.add-list-item h4{
		margin: 0;
	}
	.add-list-item p{
		margin: 0;
	}
	.addr-title{
		display: flex;
		justify-content: space-between;
	}
	
	
</style>
