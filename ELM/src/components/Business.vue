<template>
	<div class="shop">
		
		<div class="shop-first">
			<p class="f-1">配送信息</p>
			<p class="f-2">由商家配送提供配送，约53分钟送达，距离3.5km</p>
			<p class="f-2">配送费￥15</p>
		</div>
		<div class="shop-second">
			<p class="f-1">商家服务</p>
			<span class="s-2">
				<p class="s-a f-2"><section>票</section></p>
				<p class="s-b f-2">该商家支持开发票，请在下单时填写好发票抬头</p>
				
			</span>
			
		</div>
		<div class="shop-third">
			<p class="f-1">商家实景</p>
			<div class="shop-img">
				<img src="//fuss10.elemecdn.com/b/f0/4121bb39ac8b36440d15ba338a3a4jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/" alt="">
				<img src="//fuss10.elemecdn.com/b/f0/4121bb39ac8b36440d15ba338a3a4jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/" alt="">
				<img src="//fuss10.elemecdn.com/b/f0/4121bb39ac8b36440d15ba338a3a4jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/" alt="">
				
			</div>
			
		</div>
		
		<div class="shop-fourth">
			<p class="f-1">商家信息</p>
			<p class="f-2">海底捞始终坚持“无公害，一次性”的选料和底料原则， 海底捞总部大厦 严把原料关，配料关。十九年来历经市场和顾客的检验，成功的打造出信誉度高，颇具四川火锅特色的火锅品牌。</p>
		</div>
		<div class="shop-five">
			<ul>
				<li class="li1">
					<h5>品类</h5>
					<p class="f-2">小火锅</p>
				</li>
				<li class="li2">
					<h5>商家电话</h5>
					<p class="f-2">15565395965&nbsp;></p>
				</li>
				<li class="li3">
					<h5>地址</h5>
					<p class="f-2">郑州市二七区齐礼阎西路南赵庄北1幢1层117号</p>
				</li>
				<li class="li4">
					<h5>营业时间</h5>
					<p class="f-2">09:00-23:00</p>
				</li>
				<li class="li5">
					<h5>营业性质</h5>
					<p class="f-2">></p>
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style scoped>
	
	.shop{
		width: 100%;
	}
	.shop-first,.shop-second,.shop-third,.shop-fourth{
		width: 95%;
		height: 25vw;
		margin: 0 auto;
		margin-bottom: 2vw;
	}
	.shop-first p{
		width: 100%;
		height: 33%;
		line-height: 200%;
	}
	.f-1{
		color:#000000;
		font-size: 4vw;
		font-weight: 700;
		width: 100%;
		height: 10vw;
		line-height: 10vw;
	}
	.f-2{
		color: #999999;
		font-size: 3.5vw;
	}
	
	.s-2{
		width: 100%;
		height: 12.5vw;
		display: flex;
		line-height: 12.5vw;
	}
	.s-a section{
		width: 5vw;
		height: 4vw;
		border: 1px solid lightgray;
		margin: 3.5vw 2vw 3.5vw 0;
		line-height: 4vw;
		text-align: center;
	}

	.shop-img{
		width: 100%;
		height: 15vw;
		
	}
	.shop-img img{
		width: 20%;
		height: 100%;
		margin-right: 3vw;
	}
	 .shop-five p,h5{
		margin: 0;
		height: 100%;
		line-height: 400%;
	}
	.shop-five{
		width: 95%;
		height: 100vw;
		margin: 0 auto;
	}
	ul{
		width: 100%;
		height: 100%;
	}
	.shop-five li{
		width: 100%;
		height: 15vw;
		display: flex;
		justify-content: space-between;
	}
</style>
