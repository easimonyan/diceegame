var randomNumber1 = Math.floor (Math.random()*6) +1; // random number 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // random dice image (random number + image)
var randomImageSource = "img/" + randomDiceImage; // img/dice1 - img/dice6

var image1 = document.querySelectorAll("img")[0]; //selecting first player image
image1.setAttribute("src", randomImageSource); // getting source of image 

var randomNumber2 = Math.floor (Math.random()*6) +1;
var randomDiceImage2 = "img/" + "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img") [1].setAttribute("src", randomDiceImage2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}

else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}

else {
    document.querySelector("h1").innerHTML = "Draw!"
}