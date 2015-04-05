/*Use to go to specified div  (up/down)*
  call using autoScrollTo("target id") in html
 */


var scrollY = 0; //initialize variable
var distance = 30; //distance per action in px
var speed = 5; //speed(ms)

function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.scrollHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',speed);
	//going down
	if (currentY < targetY) {
		if(yPos >= bodyHeight){
			clearTimeout(animator);
		} else {
			if(currentY < targetY-distance){
				scrollY = currentY+distance;
				window.scroll(0, scrollY);
			} else {
				window.scroll(0, targetY);
				clearTimeout(animator);
			}
		}
	}

	//going up
	else if (currentY > targetY) {
		if (currentY > targetY + distance) {
			scrollY = currentY - distance;
			window.scroll(0, scrollY);
				
		}	
		else {
				window.scroll(0, targetY);
				clearTimeout(animator);
		}
	}
	
}