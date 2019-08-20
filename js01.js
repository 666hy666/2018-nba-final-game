window.onload=function(){	
	function playball(){
		var speed = 20;
		var imgbox = document.getElementById("imgbox");
		imgbox.innerHTML += imgbox.innerHTML;
		var span = imgbox.getElementsByTagName("span");
		var timer1 = window.setInterval(marquee,speed);
		imgbox.onmouseover = function(){
			clearInterval(timer1);
		}
		imgbox.onmouseout = function(){
			timer1=setInterval(marquee,speed);
		};
		function marquee(){
			if(imgbox.scrollLeft > span[0].offsetWidth){
				imgbox.scrollLeft = 0;
			}else{
				++imgbox.scrollLeft;
			}
		}
	}
	playball();
}