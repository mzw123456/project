window.onload = function() {
	var oA = document.getElementsByTagName("a")[0];
	var timer;
	var speed = 0;
	var flag = true;
	window.onscroll = function() {
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrolltop >= 600) {
			oA.style.display = "block";
		} else {
			oA.style.display = "none";
		}
		if (!flag) {
			clearInterval(timer);
		}
		flag = false;
	}
	oA.onclick = function() {
		console.log(1)
		timer = setInterval(function() {
			var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
			speed = scrolltop / 5;
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop - speed;
			if (scrolltop == 0) {
				clearInterval(timer);
			}
			flag = true;
		}, 50)
	}
}
