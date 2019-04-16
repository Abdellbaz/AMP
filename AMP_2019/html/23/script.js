const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var spriteWidth = 336,spriteHeight = 576;
var rows = 8,cols = 7;

var width = spriteWidth/cols, height = spriteHeight/rows;
var curFrame=1,frameCount = 7;
var x=700,y=700;
var frame,movement;
var speed = 10;
var speedz = 5;
var loop=false;
var character = new Image();
character.src = "Troy_Sheet.png";
var Track=[];
for (var i = 0; i < rows; i++) {
  Track.push(i*height);
}

function setup(){movement = Track[0];
  context.drawImage(character,frame,movement,width,height,x,y,width,height);

  animate();
}

function animate(){

  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  if (loop==true) {frame = curFrame * width;	move();}
      context.drawImage(character,frame,movement,width,height,x,y,width,height);
      loop=false;



}
window.addEventListener( "keydown", keyPressed, true);

function keyPressed(event) {

  var key = event.key;
  switch (key) {
    case "2":walk = "Down";movement = Track[0];loop=true;break;
    case "4":walk = "Left";movement = Track[1];loop=true;break;
    case "6":walk = "Right";movement= Track[2];loop=true;break;
    case "8":walk = "Up";movement = Track[3];loop=true;break;
    case  "1":walk = "LeftDown";movement =Track[4];loop=true;break;
    case "7":walk = "LeftUp";movement =  Track[5];loop=true;break;
    case  "3":walk = "RightDown";movement = Track[6];loop=true;break;
    case "9":walk = "RightUp";movement =  Track[7];loop=true;break;
    default:console.log("keyPressed dont work");  break;}}

    function move() {
      switch (walk) {
        case "Down":y+=speed;break;
        case "Left":x-=speed;break;
        case "Right":x+=speed;break;
        case "Up":	 y-=speed;break;
        case "LeftDown":x-=speedz;y+=speedz;break;
        case "LeftUp":x-=speedz;y-=speedz;break;
        case "RightDown":x+=speedz;y+=speedz;break;
        case "RightUp":x+=speedz; y-=speedz;break;
        default:break;}
    }		function updateFrame(){

      curFrame = ++curFrame % frameCount;frame=0;

        }
    setInterval(updateFrame,111);

setup();
