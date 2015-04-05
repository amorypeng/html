var repArray = document.querySelectorAll('.rep');
var lbArray = document.querySelectorAll('.lb');
var resultsArray = document.querySelectorAll('.result');

function listenerForI(i) {
    repArray[i].addEventListener('input', function () {
        resultsArray[i].textContent = repMaxCalc(repArray[i].value, lbArray[i].value);
    }, false);

    lbArray[i].addEventListener('input', function () {
        resultsArray[i].textContent = repMaxCalc(repArray[i].value, lbArray[i].value);
    }, false);
}

for (var i = 0; i < repArray.length; i++) {
    listenerForI(i);
}

function repMaxCalc(r,w) {
	if (r <= 37) {
		return Math.round(w * 36/(37-r));
	} else {
		return Math.round( w * (1 + r/30));
	}		
}