
let side = 10;
function main() {


    console.log("main is executed...")
    const socket = io();
    function openMatrix (matrixData){
        //zeichne diese matrix
        matrix =matrixData;
        draw()
     

        
    }
socket.on('send matrix', openMatrix)



}
main();
let matrix =[];
function setup() {
    createCanvas(1000, 1000);
    background('#acacac')
   
}
function draw(){
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