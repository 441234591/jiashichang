var formatNumber = function(num) {
	let res = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	return res;
}

$("#tohome").on("click",function(){
	window.location.href='./index.html'
})

function toRemfontSize(res){
	const clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if (!clientWidth) return;
	let fontSize = clientWidth / 4096;
	//console.log(fontSize,res*fontSize)
	return res*fontSize;
}


function timeOutGo(){
	setTimeout(function(){
		window.location.href="./demo1.html"
	},600*1000)
}

(function(){
	setInterval(function(){
		let date = new Date();
		let year  = date.getFullYear();
		let month = date.getMonth()+1;
		let day = date.getDate();
		let hour =date.getHours();
		let min = date.getMinutes();
		let sec = date.getSeconds();
		let dateStr = "";
		let timeStr = "";
		if(month<10){
			dateStr = ""+year+"-0"+month;
		}else{
			dateStr = ""+year+"-"+month;
		}
		if(day<10){
			dateStr = dateStr+"-0"+day;
		}else{
			dateStr = dateStr+"-"+day;
		}

		let week="";
		switch(date.getDay()) {
			case 1:
				week = '星期一';
				break;
			case 2:
				week = '星期二';
				break;
			case 3:
				week = '星期三';
				break;
			case 4:
				week = '星期四';
				break;
			case 5:
				week = '星期五';
				break;
			case 6:
				week = '星期六';
				break;
			case 0:
				week = '星期日';
				break;
		}
		
		if(hour<10){
			timeStr = ""+"0"+hour;
		}else{
			timeStr = ""+hour;
		}
		if(min<10){
			timeStr = timeStr+":0"+min;
		}else{
			timeStr = timeStr+":"+min;
		}
		if(sec<10){
			timeStr = timeStr+":0"+sec;
		}else{
			timeStr = timeStr+":"+sec;
		}

		$(".date_str").text(dateStr+" "+week);
		$(".time_str").text(timeStr);
		//console.log(dateStr+"---"+timeStr)
	},1000);
})();