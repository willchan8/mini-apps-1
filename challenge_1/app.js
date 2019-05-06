// build a single-page app for a simple Tic Tac Toe game, where:

// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay

// Each square is identified by the tag name 'td'
var squares = document.getElementsByTagName('td');

// Keep track of player's turn
var playersTurn = {
  playerOne: true,
  playerTwo: false 
};

// Check rows
var checkRows = function (squares, currentPiece) {
  if (((squares[0].innerHTML === squares[1].innerHTML) && (squares[1].innerHTML === squares[2].innerHTML)) &&
      ((squares[0].innerHTML !== '') && (squares[1].innerHTML !== '') && (squares[2].innerHTML !== ''))) {
        alert(currentPiece + ' is the winner!');
        return;
      }
  if (((squares[3].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[5].innerHTML)) &&
      ((squares[3].innerHTML !== '') && (squares[4].innerHTML !== '') && (squares[5].innerHTML !== ''))) {
        alert(currentPiece + ' is the winner!');
        return;
      }
  if (((squares[6].innerHTML === squares[7].innerHTML) && (squares[7].innerHTML === squares[8].innerHTML)) &&
      ((squares[6].innerHTML !== '') && (squares[7].innerHTML !== '') && (squares[8].innerHTML !== ''))) {
        alert(currentPiece + ' is the winner!');
        return;
      }
};

// Check columns
var checkColumns = function (squares, currentPiece) {
  if (((squares[0].innerHTML === squares[3].innerHTML) && (squares[3].innerHTML === squares[6].innerHTML)) &&
      ((squares[0].innerHTML !== '') && (squares[3].innerHTML !== '') && (squares[6].innerHTML !== ''))) {
        alert(currentPiece + ' is the winner!');
        return;
      }
  if (((squares[1].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[7].innerHTML)) &&
      ((squares[1].innerHTML !== '') && (squares[4].innerHTML !== '') && (squares[7].innerHTML !== ''))) {
        alert(currentPiece + ' is the winner!');
        return;
      }
  if (((squares[2].innerHTML === squares[5].innerHTML) && (squares[5].innerHTML === squares[8].innerHTML)) &&
      ((squares[2].innerHTML !== '') && (squares[5].innerHTML !== '') && (squares[8].innerHTML !== ''))) {
        alert(currentPiece + ' is the winner!');
        return;
      }
};

// Check diagonal
var checkDiagonal = function (squares, currentPiece) {
  if (((squares[0].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[8].innerHTML)) &&
  ((squares[0].innerHTML !== '') && (squares[4].innerHTML !== '') && (squares[8].innerHTML !== ''))) {
    alert(currentPiece + ' is the winner!');
    return;
  }

  if (((squares[2].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[6].innerHTML)) &&
  ((squares[2].innerHTML !== '') && (squares[4].innerHTML !== '') && (squares[6].innerHTML !== ''))) {
    alert(currentPiece + ' is the winner!');
    return;
  }
};


// Check if a player wins
var checkWin = function (squares, currentPiece) {
  checkRows(squares, currentPiece);
  checkColumns(squares, currentPiece);
  checkDiagonal(squares, currentPiece);
};

// Add click event listener for each square and toggle each player's turn
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function () {
    if (playersTurn.playerOne && this.innerHTML === '') {
      this.innerHTML = 'X';
      checkWin(squares, this.innerHTML);
      playersTurn.playerOne = false;
      playersTurn.playerTwo = true;
    } 
    else if (playersTurn.playerTwo === true && this.innerHTML === '') {
      this.innerHTML = 'O';
      checkWin(squares, this.innerHTML);
      playersTurn.playerTwo = false;
      playersTurn.playerOne = true;
    }
  });
}