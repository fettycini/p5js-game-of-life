
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
  updateNeighborCounts (grid,x,y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let columns = (x + i + this.columns) % this.columns;
      let rows = (y + j + this.rows) % this.rows;
      sum += grid[this.columns][this.rows];
  }
}
  sum -= grid[x][y];
  return sum;
}
}
