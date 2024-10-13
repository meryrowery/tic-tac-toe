let gameBoard = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

boardBox = document.querySelectorAll(".board-box");
result = document.querySelector(".result");

boardBox.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleRun(box, index);
  });
});

const handleRun = (box, index) => {
  if (box.textContent === "") {
    box.textContent = currentPlayer;
    gameBoard[index] = currentPlayer;
    console.log(gameBoard);

    if (checkWin(gameBoard, currentPlayer) === true) {
      result.textContent = `${currentPlayer} wins`;
      resetButton = document.createElement("button");
      resetButton.textContent = "Reset Game";
      result.append(resetButton);

      resetButton.addEventListener("click", resetGame);
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
};

function checkWin(board, playerMarker) {
  // Loop through each win condition
  for (let i = 0; i < winConditions.length; i++) {
    let condition = winConditions[i];

    // Check if all three positions in the win condition have the player's marker
    if (
      board[condition[0]] === playerMarker &&
      board[condition[1]] === playerMarker &&
      board[condition[2]] === playerMarker
    ) {
      return true; // Return true if player wins
    }
  }
  return false; // Return false if no win
}

function resetGame() {
  boardBox.forEach((box) => {
    box.textContent = "";
  });
  result.textContent = "";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
}

// resetButton = document.querySelector("button");
// resetButton.addEventListener("click", resetGame);

// for each clck
// 1. check if button is empty, if empty
// 2. assing
// 3. check if move finishes the game

// how to check if move finishes the game:
// we have winConditions
// for each winConition, take slots with indexes from this contion
// e.g. for [0, 1, 2], take gameBoard[0],gameBoard[1], gameBoard[2]
// check if equal, if not, check next winContiion
// if none of the winContions are winning, then continue the game
// if you find a winning combination, finish the game and return  "${gameBoard[0]} is the winner"
