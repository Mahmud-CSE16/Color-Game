var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

/*var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");*/
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		/*if(this.textContent == "Easy"){
			numSquare = 3;
		}
		else{
			numSquare = 6;
		}*/
		this.textContent === "Easy"? numSquare = 3 : numSquare = 6;

		reset();

	})
}

resetButton.addEventListener("click",function(){
	reset();
});

function reset(){
	this.textContent = "New clolors";
	messageDisplay.textContent="";
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block"
			squares[i].style.backgroundColor = colors[i];
	 	}else{
	 		squares[i].style.display = "none"
	 	}
	}
	h1.style.backgroundColor="steelblue";
}


/*easyBtn.addEventListener("click",function(){
	messageDisplay.textContent="";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
	 	}else{
	 		squares[i].style.display = "none"
	 	}
	}
});

hardBtn.addEventListener("click",function(){
	messageDisplay.textContent="";
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquare=6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block"
	}
});
*/


for(var i = 0 ; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(pickedColor===clickedColor){
		   messageDisplay.textContent = "Correct!";
		   changeColors(clickedColor);
		   h1.style.backgroundColor=pickedColor;
		   resetButton.textContent = "Play Again"
		}else{
			messageDisplay.textContent = "Try again";
			this.style.backgroundColor = "#232323";
		}
	})
}


function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0;i<num;i++){
	  arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}