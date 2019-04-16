const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt, frameRate, counter;
let sx,sy,sw,sh;
let numOfCols, maxCells,image;

let troy =  new Image();
troy.src= "Troy_Sheet.png";
troy.addEventListener('load',()=>{
  startTime = new Date();
  frameRate = 10; //frames per second
  counter = 0;
  sw = 336/7;
  sh = 576/8;
  numOfCols = 7;
maxCells = 7*8-1; animate();})

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
    sy = Math.floor(counter/numOfCols) *sh;
    context.fillRect(sx,sy,sw,sh);

    context.drawImage(troy,sx,sy,sw,sh, 500,500,sw,sh);

    counter++;
    if(counter >maxCells){
      counter = 0;
    }
  }}
