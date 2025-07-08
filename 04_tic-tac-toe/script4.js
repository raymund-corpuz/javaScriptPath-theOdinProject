const game = document.querySelector(".game");

// Create the 3x3 board buttons
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const box = document.createElement("button");
    box.classList.add("box");
    box.value = [i, j];
    game.appendChild(box);
  }
}

// TICTACTOE LOGIC
const TicTacToe = (function () {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let currentPlayer = "X";
  let moves = 0;
  let gameOver = false;

  function printBoard() {
    console.log("\nCurrent Board:");
    board.forEach((row) => {
      console.log(row.map((cell) => (cell === "" ? "_" : cell)).join("|"));
    });
    console.log("");
  }

  function isWinner(player) {
    // Rows & Columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      )
        return true;

      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      )
        return true;
    }

    // Diagonals
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    )
      return true;

    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    )
      return true;

    return false;
  }

  function isDraw() {
    return moves >= 9 && !gameOver;
  }

  function makeMove(row, col) {
    if (gameOver || board[row][col] !== "") {
      return { valid: false, status: "Invalid move or game is over." };
    }

    board[row][col] = currentPlayer;
    moves++;

    if (isWinner(currentPlayer)) {
      gameOver = true;
      return {
        valid: true,
        winner: currentPlayer,
        gameOver: true,
        board: getBoard(),
      };
    }

    if (isDraw()) {
      gameOver = true;
      return {
        valid: true,
        draw: true,
        gameOver: true,
        board: getBoard(),
      };
    }

    const lastPlayer = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    return {
      valid: true,
      nextPlayer: currentPlayer,
      lastPlayer,
      board: getBoard(),
    };
  }

  function getBoard() {
    return board.map((row) => [...row]);
  }

  return {
    makeMove,
    getBoard,
  };
})();
// TicTacToe.printBoard();

const boxes = document.querySelectorAll(".box");
const myStatus = document.querySelector(".status");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    const [row, col] = e.target.value.split(",").map(Number);
    TicTacToe.makeMove(row, col);

    e.target.textContent = TicTacToe.getBoard()[row][col];
  });
});
