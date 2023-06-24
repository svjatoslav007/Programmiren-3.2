

let clickCount = 0;
function clickHandler(evt){
   clickCount++;
   console.log(evt);
   let str = "Thanks for clicking " + clickCount;
   this.innerText = str;
}  

let p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);

let myBtn =document.getElementById("btnElement");
function btnCallback(){
    alert("hello svjat")
}
myBtn.onClick = btnCallback;
// myBtn.addEventListener('click',btnCallback)

function bodyClick(evt){
    console.log("body was clicked ...",evt.pageX,evt.pageY)
}

window.onclick = bodyClick 
function setup() {
    createCanvas(500,500);
    background("red")
}


function loadCallback(){
alert("website wird geladen ")
}
window.onload =loadCallback;

function keyCallback(evt){
    console.log(evt.evt)
}
window.onkeydown=keyCallback
function mouseClicked(){
    console.log(mouseX, mouseY)
}
