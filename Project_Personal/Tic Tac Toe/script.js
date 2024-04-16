document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const message = document.getElementById('message');
  const resetButton = document.getElementById('resetButton');
  let currentPlayer = 'X';
  let moves = 0;
  let gameOver = false;

  const squares = document.querySelectorAll('.square');

  const renderBoard = () => {
    squares.forEach(square => {
      square.textContent = '';
      square.addEventListener('click', handleSquareClick);
    });
  };

  const handleSquareClick = (event) => {
    if (!gameOver && !event.target.textContent) {
      event.target.textContent = currentPlayer;
      moves++;
      if (checkWinner(currentPlayer)) {
        message.textContent = `${currentPlayer} wins!`;
        gameOver = true;
      } else if (moves === 9) {
        message.textContent = "It's a draw!";
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Player ${currentPlayer}'s turn`;
      }
    }
  };

  const checkWinner = (player) => {
    const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winningConditions.some(condition => {
      return condition.every(index => squares[index].textContent === player);
    });
  };

  const resetGame = () => {
    currentPlayer = 'X';
    moves = 0;
    gameOver = false;
    message.textContent = `Player ${currentPlayer}'s turn`;
    renderBoard();
  };

  resetButton.addEventListener('click', resetGame);

  renderBoard();
});
