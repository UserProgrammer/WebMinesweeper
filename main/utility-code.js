/*
Returns a collection of valid neighbors.
@param index: Cell index whose neighbors are to be retrieved.
@param rows: Number of rows in the array.
@param cols: Number of cols in the array.
@return The neighbors of the selected cell, or null if the cell index is out-of-bounds.
*/
function getValidNeighbors(index, rows, cols){
  var neighboringCells = [];
  var col = index % cols;
  var row = (index - col) / rows;

  // Check if the provided index is valid.
  if(index < 0 || index > rows*cols){
    return null;
  }

  // Top-left neighbor.
  if(row-1 >= 0 && col-1 >= 0){
    neighboringCells.push((row - 1) * cols + (col - 1));
  }

  // Top neighbor.
  if(row-1 >= 0){
    neighboringCells.push((row - 1) * cols + col);
  }

  // Top-right neighbor
  if(row-1 >= 0 && col+1 < cols){
    neighboringCells.push((row - 1) * cols + (col + 1));
  }

  // Left neighbor
  if(col-1 >= 0){
    neighboringCells.push(row * cols + (col - 1));
  }

  // Right neighbor
  if(col+1 < cols){
    neighboringCells.push(row * cols + (col + 1));
  }

  // Bottom-left neighbor.
  if(row+1 < rows && col-1 >= 0){
    neighboringCells.push((row + 1) * cols + (col - 1));
  }

  // Bottom neighbor.
  if(row + 1 < rows){
    neighboringCells.push((row + 1) * cols + col);
  }

  // Bottom-right neighbor.
  if(row+1 < rows && col+1 < cols){
    neighboringCells.push((row + 1) * cols + (col + 1));
  }

  return neighboringCells;
}
