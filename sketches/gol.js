
resolution= 20

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
}

function draw () {
  background(250);
  
  grid.draw();
}

class grid {
  constructor () {
  column=width/resolution;
  rows= height/resolution;
  grid = make2DArray(column,rows);
  for (let i=0; i<column; i++) {
    for (let k=0; k < rows; k++) {
      grid [i] [k] = floor(random(2));
  }
}
  }

  draw () {
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
}
