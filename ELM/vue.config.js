module.exports={
	
	devServer:{
		
		proxy:{
			'/ele':{
				target:"https://h5.ele.me",
				ws:false,
				changeOrigin:true,
				pathRewrite:{
					"^/ele":""
				},
				// cookieDomainRewrite 转发请求的过程中将cookie
				cookieDomainRewrite:{
					"*":"127.0.0.1"
				}
			},
			'/geo':{
				target:"https://api.map.baidu.com",
				ws:false,
				changeOrigin:true,
				pathRewrite:{
					"^/geo":""
				},
				// cookieDomainRewrite 转发请求的过程中将cookie
				cookieDomainRewrite:{
					"*":"127.0.0.1"
				}
			}
		}
	}
}