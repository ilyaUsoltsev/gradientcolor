var css=document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('button');
css.innerHTML = "linear-gradient(to right,#00ff00,#00ffff);";

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+','
	+color2.value
	+')';
	css.textContent = body.style.background+';';
}

function random16(){
	items = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	return items[Math.floor(Math.random()*items.length)];
}

function hexcolor(){
	return '#'+random16()+random16()+random16()+random16()+random16()+random16();
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

button.addEventListener('click', function(){
	color1.value = hexcolor();
	color2.value = hexcolor();
	setGradient(); 
})