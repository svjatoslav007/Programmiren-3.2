const Grass = require('./Grass')
const Grazer = require('./Grazer')
const Predator = require('./Predator')
const Kannibale = require('./Kannibale')
const Toadstool = require('./Toadstool')
const random = require('./utils');

const express =require('express');
const app =express();
let server =require('http').Server(app);
const io =require('socket.io')(server);



app.use(express.static('./'));
app.get('/',function(req,res){
    res.redirect('client.html')
})




matrix = [
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
grassArr = [];
// Liste mit Grassfresser-Objekten
grazerArr = [];
predatorArr = [];
toadstoolArr = [];
kannibaleArr = [];

function getRandMatrix(cols, rows) {
    let matrix = [];
    for (let y = 0; y < rows; y++) {
        matrix[y] = []; // Zeilenarray
        for (let x = 0; x < cols; x++) {
            matrix[y][x] = Math.round(random(0, 1));
        }
    }
    return matrix;
}

function initGame() {


    // matrix = getRandMatrix(50, 50);

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

function updateGame() {

    // alle Grassobjekte updaten
    for (let i = 0; i < grassArr.length; i++) {
        let grassObj = grassArr[i];
        grassObj.mul();
    }

    for (let i = 0; i < grazerArr.length; i++) {
        let grazerObj = grazerArr[i];
        grazerObj.eat();
        grazerObj.mul();

    }
    for (let i = 0; i < predatorArr.length; i++) {
        let predatorObj = predatorArr[i];
        predatorObj.eat();
        predatorObj.mul();

    }
    for (let i = 0; i < toadstoolArr.length; i++) {
        let toadstoolObj = toadstoolArr[i];
        toadstoolObj.eat();


    }
    for (let i = 0; i < kannibaleArr.length; i++) {
        let kannibaleObj = kannibaleArr[i];
        kannibaleObj.eat_predator();
        kannibaleObj.eat_grazer();
        kannibaleObj.mul();



    }
    for (let y in matrix) {
        y = parseInt(y);
        for (let x in matrix[y]) {
            console.log(matrix)
            // x = parseInt(x);
            // let farbWert = matrix[y][x];
            // fill("#ffffff");
            // // Wert 0 - Weiss
            // if(farbWert === 1){
            //     // Wert 1 - GrÃ¼n
            //     fill("#00ff00");
            // }else if(farbWert === 2){
            //     // Wert 2 - Gelb
            //     fill("#ffff00");
            // }else if(farbWert === 3){
            //     // Wert 3 = Rot
            //     fill("#ff0000");
            // }else if(farbWert === 4){
            //     // Wert 3 = Rot
            //     fill("#826E40");
            // }else if(farbWert === 5){
            //     // Wert 3 = Rot
            //     fill("#FF6800");
            // }
            // rect(x * side, y *side, side, side);
        }
    }
}





server.listen(3000,function(){
    console.log("Server wurde gestartet und hört auf port 3000")




initGame()
setInterval(function () {
    updateGame();
}, 1000);
initGame();

})




