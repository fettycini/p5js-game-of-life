
function make2DArray (column,rows) {
  let arr = new Array(column);
  for (let i=0; i<arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
}

function draw () {
  background(250);
  
  grid.draw();
  grid.updateNeighborCounts();
}


class Grid {
  constructor (cellSize) {
  this.cellSize= cellSize;

  this.columns=width/cellSize;
  this.rows= height/cellSize;

  this.grid = make2DArray(this.columns,this.rows);
  for (let i=0; i<this.columns; i++) {
    for (let k=0; k < this.rows; k++) {
      this.grid [i] [k] = floor(random(2));
  }
}
  }

  draw () {
  for (let i=0; i<this.columns; i++) {
    for (let k=0; k < this.rows; k++) {
      let x=i * this.cellSize;
      let y= k * this.cellSize;
      if(this.grid[i][k]== 1) fill(0);
      else fill (255);
      noStroke;
      rect(x,y,this.cellSize-1,this.cellSize-1)
      }
    }
}
  updateNeighborCounts (grid,xOffset,yOffset) {
  let sum = 0;
  for (var xOffset = -1; xOffset <= 1; xOffset++) {
    for (var yOffset = -1; yOffset <= 1; yOffset++) {
     var neighborX = currentCell.column + xOffset
     var neighborY = currentCell.row + yOffset

      sum += grid[this.columns][this.rows];
  }
}
  sum -= grid[xOffset][yOffset];
  return sum;
}
}
