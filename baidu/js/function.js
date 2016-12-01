//********************************************/
//12、鼠标的滚轮事件
function mouseWheel(obj,up,down){
	if (obj.attachEvent) {
		obj.attachEvent("onmousewheel",scrollFn);
		//IE opera
	}else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);
		//chrome,safari -webkit-
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		//firefox -moz-
	}

	function scrollFn(e){
	e=e||window.event;
	if (e.preventDefault) {
		e.preventDefault();
	}else{
		e.returnValue=false;
	}
	var f=e.wheelDelta || e.detail;
	if (f==-3 || f==120) {
        if (up) {
        	up();
        };
	}else if (f==3 || f==-120) {
		if (down) {
			down();
		};
	};
}
}



