var scrollY = 0;
var distance = 40;
var speed = 25;

window.onscroll = function display() {

		var currentY = window.pageYOffset;
		var bodyHeight = window.innerHeight;
		var yPos = currentY + window.innerHeight;	
		
		var val="currentY=" + currentY + "<br>" + "bodyHeight=" + bodyHeight +"<br>"+ "yPos=" +  yPos
		+ "<br>" + "containerheight=" + document.getElementById("test").offsetHeight;
		
		document.getElementById('display').innerHTML=val;
	
}

function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.getElementById("test").offsetHeight;
	var yPos = currentY + window.outerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',speed);
	

	
	if(yPos >= bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	}
}
function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}