<template>
	<div class="search">
		<div class="search-a">
			<div class="a-top">

				<section class="top-1">
					<span class="top-1-top">金币商城</span>
					<span class="top-1-bottom">0元购物在这里</span>
				</section>

				<section class="top-2">
					<div class="top-2-left">
						<span class="top-2-top">推荐有奖</span>
						<span class="top-2-bottom">20元现金拿不停</span>
					</div>
					<div class="top-2-right">
						<img src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/" alt="">
					</div>
				</section>


			</div>
			<div class="a-bootom">

				<section class="bottom-1">
					<img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="">
				</section>

				<section class="bottom-2">
					<div class="bottom-2-left">
						<span class="bottom-2-top">优惠周边</span>
						<span class="bottom-2-bottom">领取口碑好券</span>
					</div>
					<div class="bottom-2-right">
						<img src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" alt="">
					</div>
				</section>

			</div>

		</div>
		<Estimate></Estimate>
	</div>

</template>

<script>
	import Estimate from '../components/Estimate.vue'
	export default {
		components:{
			Estimate
		}
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	body {
		margin: 0;
	}

	.search-a {
		width: 100%;
		margin: 0;
		display: flex;
		flex-direction: column;
	}

	.a-top,
	.a-bootom {
		width: 100%;
		height: 15vh;
		display: flex;


	}
	.top-1,.bottom-1{
		border-right:1px solid #ededed;
	}
	.top-2{
		border-bottom: 1px solid #ededed;
	}
	.top-1,
	.top-2-left,
	.bottom-2-left {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.top-2-left {
		width: 60% !important;
	}

	.top-1-top,
	.top-1-bottom,
	.top-2-top,
	.top-2-bottom,.bottom-2-top,.bottom-2-bottom{
		width: 100%;
		height: 50%;
		line-height: 200%;
		margin: 0 5px;
	}

	.top-1-top {
		font-size: 18px;
		color: rgb(255, 153, 0);
	}

	.top-1-bottom,
	.top-2-bottom ,.bottom-2-bottom{
		color: #999;
		font-size: 15px;
	}
	.bottom-2-top{
		font-size: 18px;
		color: rgb(237, 102, 96);
	}
	img {
		width: 12vw;
		height: 9vh;
		margin: 10px 5px;
	}

	.top-2 ,.bottom-2{
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}

	.top-2-top {
		font-size: 18px;
		color: rgb(27, 169, 225);
	}

	.bottom-1 {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: flex-end;
	}
	.bottom-1 img{
		width: 40%;
		height: 70%;
		margin: 5px 10px;
	}
	
</style>
