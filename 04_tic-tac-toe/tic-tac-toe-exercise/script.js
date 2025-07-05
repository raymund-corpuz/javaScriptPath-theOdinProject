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
    const [row, col] = e.target.value.split(",");
    const stamp = document.createElement("h1");
    stamp.textContent = currentPlayer;

    box.appendChild(stamp);
    checkWinner(row, col);
  });
});

function checkWinner(row, col) {
  board[row][col] = currentPlayer;
  const status = document.querySelector(".status");
  console.log(status);
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === "👌" && board[i][1] === "👌" && board[i][2] === "👌") ||
      (board[0][i] === "👌" && board[1][i] === "👌" && board[2][i] === "👌")
    ) {
      status.textContent = `🎉Player ${currentPlayer} Wins`;
      return;
    }
    if (
      (board[i][0] === "👎" && board[i][1] === "👎" && board[i][2] === "👎") ||
      (board[0][i] === "👎" && board[1][i] === "👎" && board[2][i] === "👎")
    ) {
      status.textContent = `🎉Player ${currentPlayer} Wins`;
      return;
    }
  }

  currentPlayer = currentPlayer === "👌" ? "👎" : "👌";
  console.log(board);
}
