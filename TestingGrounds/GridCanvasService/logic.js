/* THE TASK BOARD */
// Calculate Actual Width and Height // DONE
// Have the constructor print out the values provided for the following properties: width, height, cols, rows. // DONE
// get relative coordinates // DONE
// Figure out how to set width & height of HTML element in javascript. // DONE
// Wrap frame around the canvas // DONE
// Capture mouse coordinates when clicking the canvas frame. // DONE
// Check for existence of the "frame" property // DONE
// Clear a frame's contentDocument body and set its margin to 0px // DONE
// Draw the columns and rows for the grid. // DONE
// Test event handling for frame and canvas. (Which of these elements should I use for event handling?)

/*
What are the properties which GridCanvas accepts?
- cell size (required)
- number of columns (required)
- number of rows (required)
- frame (required)
- border (optional)(default: 1px solid black)
- grid (optional)(default: solid "some light grey color")
- onclick function(cell)
- grid color?
*/
function GridCanvas(properties){
	if(properties.cellSize == undefined ||
    properties.rows == undefined || properties.cols == undefined ||
		properties.frame == undefined){return null;}

	// Storing properties in the object.
	this.cellSize = properties.cellSize;
	this.rows = properties.rows;
	this.cols = properties.cols;

	var canvasWidth = properties.cellSize * properties.cols + (properties.cols - 1);
	var canvasHeight = properties.cellSize * properties.rows + (properties.rows - 1);

  // Create canvas element, define its width and height, and add it to the HTML source defined below.
  this.canvas = document.createElement("CANVAS");
  this.canvas.setAttribute("id", "framed-canvas");
  this.canvas.setAttribute("width", canvasWidth);
  this.canvas.setAttribute("height", canvasHeight);

	this.canvas.addEventListener("click", function(e){
		console.log(e);
	});

	this.ctx = this.canvas.getContext("2d");

	// Drawing column lines on the canvas.
	var colSpacing = this.canvas.width / this.cols;
	for(var i = 1; i < this.cols; i++){
		this.ctx.fillRect(colSpacing * i, 0, 1, this.canvas.height);
	}

	// Drawing row lines on the canvas.
	var rowSpacing = this.canvas.height / this.rows;
	for(var i = 1; i < this.rows; i++){
		this.ctx.fillRect(0, rowSpacing * i, this.canvas.width, 1);
	}

	// Retrieve the frame's default document.
	var embeddedDoc = properties.frame.contentDocument;

	// Clear body element, if populated.
	embeddedDoc.body.innerHTML = "";
	embeddedDoc.body.style.margin = "0";
	embeddedDoc.body.appendChild(this.canvas);

	// Matching the frame's dimensions with the canvas'.
  properties.frame.style.width = this.canvas.offsetWidth.toString() + "px";
  properties.frame.style.height = this.canvas.offsetHeight.toString() + "px";
}

var myFrame = document.getElementById("myFrame");
var output = new GridCanvas({cellSize:16, rows:30, cols:20, frame:myFrame});
