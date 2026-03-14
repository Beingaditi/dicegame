






document.getElementById("rollBtn").addEventListener("click", function(){

var randomnum = Math.floor(Math.random() * 6) + 1;
var randomnum2 = Math.floor(Math.random() * 6) + 1;

var imgsrc = "images/dice" + randomnum + ".png";
var imgsrc2 = "images/dice" + randomnum2 + ".png";

document.querySelector(".img1").setAttribute("src", imgsrc);
document.querySelector(".img2").setAttribute("src", imgsrc2);


if (randomnum > randomnum2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else if (randomnum2 > randomnum) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}

});


