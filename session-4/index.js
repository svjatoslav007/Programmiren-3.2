// const Square =require("./module");

// function main (){
//     let square =new Square(50);
//     console.log(square.get.Area())
// }
// main();

const fs = require('fs');

function main() {
    let file = "hello.txt";
    fs.appendFileSync(file, "Hello world\n");
    fs.writeFile('test.text', "hello svjat",

        function (err) {
            console.log("fs.writeFile ended....")
        }
    )
}
main();

//const fs =require('fs');
//const dummyText ="Apple Yep";

//function main() (
    fs.writeFileSync("dummytext.txt",dummyText);
