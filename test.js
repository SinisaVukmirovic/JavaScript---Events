			// JS Events JavaScript script
var title = document.getElementById("subtitle");

title.onclick = function() {
	alert("You clicked on the subtitle!");
};

////////////////////////////////////////////////////////////////////////////

var div2nd = document.getElementById("box-2");

div2nd.onmouseover = function() {
	alert("You 'moused' over the 2nd box!");
};

////////////////////////////////////////////////////////////////////////////

var content = document.getElementById("content");
var button = document.getElementById("button");

button.onclick = function() {
	if (content.className == "open") {
		//shrink the box
		content.className = "";
		button.innerHTML = "Show more";
		button.style.backgroundColor = "red";
	}
	else {
		//expand the box
		content.className = "open";
		button.innerHTML = "Show less";
		button.style.backgroundColor = "lime";
	}
}

//////////////////////////////////////////////////////////////////////////

var div3rd = document.getElementById("box-3");

function showDiv() {

	div3rd.className = "open";
}

setTimeout(showDiv, 3000);

//////////////////////////////////////////////////////////////////////////

var colorChange = document.getElementById("box-1");

var colors = ["yellow", "lime", "red", "blue"];

var count = 0;


function changeOfColor() {
	if (count >= colors.length) {
		count = 0;
	}

	colorChange.style.background = colors[count];
	count++;
}

var timer = setInterval(changeOfColor, 3000);


colorChange.onclick = function() {
	clearInterval(timer);
}

//////////////////////////////////////////////////////////////////////////

var slider = document.getElementById("slider");

var sliderImg = slider.getElementsByTagName("img")[0];

console.log(sliderImg);

// var insert = slider[0].

var pics = ["img/pic-1.jpg", "img/pic-2.jpg", "img/pic-3.JPG"];

var counter = 0;

function slideShow() {
	if (counter >= pics.length) {
		counter = 0;
	}

	sliderImg.getAttributeNode("src").value = pics[counter];
	counter++;
}

var changeSlide = setInterval(slideShow, 3000);



