var clickedTime;
var createdTime;
var reactionTime;

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for(var i = 0; i < 6; i++){
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;			
}

function makeBox() {
	createdTime = Date.now();
	
	var time = Math.random();
	time *= 5000;
	
	setTimeout(function() {
		if(Math.random() > 0.5){
			document.getElementById("box").style.borderRadius="100px";
		} else {
			document.getElementById("box").style.borderRadius="0px";
		}
		var top = Math.random();
		top *= 300;
		
		var left = Math.random();
		left *= 500;
		
		document.getElementById("box").style.top=top+"px";
		document.getElementById("box").style.left=left+"px";
		
		document.getElementById("box").style.backgroundColor=getRandomColor();
		document.getElementById("box").style.display="block";
	}, time);
}

document.getElementById("box").onclick=function() {
	this.style.display="none";
	clickedTime = Date.now();
	document.getElementById("time").innerHTML = reactionTime = ((clickedTime - createdTime)/1000);
	makeBox();
}

makeBox();