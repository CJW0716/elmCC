function iconFilter5(value){
	// "de2627f097b94ec9e287ee427e06a7ebpng"
	//fuss10.elemecdn.com/c/da/03b6234fd576dedaf96fbe7683acbjpeg.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/"
	let suffix5 = ""
	if(value.endsWith("jpeg")){
		suffix5 = 'jpeg'
	}else if(value.endsWith("png")){
		suffix5 = 'png'
	}else if(value.endsWith("jpg")){
		suffix5 = 'jpg'
	}else if(value.endsWith("gif")){
		suffix5 = 'gif'
	}else if(value.endsWith("svg")){
		suffix5 = 'svg'
	}
	
	return "https://fuss10.elemecdn.com/"+
	value.substr(0,1)+'/'+
	value.substr(1,2)+'/'+
	value.substr(3)+ '.' + suffix5 +"?imageMogr/format/webp/thumbnail/750x/"
}
export {iconFilter5}