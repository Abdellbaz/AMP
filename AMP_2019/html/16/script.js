
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const midX = canvas.width/2;
const midY = canvas.height/2;
let dx,dy,Radian;


let arrow =  new Image();
arrow.src= "arrow.png";
arrow.addEventListener('load',()=>{animate();})

function animate() {
	requestAnimationFrame(animate);
	context.clearRect(0, 0,canvas.width,canvas.height);
	context.save();
  context.translate(midX,midY);
  context.rotate(Radian);
  context.drawImage(arrow,0,-50);
  context.restore();}

document.addEventListener('mousemove',(evt)=>{
	dx = evt.clientX-midX;
	dy = evt.clientY-midY;
	Radian = Math.atan2(dy, dx);});
