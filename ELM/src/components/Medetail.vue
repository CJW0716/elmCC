<template>
	<div class="medetail">
		<section class="me-1">
			<a href="#">
				<div class="image">
				<img src="../assets/icons/weizhi.png" alt="">
				</div>
				<div>
					<span>我的地址</span>
					<p>></p>
				</div>
			</a>
		</section>
		<section class="me-2">
			<a href="#">
				<div class="image">
				<img src="../assets/icons/jinbishangchang.png" alt="">
				</div>
				<div>
					<span>金币商城</span>
					<p>></p>
				</div>
			</a>
			<a href="#">
				<div class="image">
				<img src="../assets/icons/fenxiang.png" alt="">
				</div>
				<div>
					<span>分享拿20元现金</span>
					<p>></p>
				</div>
			</a>
		</section>
		<section class="me-3">
			<a href="#">
				<div class="image">
				<img src="../assets/icons/kefu.png" alt="">
				</div>
				<div>
					<span>我的客服</span>
					<p>></p>
				</div>
			</a>
			<a href="#">
				<div class="image">
				<img src="../assets/icons/xiazaieliaomaapp.png" alt="">
				</div>
				<div>
					<span>下载饿了么APP</span>
					<p>></p>
				</div>
			</a>
			<a href="#">
				<div class="image">
				<img src="../assets/icons/guize.png" alt="">
				</div>
				<div>
					<span>规则中心</span>
					<p>></p>
				</div>
			</a>
		</section>
	</div>
</template>

<script>
	export default {
		name: "Medetail"

	}
</script>

<style scoped>
	body {
		margin: 0;
	}
	section {
		width: 100%;
		margin: 15px auto;
	}
	.me-1{
		height: 42px;
	}
	.me-2{
		height: 84px;
	}
	.me-3{
		height: 126px;
	}
	*{
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		width: 100%;
		height: 42px;
		display: flex;
		background-color: white;
		border-bottom: 1px solid white;
	}
	.image{
		width: 35px;
		height: 38px;
		margin: 0;
	}
	.image img{
		width: 25px;
		height: 25px;
		line-height: 28px;
		text-align: center;
		margin: 5px auto;
	}
	a>div{
		width: calc(100%-38px);
		height: 38px;
		display: flex;
		justify-content: space-around;
	}
	a span{
		width: 240px;
		height: 38px;
		line-height: 38px;
		color: black;
		margin-left: 10px;
	}
	a p{
		width: 38px;
		height: 38px;
		line-height: 38px;
		margin: 0;
		text-align: center;
		color: black;
	}
</style>
