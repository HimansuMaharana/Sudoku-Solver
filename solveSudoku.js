function solveSudoku(board)	
{
	const emptyCell = findEmptyCell(board);
	if (!emptyCell) 
	{
	  return true; // Puzzle solved.
	}
	
	const [row, col] = emptyCell;
	// Filling the cell with numbers 1 to 4.
	for (let num = 1; num <= 4; num++) 
	{
	  if (isValid(board, row, col, num)) 
	  {
		// Place the number if it's valid.
		board[row][col] = num;
  
		// Recursively solve the rest of the puzzle.
		if (solveSudoku(board)) 
		{
		  return true; 
		}
		// If placing the current number leads to an invalid solution, backtrack.
		board[row][col] = 0;
	  }
	}
	return false; // No valid number can be placed in this cell.
  }
  function findEmptyCell(board) 
  {
	for (let row = 0; row < 4; row++) 
	{
	  for (let col = 0; col < 4; col++) 
	  {
		if (board[row][col] === 0) 
		{
		  return [row, col];
		}
	  }
	}
	return null; // If no empty cell is found
  }
  function isValid(board, row, col, num) 
  {
	// Check if "num" is already present in the current row or column
	for (let i = 0; i < 4; i++) {
	  if (board[row][i] === num || board[i][col] === num) 
	  {
		return false;
	  }
	}
	// Check if "num" is already present in the current 2x2 box
	const boxRowStart = Math.floor(row / 2) * 2;
	const boxColStart = Math.floor(col / 2) * 2;
	for (let i = boxRowStart; i < boxRowStart + 2; i++) 
	{
	  for (let j = boxColStart; j < boxColStart + 2; j++) 
	  {
		if (board[i][j] === num) 
		{
		  return false;
		}
	  }
	}
	return true; // "num" is valid in this cell
  }
  // "0" is Empty Cell. 
  const sudokuBoard = 
	[ [4, 0, 0, 0], 
	  [0, 0, 3, 0], 
	  [0, 1, 0, 0], 
	  [0, 0, 0, 2],];
  
  if (solveSudoku(sudokuBoard)) 
  {
	console.log("Sudoku Solution:");
	console.log(sudokuBoard);
  } else 
  {
	console.log("Sudoku Not Solvable.");   // output if the sudoku is not solvable.
  }  