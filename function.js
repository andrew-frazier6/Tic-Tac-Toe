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
// after 9 something would happen

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
}

function reset() {
  if (totalClicks === 9) {
    for (let i = 0; i < box.length; i++) box[i].style.backgroundColor = "white";
    resetGame();
  }
}
