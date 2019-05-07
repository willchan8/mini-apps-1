// build a single-page app for a simple Tic Tac Toe game, where:

// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay

// Each square is identified by the tag name 'td'. squares is the an of all square elements
var squares = document.getElementsByTagName('td');

// Reset button element
var resetButton = document.getElementsByClassName('resetButton')[0];


// Keep track of player's turn
var playersTurn = {
  playerOne: true,
  playerTwo: false 
};


// Track the winner
var winner = '';


// Callback for adding click event listener for each square and switching between each player's turn
var callback = function () {
  if (playersTurn.playerOne && this.innerHTML === '') {
    this.innerHTML = 'X';
    checkWin(squares, this.innerHTML);
    if (winner) {
      return;
    }
    playersTurn.playerOne = false;
    playersTurn.playerTwo = true;
  } 
  else if (playersTurn.playerTwo === true && this.innerHTML === '') {
    this.innerHTML = 'O';
    checkWin(squares, this.innerHTML);
    if (winner) {
      return;
    }
    playersTurn.playerTwo = false;
    playersTurn.playerOne = true;
  }
}


// Start Game Function
var startGame = function () {
  // Add click event listeners to each click event
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', callback);
  }
  // Clear the winner
  winner = '';
}


// Reset Game
var resetGame = function () {
  // Clear all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }
  // Restart game by re-enabling added event listeners
  startGame();
}

// Reset Button Event Listener
resetButton.addEventListener('click', resetGame);


// Check rows
var checkRows = function (squares, currentPiece) {
  for (var i = 0; i < 9; i += 3) {
    if (((squares[i].innerHTML === squares[i + 1].innerHTML) && (squares[i + 1].innerHTML === squares[i + 2].innerHTML)) &&
        ((squares[i].innerHTML !== '') && (squares[i + 1].innerHTML !== '') && (squares[i + 2].innerHTML !== ''))) {
        winner = currentPiece;
        return;
    }
  }
};


// Check columns
var checkColumns = function (squares, currentPiece) {
  for (var i = 0; i < 3; i++) {
    if (((squares[i + 0].innerHTML === squares[i + 3].innerHTML) && (squares[i + 3].innerHTML === squares[i + 6].innerHTML)) &&
        ((squares[i + 0].innerHTML !== '') && (squares[i + 3].innerHTML !== '') && (squares[i + 6].innerHTML !== ''))) {
        winner = currentPiece;
        return;
    }
  }
};


// Check diagonals
var checkDiagonal = function (squares, currentPiece) {
  if (((squares[0].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[8].innerHTML)) &&
    ((squares[0].innerHTML !== '') && (squares[4].innerHTML !== '') && (squares[8].innerHTML !== ''))) {
    winner = currentPiece;
    return;
  }

  if (((squares[2].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[6].innerHTML)) &&
    ((squares[2].innerHTML !== '') && (squares[4].innerHTML !== '') && (squares[6].innerHTML !== ''))) {
    winner = currentPiece;
    return;
  }
};


// Check if a player wins
var checkWin = function (squares, currentPiece) {
  checkRows(squares, currentPiece);
  checkColumns(squares, currentPiece);
  checkDiagonal(squares, currentPiece);
  if (winner) {
    alert('Player ' + winner + ' wins!');
    for (var i = 0; i < squares.length; i++) {
      squares[i].removeEventListener('click', callback);
    }
    return;
  }
};

// Start Game
startGame();