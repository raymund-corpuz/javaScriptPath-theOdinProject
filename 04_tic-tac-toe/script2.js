const TicTacToe = (function () {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let currentPlayer = "X";
  let moves = 0;

  function printBoard() {
    console.log("\nCurrentBoard:");
    board.forEach((row) => {
      console.log(row.map((cell) => (cell === "" ? "_" : cell)).join("|"));
    });

    console.log("");
  }

  function isWinner(player) {
    //Rows & columns
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
    return moves >= 9;
  }

  function makeMove(row, col) {
    if (board[row][col] !== "") {
      console.log("Invalid move! Cell is already occupied");
      return;
    }

    board[row][col] = currentPlayer;
    moves++;

    printBoard();

    if (isWinner(currentPlayer)) {
      console.log(`🎉 Player ${currentPlayer} wins!`);
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log(`Now its Player ${currentPlayer}'s turn`);
  }

  function getBoard() {
    return board.map((row) => [...row]);
  }

  return {
    makeMove,
    getBoard,
    printBoard,
  };
})();

TicTacToe.printBoard();
