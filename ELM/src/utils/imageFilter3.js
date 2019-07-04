function iconFilter3(value){
	
	// b02ae42011f4f2fb3ae832e96ca7d397jpeg
	//https://fuss10.elemecdn.com/f/b7/a8d6c61b6f26b0d9dd6c869a22cd9jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/
	let suffix3 = ""
	if(value.endsWith("jpeg")){
		suffix3 = 'jpeg'
	}else if(value.endsWith("png")){
		suffix3 = 'png'
	}else if(value.endsWith("jpg")){
		suffix3 = 'jpg'
	}else if(value.endsWith("gif")){
		suffix3 = 'gif'
	}else if(value.endsWith("svg")){
		suffix3 = 'svg'
	}
	
	return  "https://fuss10.elemecdn.com/"+
	value.substr(0,1)+'/'+
	value.substr(1,2)+'/'+
	value.substr(3)+ '.' + suffix3 +
	"?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
	
	
}

export {iconFilter3}