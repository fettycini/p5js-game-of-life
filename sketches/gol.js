resolution = 20;

function make2DArray (column,rows) {
  let arr = new Array(column);
  for (let i=0; i<arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let column ;
let rows ;

function setup () {
  createCanvas(800, 800);
  column=width/resolution;
  rows= height/resolution;
  grid = make2DArray(column,rows);
  for (let i=0; i<column; i++) {
    for (let k=0; k < rows; k++) {
      grid [i] [k] = floor(random(2));
      }
  }
}

function draw () {
  for (let i=0; i<column; i++) {
    for (let k=0; k < rows; k++) {
      let x=i * resolution;
      let y= k * resolution;
      if(grid[i][k]== 1) fill(0);
      else fill (255);
      noStroke;
      rect(x,y,resolution-1,resolution-1)
 

    }
  }
  
}

class Grid {
  constructor () {

  }
}
