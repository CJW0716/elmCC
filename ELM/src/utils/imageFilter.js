function iconFilter(value){
// 	https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/ 
// 	 7d8a867c870b22bc74c87c348b75528djpeg


	let suffix = ''
	if(value.endsWith("jpeg")){
		suffix = 'jpeg'
	}else if(value.endsWith("png")){
		suffix = 'png'
	}else if(value.endsWith("jpg")){
		suffix = 'jpg'
	}else if(value.endsWith("gif")){
		suffix = 'gif'
	}else if(value.endsWith("svg")){
		suffix = 'svg'
	}
	
	return "https://fuss10.elemecdn.com/" + 
		   value.substr(0,1) + '/' +
		   value.substr(1,2) + '/' + 
		   value.substr(3) + '.' + suffix + 
		   "?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"

}

export {iconFilter}



