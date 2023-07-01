const Grass = require('./Grass')
const Grazer = require('./Grazer')
const Predator = require('./Predator')
const Kannibale = require('./Kannibale')
const Toadstool = require('./Toadstool')
const random = require('./utils');

const express = require('express');
const { Socket } = require('socket.io')
const app = express();
let server = require('http').Server(app);
const io = require('socket.io')(server);



app.use(express.static('./'));
app.get('/', function (req, res) {
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


    matrix = getRandMatrix(50, 50);
    for (let i = 0; i <= 30; i++) {
        let y = i * 3;
        if (y >= 38) { y = 26; }
        let x = i * 2;
        if (x >= 45) { x = 12; }

        matrix[y][x] = 4;

    } for (let i = 0; i <= 20; i++) {
        let y = i * 3;
        if (y >= 50) { y = 43; }
        let x = i * 2;
        if (x >= 50) { x = 20; }
        matrix[y][x] = 2;
    }

    for (let i = 0; i <= 18; i++) {
        let y = i * 2;
        if (y >= 45) { y = 42; }
        let x = i * 2;
        if (x >= 20) { x = 45; }
        matrix[y][x] = 5;

        matrix[10][10] = 4;
        matrix[20][25] = 4;
        matrix[30][20] = 4;
        matrix[40][35] = 4;
        matrix[1][1] = 1;

        matrix[48][1] = 1;
        matrix[39][38] = 3;
        matrix[35][34] = 3;
        matrix[10][40] = 5;




    }
    for (let i = 0; i <= 20; i++) {
        let y = i * 3;
        if (y >= 48) y = 45;
        let x = i * 2;
        if (x >= 48) x = 37;
        matrix[y][x] = 3;
    }

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

    // for (let i = 0; i < grazerArr.length; i++) {
    //     let grazerObj = grazerArr[i];
    //     grazerObj.eat();
    //     grazerObj.mul();

    // }
    // for (let i = 0; i < predatorArr.length; i++) {
    //     let predatorObj = predatorArr[i];
    //     predatorObj.eat();
    //     predatorObj.mul();

    // }
    // for (let i = 0; i < toadstoolArr.length; i++) {
    //     let toadstoolObj = toadstoolArr[i];
    //     toadstoolObj.eat();


    // }
    // for (let i = 0; i < kannibaleArr.length; i++) {
    //     let kannibaleObj = kannibaleArr[i];
    //     kannibaleObj.eat_predator();
    //     kannibaleObj.eat_grazer();
    //     kannibaleObj.mul();



    // }
    // for (let y in matrix) {
    //     y = parseInt(y);
    //     for (let x in matrix[y]) {
         
    //     }
    // }
}
function killAll(data){
    console.log("client event erhalten:",data);
    // spiellogik alle lebewesen löschen 
}





server.listen(3000, function () {
    console.log("Server wurde gestartet und hört auf port 3000")





})
io.on('connection', function (socket) {
    console.log('ws connection established...', io.engine.clientsCount);

    if (io.engine.clientsCount === 1) {
        initGame()
        socket.emit('init matrix', matrix);
        setInterval(function () {
            updateGame();
            console.log('send matrix')
            io.sockets.emit('send matrix', matrix)
        }, 1000);

    } else {
        socket.emit('init matrix', matrix);
    }
    socket.on('kill all', killAll)
})





