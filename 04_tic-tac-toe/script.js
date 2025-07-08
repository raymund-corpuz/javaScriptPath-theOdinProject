// psuedo code
// Step 1)  Create a 2D array and store it to a variable.

const myArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

// Step 2) Create a Factory of Object IIFE
(function () {})();

// Step 3) When the player one put "X" the Player two will now put "O" this will be a loop
// Step 4) check who is the winner.

const checkWinner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const myChoice = [0, 3, 6];
const sortMyChoice = myChoice.sort();

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const foundAnswer = checkWinner.find((innerArray) =>
  areArraysEqual(innerArray, sortMyChoice)
);

console.log(foundAnswer);
