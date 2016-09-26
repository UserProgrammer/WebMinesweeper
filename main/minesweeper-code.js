/**
Cell State: 0 - hidden, 1 - revealed, 2 - flagged
Cell Value: 0 - blank, 1:8 - numbers 1 through 8, 9 - mine
**/

// minesweeper Cell class.
function Cell(cell_ID) {
  this.value = 0;
  this.state = 0;
  this.htmlCell =
  this.htmlCell.setAttribute("class", "minesweeper-map-cell");
  this.id = cell_ID;
}

// minesweeper Map class
function MineMap(){
  this.rows = 0;
  this.cols = 0;
  this.state = [];
}

/*
Generates a new map
@param rows: Number of rows in the map.
@param cols: Number of columns in the map.
*/
function generateMap(rows, cols) {
  var map = new MineMap();

  map.rows = rows;
  map.cols = cols;

  // Generate table rows in HTML table.
  for(var r = 0; r < rows; ++r){
    var table = document.getElementById("minesweeper-map");

    var tableRow = document.createElement("TR");

    for(var c = 0; c < cols; ++c){
      var tableCell = document.createElement("TD");

      tableCell.setAttribute("class", "minesweeper-map-cell");
      tableCell.setAttribute("id", r*cols+c); // Is this necessary?
      tableRow.appendChild(tableCell);
    }

    table.appendChild(tableRow);
  }

  var totalCells = rows * cols;

  // Generate map cells (default value of "hidden blank").
  for(var i = 0; i < totalCells; ++i){
    map.state.push(new Cell(i));
  }

  // Calculate the number of mines to be placed on the map.
  var mines = Math.ceil(totalCells*0.2);

  // Determine the locations of the maps.
  var mineLocations = new Set();

  while(mineLocations.size < mines){
    var cellIndex = Math.floor(Math.random() * totalCells);

    mineLocations.add(cellIndex); // Add mine location to the set.

    // Modify the cell's value to hold a mine.
    map.state[cellIndex].value = 9;
  }
  // Enumerate the cells surrounding the map.
  mineLocations.forEach(function(e){
    // Get neighboring cells. (write a function for this).
    var neighbors = getValidNeighbors(e, rows, cols);

    // Increment the value of each neighbor.
    neighbors.forEach(function(e){
      if(map.state[e].value != 9){
        map.state[e].value += 1;
      }
    });
  });

  return map;
}

function flagCell() {

}

/*function revealCell(index, map){
  // Reveal the selected cell.
  if(minesweeperMap.state[index].value == 9){
  	// Reveal all cells.
    // Game Over.
  }
  else{
    // Create queue and get selected cell's neighbors.
    var cellsToReveal = getValidNeighbors(index, map.rows, map.cols);
		// Reveal selected cell.
		map.state[index].state = 1;

    // Reveal neighbors
    while(cellsToReveal.length > 0){
    	var cellIndex = cellsToReveal.shift();

      if(map.state[cellIndex].state != 1 && map.state[cellIndex].state != 2){ // If it is not already revealed, or flagged...
				//console.log("Bap");
				//console.log(cell);
        if(map.state[cellIndex].value < 9){ // If the cell is NOT a mine
					map.state[cellIndex].state = 1; // Revealing cell.
					console.log(map.state[cellIndex].value);
					if(map.state[cellIndex].value == 0){ // If the cell is a blank, get its neighboring values and add them to the queue.
						console.log("Boop!");
						cellsToReveal.push(getValidNeighbors(cellIndex, map.rows, map.cols));
					}
        }
      }
    }
  }
}*/

function drawMap(){

}
