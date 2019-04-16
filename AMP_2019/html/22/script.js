const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt, frameRate, counter;
let sx,sy,sw,sh;
let numOfCols, maxCells,image;
let loop=false;
let troy =  new Image();
troy.src= "Troy_Sheet.png";
troy.addEventListener('load',()=>{

  startTime = new Date();
  frameRate = 10; //frames per second
  counter = 0;
  sw = 336/7;
  sh = 576/8;
  numOfCols = 7;
maxCells = 7*8-1;   sy = 0; context.drawImage(troy,0,0,sw,sh, 500,500,sw,sh);
 animate();})

function animate(){
  currentTime = new Date();
  dt = (currentTime - startTime)/1000;
  requestAnimationFrame(animate);
  if(dt > 1/frameRate){
    context.fillStyle = "rgba(0,0,0,0.4)"
    context.clearRect(0,0,canvas.width,canvas.height);

    context.drawImage(troy,0,0)

    startTime = new Date();
    sx = counter % numOfCols * sw;

    context.fillRect(sx,sy,sw,sh);

    context.drawImage(troy,sx,sy,sw,sh, 500,500,sw,sh);
if (loop==true){
    counter++;
    if(counter >maxCells){
      counter = 0;
    }}loop=false;
  }}

  addEventListener( "keydown", keyPressed, true);

  function keyPressed(event) {

    var key = event.key;
    switch (key) {
      case "2":sy = 0;loop=true;break;
      case "4":sy = sh*1;loop=true;break;
      case "6":sy = sh*2;loop=true;break;
      case "8":sy = sh*3;loop=true;break;
      case  "1":sy = sh*4;loop=true;;break;
      case "7":sy = sh*5;loop=true;break;
      case  "3":sy = sh*6;loop=true;break;
      case "9":sy = sh*7;loop=true;break;
      default:console.log("keyPressed dont work");  break;}}
