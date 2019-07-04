function iconFilter2(value){
	
	// "5e6955bdd098effd615d144441084118jpeg"
	//https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/
	let suffix2 = ""
	if(value.endsWith("jpeg")){
		suffix2 = 'jpeg'
	}else if(value.endsWith("png")){
		suffix2 = 'png'
	}else if(value.endsWith("jpg")){
		suffix2 = 'jpg'
	}else if(value.endsWith("gif")){
		suffix2 = 'gif'
	}else if(value.endsWith("svg")){
		suffix2 = 'svg'
	}
	
	return  "https://fuss10.elemecdn.com/"+
	value.substr(0,1)+'/'+
	value.substr(1,2)+'/'+
	value.substr(3)+ '.' + suffix2 +
	"?imageMogr/format/webp/thumbnail/568x/"
	
	
}

export {iconFilter2}