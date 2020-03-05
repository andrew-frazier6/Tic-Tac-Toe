let box = document.querySelectorAll(".box");
let color = "red";
let totalClicks = 0;
let button = document.querySelector("button");
button.addEventListener("click", reset);

function resetGame() {
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", changeColor);
  }
  totalClicks = 0;
}
resetGame();

function changeColor(e) {
  console.dir(e);
  e.target.style.backgroundColor = color;
  totalClicks += 1;
  if (color == "red") {
    color = "blue";
    e.target.removeEventListener("click", changeColor);
  } else {
    color = "red";
    e.target.removeEventListener("click", changeColor);
  }
  redWinner();
  blueWinner();
}

function reset() {
  if (totalClicks === 9) {
    for (let i = 0; i < box.length; i++) box[i].style.backgroundColor = "white";
    resetGame();
  }
}

function redWinner() {
  if (
    box[0].style.backgroundColor == "red" &&
    box[1].style.backgroundColor == "red" &&
    box[2].style.backgroundColor == "red"
  ) {
    alert("Red Wins!");
  }
  if (
    box[3].style.backgroundColor == "red" &&
    box[4].style.backgroundColor == "red" &&
    box[5].style.backgroundColor == "red"
  ) {
    alert("Red Wins!");
  }
  if (
    box[6].style.backgroundColor == "red" &&
    box[7].style.backgroundColor == "red" &&
    box[8].style.backgroundColor == "red"
  ) {
    alert("Red Wins!");
  }
  if (
    box[0].style.backgroundColor == "red" &&
    box[4].style.backgroundColor == "red" &&
    box[8].style.backgroundColor == "red"
  ) {
    alert("Red Wins!");
  }
  if (
    box[2].style.backgroundColor == "red" &&
    box[4].style.backgroundColor == "red" &&
    box[6].style.backgroundColor == "red"
  ) {
    alert("Red Wins!");
  }
  if (
    box[0].style.backgroundColor == "red" &&
    box[3].style.backgroundColor == "red" &&
    box[6].style.backgroundColor == "red"
  ) {
    alert("Red Wins!");
  }
  if (
    box[1].style.backgroundColor == "red" &&
    box[4].style.backgroundColor == "red" &&
    box[7].style.backgroundColor == "red"
  ) {
    alert("Red Wins!");
  }
  if (
    box[2].style.backgroundColor == "red" &&
    box[5].style.backgroundColor == "red" &&
    box[8].style.backgroundColor == "red"
  ) {
    alert("Red wins!");
  }
}

function blueWinner() {
  if (
    box[0].style.backgroundColor == "blue" &&
    box[1].style.backgroundColor == "blue" &&
    box[2].style.backgroundColor == "blue"
  ) {
    alert("Blue Wins!");
  }
  if (
    box[3].style.backgroundColor == "blue" &&
    box[4].style.backgroundColor == "blue" &&
    box[5].style.backgroundColor == "blue"
  ) {
    alert("Blue Wins!");
  }
  if (
    box[6].style.backgroundColor == "blue" &&
    box[7].style.backgroundColor == "blue" &&
    box[8].style.backgroundColor == "blue"
  ) {
    alert("Blue Wins!");
  }
  if (
    box[0].style.backgroundColor == "blue" &&
    box[4].style.backgroundColor == "blue" &&
    box[8].style.backgroundColor == "blue"
  ) {
    alert("Blue Wins!");
  }
  if (
    box[2].style.backgroundColor == "blue" &&
    box[4].style.backgroundColor == "blue" &&
    box[6].style.backgroundColor == "blue"
  ) {
    alert("Blue Wins!");
  }
  if (
    box[0].style.backgroundColor == "blue" &&
    box[3].style.backgroundColor == "blue" &&
    box[6].style.backgroundColor == "blue"
  ) {
    alert("Blue Wins!");
  }
  if (
    box[1].style.backgroundColor == "blue" &&
    box[4].style.backgroundColor == "blue" &&
    box[7].style.backgroundColor == "blue"
  ) {
    alert("Blue Wins!");
  }
  if (
    box[2].style.backgroundColor == "blue" &&
    box[5].style.backgroundColor == "blue" &&
    box[8].style.backgroundColor == "blue"
  ) {
    alert("Blue wins!");
  }
}
