
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
}
