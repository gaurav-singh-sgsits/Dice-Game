var player1 = Math.random();
var player2 = Math.random();

player1 = Math.floor(player1 * 6) + 1;
player2 = Math.floor(player2 * 6) + 1;

console.log(player1);
console.log(player2);

var diceImgAdd1 = "images/dice" + player1 + ".png";
var diceImgAdd2 = "images/dice" + player2 + ".png";

//update the src
document.querySelector(".img1").setAttribute("src", diceImgAdd1);
document.querySelector(".img2").setAttribute("src", diceImgAdd2);

//check if they won or not
function win(player1, player2) {
  if (player1 > player2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
  } else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }
}

win(player1, player2);
