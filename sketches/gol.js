function make2DArray(column, rows) {
    var arr = new Array(column);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function setup() {
    createCanvas(400, 400);
    grid = new Grid(20);
}

function draw() {
    background(250);
    grid.draw();
    grid.updateNeighborCounts();
    grid.updatePopulation
    //cell.draw();

}

class Cell {
    constructor(rows, column, cellSize, isAlive) {
        this.rows = rows;
        this.columns = column;
        this.cellSize = cellSize;
        this.isAlive = false;
    }

    liveOrDie() {

        var next = make2DArray(columns, rows);

        for (var i = 0; i < this.columns; i++) {
            for (var j = 0; j < this.rows; j++) {
               this.isAlive = grid[i][j];
                var neighbors = updateNeighborCounts(grid, i, j);

                if (this.isAlive == 0 && neighbors == 3) { //born on next gen.
                    next[i][j] = 1;

                } else if (this.isAlive == 1 && (neighbors < 2 || neighbors > 3)) { //die on next gen.
                    next[i][j] = 0;

                } else { //stay alive
                    next[i][j] = this.isAlive;
                }

            }
        }

    }
}

// function keyPressed() {
//     if (keyCode === ENTER) {
//         if 
//     }
// }
class Grid {
    constructor(cellSize) {
        this.cellSize = cellSize;

        this.columns = width / cellSize;
        this.rows = height / cellSize;

        this.grid = make2DArray(this.columns, this.rows);
        for (var i = 0; i < this.columns; i++) {
            for (var k = 0; k < this.rows; k++) {
                this.grid[i][k] = floor(random(2));
            }
        }
    }

    draw() {
        for (var i = 0; i < this.columns; i++) {
            for (var k = 0; k < this.rows; k++) {
                var x = i * this.cellSize;
                var y = k * this.cellSize;

                //draw cell
                if (this.grid[i][k] == 1) fill(0);
                else fill(255);
                noStroke;
                rect(x, y, this.cellSize - 1, this.cellSize - 1)
            }
        }
    }
    updateNeighborCounts() {
        for (var i = 0; i < this.columns; i++) {
            for (var j = 0; j < this.rows; j++) {
                var currentCell = this.grid[i][j];
                var neighborX = this.columns + i
                var neighborY = this.rows + j

                //print(neighborX + " ," + neighborY);

                //sum += grid[x][y];
            }
        }
    }
    updatePopulation() {
        population = 0;

        for (var i = 0; i < this.columns; i++) {
            for (var j = 0; j < this.rows; j++) {
                if (grid[i][j]) population++;
            }
        }
    }
}
