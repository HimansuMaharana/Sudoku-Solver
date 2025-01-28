function solveSudoku(board) 
{
    const emptyCell = findEmptyCell(board);  
    if (!emptyCell) 
    {
      // If there are no empty cells, the Sudoku is solved.
      return true;
    }
    const [row, col] = emptyCell;
    for (let num = 1; num <= 9; num++) 
    {
      if (isValidMove(board, row, col, num)) 
      {
        board[row][col] = num;
        if (solveSudoku(board)) 
        {
          // If the current configuration leads to a solution, return true.
          return true;
        }
        // If the current configuration doesn't lead to a solution, backtrack.
        board[row][col] = 0;
      }
    }
    // If no number can be placed in this cell, return false to trigger backtracking.
    return false;
  }
  
  function findEmptyCell(board) 
  {
    for (let row = 0; row < 9; row++) 
    {
      for (let col = 0; col < 9; col++) 
      {
        if (board[row][col] === 0) 
        {
          return [row, col];
        }
      }
    }
    return null; // If no empty cell is found, the puzzle is solved.
  }
  
  function isValidMove(board, row, col, num) 
  {
    // Check if the number is already in the same row or column.
    for (let i = 0; i < 9; i++) 
    {
      if (board[row][i] === num || board[i][col] === num) 
      {
        return false;
      }
    }
    
    // Check if the number is already in the same 3x3 box grid.
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    
    for (let i = startRow; i < startRow + 3; i++) 
    {
      for (let j = startCol; j < startCol + 3; j++) 
      {
        if (board[i][j] === num) 
        {
          return false;
        }
      }
    }
    return true;
  }
  // 0 represents empty cells.
  
  const sudokuBoard = 
  [[5, 3, 0, 0, 7, 0, 0, 0, 0],
   [6, 0, 0, 1, 9, 5, 0, 0, 0],
   [0, 9, 8, 0, 0, 0, 0, 6, 0],
   [8, 0, 0, 0, 6, 0, 0, 0, 3],
   [4, 0, 0, 8, 0, 3, 0, 0, 1],
   [7, 0, 0, 0, 2, 0, 0, 0, 6],
   [0, 6, 0, 0, 0, 0, 2, 8, 0],
   [0, 0, 0, 4, 1, 9, 0, 0, 5],
   [0, 0, 0, 0, 8, 0, 0, 7, 9]];

  if (solveSudoku(sudokuBoard)) 
  {
    console.log("Sudoku Solution:");
    printSudoku(sudokuBoard);
  }
  else 
  {
    console.log("Sudoku Not Solvable.");
  }

  function printSudoku(board) 
  {
    for (let row = 0; row < 9; row++) 
    {
      console.log(board[row].join(''));
    }
  }
