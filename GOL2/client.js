

function main() {
    console.log("main is executed...")
    const socket = io();

    function openMatrix(matrixData) {
        //zeichne diese matrix
        matrix = matrixData;
    }

    function initMatrix(matrixData) {
        matrix = matrixData;
    //    resizeCanvas(matrix[0].length + 1, matrix.length * side + 1)

    }
    socket.on('send matrix', openMatrix);
    socket.on('init matrix', initMatrix);

    function killAll() {
        console.log("sende kill all an den server ...")
        socket.emit('kill all', 'Grazer')
    }
    let btn = document.getElementById('myGameBtn');
    btn.onclick = killAll;


}


main();

let matrix = [];
let side = 10;
let fr = 5;
function setup() {
    createCanvas(50*side, 50 *side);
    background('#acacac')
    frameRate(fr)
    //resizeCanvas(matrix[0].length + 1, matrix.length * side + 1)
}

function draw() {
    
    for (let y in matrix) {
        y = parseInt(y);
        for (let x in matrix[y]) {
            x = parseInt(x);
            let farbWert = matrix[y][x];
            fill("#ffffff");
            // Wert 0 - Weiss
            if (farbWert === 1) {
                // Wert 1 - GrÃ¼n
                fill("#00ff00");
            } else if (farbWert === 2) {
                // Wert 2 - Gelb
                fill("#ffff00");
            } else if (farbWert === 3) {
                // Wert 3 = Rot
                fill("#ff0000");
            } else if (farbWert === 4) {
                // Wert 3 = Rot
                fill("#826E40");
            } else if (farbWert === 5) {
                // Wert 3 = Rot
                fill("#FF6800");
            }
            rect(x * side, y * side, side, side);
        }
    }
}