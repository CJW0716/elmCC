<template>
	<div id="app">
		<transition>
			<keep-alive>
				<router-view />
			</keep-alive>
		</transition>
			<van-tabbar v-model="activeIndex" v-show="showTabBar">
				<van-tabbar-item to="/">
					<img slot="icon" :src="activeIndex==0?homePicH : homePic" alt="">
					<span>首页</span>
				</van-tabbar-item>
				<van-tabbar-item to="/find">
					<img slot="icon" :src="activeIndex==1?findPicH : findPic" alt="">
					<span>发现</span>
				</van-tabbar-item>
				<van-tabbar-item to="/order">
					<img slot="icon" :src="activeIndex==2?orderPicH : orderPic" alt="">
					<span>订单</span>
				</van-tabbar-item>
				<van-tabbar-item to="/me">
					<img slot="icon" :src="activeIndex==3?mePicH : mePic" alt="">
					<span>我的</span>
				</van-tabbar-item>

			</van-tabbar>
		
	</div>
</template>
<script>
	import homePic from "./assets/icons/home.png"
	import homePicH from "./assets/icons/home-h.png"
	import findPic from "./assets/icons/find.png"
	import findPicH from "./assets/icons/find-h.png"
	import mePic from "./assets/icons/me.png"
	import mePicH from "./assets/icons/me-h.png"
	import orderPic from "./assets/icons/order.png"
	import orderPicH from "./assets/icons/order-h.png"
	export default {
		data() {
			return {
				homePic,
				homePicH,
				findPic,
				findPicH,
				mePic,
				mePicH,
				orderPic,
				orderPicH,
				activeIndex: 0,
				showTabBar:true,
				aniType:""
			}
		},
		watch: {
			$route(to, from) {
				
				var tolevel = to.path.split('/').length
				var fromlevel = from.path.split('/').length
				if(tolevel>fromlevel){
					this.aniType = "pagein"
				}else if(tolevel<fromlevel){
					this.aniType = "pageout"
				}else {
					this.aniType=""
				}
				
				if(tolevel > 2){
					this.showTabBar =false
				}else{
					this.showTabBar = true
				}
				
				if (to.path == '/') {
					this.activeIndex = 0
				} else if (to.path == '/find') {
					this.activeIndex = 1
				}else if (to.path == '/order') {
					this.activeIndex = 2
				} else if (to.path == '/me') {
					this.activeIndex = 3
				} 

			}

		}
	}
</script>

<style>
	/* 进入动画 */
	.pagein-enter {

		left: 100%;
	}
	.pagein-enter-active,.pagein-leave-active {
		position: absolute;
		transition: all 0.7s;
		width: 100%;
		/* top: 0; */
		overflow: hidden;
	}
	.pagein-enter-to{
		left: 0;
	}
	.pagein-leave{
		left: 0;
	}
	.pagein-leave-to{
		left: -100%;
	}
	/* 离场动画 */
	.pageout-enter{
		left: -100%;
	}
	.pageout-enter-active,.pageout-leave-active{
		position: absolute;
		transition: all 0.7s;
		/* top: 0; */
		width: 100%;
		overflow: hidden;
	}
	.pageout-leave-active{
		z-index: 1000;
	}
	.pageout-enter-to{
		left: 0;
	}
	.pageout-leave{
		left: 0;
	}
	.pageout-leave-to{
		left:100%
	}
</style>
