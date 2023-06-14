const Grass =require('./grass')
const Grazer =require('./grazer')
const Predator =require('./predator')
const Kannibal =require('./kannibale')
const Toadstool =require('./toadstool')
let matrix = [
    [0, 0, 1, 0, 0],
    [1, 4, 0, 0, 0],
    [0, 1, 0, 3, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 5, 0],
    [1, 1, 0, 2, 0],
    [1, 1, 0, 0, 0]
 ];

let fr = 5;
let side = 10;

// Lebewesen
// Liste mit Grass-Objekten
let grassArr = [];
// Liste mit Grassfresser-Objekten
let grazerArr = [];
let predatorArr =[];
let toadstoolArr=[];
let kannibaleArr=[];

function getRandMatrix(cols, rows){
    let matrix = [];
    for(let y = 0; y < rows; y++){
        matrix[y] = []; // Zeilenarray
        for(let x = 0; x < cols; x++){
            matrix[y][x] = Math.round(random(0,1));
        }
    }
    return matrix;
}

function initGame() {


    matrix = getRandMatrix(50, 50);

    // durch Matrix laufen und Lebewesen erstellen
    for (let y in matrix) {
        y = parseInt(y);
        for (let x in matrix[y]) {
            x = parseInt(x);
            // wenn der Wert 1, dann Grass-Objekt erstellen
            if (matrix[y][x] == 1) {
                let grassObj = new Grass(x, y);
                grassArr.push(grassObj);
            } else if (matrix[y][x] == 2) {
                let grazerObj = new Grazer(x, y);
                grazerArr.push(grazerObj);
            } else if (matrix[y][x] == 3) {
                let predatorObj = new Predator(x, y);
                predatorArr.push(predatorObj);
            } else if (matrix[y][x] == 4) {
                let toadstoolObj = new Toadstool(x, y);
                toadstoolArr.push(toadstoolObj);
            } else if (matrix[y][x] == 5) {
                let kannibaleObj = new Kannibale(x, y);
                kannibaleArr.push(kannibaleObj);
            }

        }
    }

}

 initGame();
 console.log(grazerArr);
setInterval