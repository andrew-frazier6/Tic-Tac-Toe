let box = document.querySelectorAll(".box");
let color = "red";

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", changeColor);
  function changeColor() {
    box[i].style.backgroundColor = color;
    if (color == "red") {
      color = "blue";
      box[i].removeEventListener("click", changeColor);
    } else {
      color = "red";
      box[i].removeEventListener("click", changeColor);
    }
  }
}
