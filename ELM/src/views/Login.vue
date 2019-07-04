<template>
	<div class="root">
		<div class="logo-box">
			<img src="../assets/icons/logo.png" alt="">
		</div>

		<div class="form-box">
			<input type="text" class="tel" placeholder="手机号" v-model="tel">
			<button class="cap-btn" :class="{'active':!capDisable}" :disabled="capDisable" @click="capBtnClick">{{countdown?("已发送(" + countdown +"s)"):"获取验证码"}}</button>
			<input type="text" class="captcha" placeholder="验证码" v-model="cap" ref="cap">
			<p>新用户登录即自动注册，并表示已同意
				<a class="link" href="https://h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&key=ruleQue18">《用户服务协议》</a></p>

			<van-button type="primary" class="login-btn" @click="loginBtnClick">登录</van-button>

		</div>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				capDisable:true,
				tel:'',
				countdown:0,
				timer:null,
				cap:''
			}
		},
		methods:{
			loginBtnClick(){
				
				if (!this.cap){
					// focus() 如果没有输入验证码，输入框获取焦点
					this.$refs.cap.focus()
				}else{
					
					this.http.post('/ele/restapi/eus/login/login_by_mobile',{
						mobile:this.tel,
						scf:'ms',
						validate_code:this.cap,
						validate_token:localStorage.getItem('validate_token')
					})
					.then(res=>{
						console.log(res)
						// 登陆成功跳转首页
						if(res.data.user_id){
							localStorage.setItem('user_id', res.data.user_id)
							this.$router.push('/')
						}else{
							
							alert(res.data.message)
						}
					})
					
				}
			},
			capBtnClick(){
				this.http.post('/ele/restapi/eus/login/mobile_send_code',{
					captcha_hash:"",
					captcha_value:"",
					mobile:this.tel,
					scf:"ms"
				})
				.then(res=>{
					// 将返回的验证码token存储
					localStorage.setItem('validate_token',res.data.validate_token)
					console.log(localStorage.getItem('validate_token'))
				})
	
				// 倒计时效果
				this.capDisable = true
				this.countdown = 30
				this.timer = setInterval(()=>{
					
					this.countdown -- 
					if (this.countdown == 0){
						this.capDisable = false
						clearInterval(this.timer)
						this.timer = null
						
					}
					
				},1000)
				
	
			}
		},
		watch:{
			tel(to,from){
				console.log(to,from)
				if (to.length >11){
					this.tel = from
				}
				// js使用正则表达式判断手机号是否符合规则
				let telRe = /^1[356789]\d{9}/
				if (telRe.test(this.tel)){
					this.capDisable = false
				}else{
					this.capDisable = true
				}
				
				
			}
		}
	}
</script>

<style scoped>
	.root {
		background: white;
		display: flex;
		flex-direction: column;
	}

	.logo-box {
		text-align: center;
		padding-top: 40px;
	}

	.logo-box img {
		height: 58px;
	}

	.form-box {
		width: 300px;
		margin: 20px auto;
		font-size: 14px;
		position: relative;
		color: #999;
	}

	.tel,
	.captcha {
		width: 100%;
		margin-bottom: 20px;
		height: 45px;
		border: 1px #dddddd solid;
		color: #333;
		border-radius: 4px;
		padding-left: 10px;
	}

	.tel:focus,
	.captcha:focus {
		border: 1px #2395ff solid;
	}

	.cap-btn {
		border: none;
		background-color: transparent;
		color: #ccc;
		position: absolute;
		right: 0;
		top: 0;
		height: 45px;
	}

	.active {
		color: blue;
	}

	.link {
		color: #2395ff;
	}

	.login-btn {
		width: 100%;
	}
</style>
