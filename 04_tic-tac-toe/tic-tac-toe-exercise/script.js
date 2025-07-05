const container = document.querySelector(".container");

const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "👌";

function createBoxes() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const boxes = document.createElement("button");
      boxes.classList.add("boxes");
      container.appendChild(boxes);
      boxes.value = [row, col];
    }
  }
}
createBoxes();

const boxes = document.querySelectorAll(".boxes");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log("click", e.target.value);
    const stamp = document.createElement("h1");
    stamp.textContent = currentPlayer;
    currentPlayer = currentPlayer === "👌" ? "👎" : "👌";
    box.appendChild(stamp);
  });
});

function checkWinner(row, col) {
  board[row][col] = currentPlayer;
}
