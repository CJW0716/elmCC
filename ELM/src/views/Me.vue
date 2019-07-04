<template>
	<div id="myself">
		<section>
			<div class="myself-a">
				<div class="myself-1">
					<img src="../assets/icons/avatar-holder.png" alt="" class="myself-1-a">
				</div>
				<router-link :to="'/me/login'">
					<div class="myself-2">
						<p class="myself-2-a">登录/注册</p>
						<p class="myself-2-b">登录后享受更多特权</p>
					</div>
				</router-link>
				<span class="myself-3">></span>
			</div>

		</section>
		<div class="myself-b">
			<a href="#">
				<p class="myself-b-1">
					<img src="../assets/icons/hongbao.png" alt=""></p>
				<p class="myself-b-2">红包</p>
			</a>
			<a href="#">
				<p class="myself-b-1"><img src="../assets/icons/jinbi.png" alt=""></p>
				<p class="myself-b-2">金币</p>
			</a>
		</div>
		<Medetail></Medetail>
		
	</div>
</template>

<script>
	import Medetail from '../components/Medetail.vue'
	export default {
		components: {
			Medetail
		}
	}
</script>


<style scoped>
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
	}
	a{
		text-decoration: none;
	}
	#myself section {
		width: 100%;
		height: 120px;
		background-color: #0085ff;

	}
	#myself{
		background-color: rgb(245,245,245);
		width: 100%;
		
		
	}
	.myself-a {
		width: 320px;
		height: 100px;
		margin: 0 auto;
		display: flex;
		padding-top: 25px;
	}

	.myself-1-a {
		width: 70px;
		height: 70px;
		border-radius: 50%;
	}

	.myself-2 {
		margin: 0;
		width: 150px;
		height: 70px;
		color: white;
	}
	

	.myself-2 p {
		margin: 0;
		height: 35px;
		width: 150px;
		line-height: 35px;
	}

	.myself-2-a {
		font-size: 22px;
	}

	.myself-2-b {
		font-size: 15px;
	}

	.myself-3 {
		width: 30px;
		height: 70px;
		text-align: center;
		line-height: 70px;
		font-size: 20px;
		color: white;
	}
	.myself-b {
		width: 100%;
		height: 80px;
		margin: 0;
		display: flex;
		justify-content: space-around;
	}

	.myself-b a {
		color: black;
		width: 50%;
		height: 70px;
		margin: 0 auto;
		text-align: center;
		padding-top: 10px;
		border: 0.1px lightgray solid;

	}

	.myself-b img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}

	.myself-b p {
		margin: 0;
	}

	.myself-b-2 {
		height: 20px;
		font-size: 15px;
	}
</style>
