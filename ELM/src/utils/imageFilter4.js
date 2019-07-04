function iconFilter4(value){
	let suffi5 =''
	if(value >1000){
		suffi5= (value/1000).toFixed(2)+'km'
	}else{
		suffi5 = value + 'm'
	}
	return suffi5
}
export {iconFilter4}