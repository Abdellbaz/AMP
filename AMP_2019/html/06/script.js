const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"blue");
A.drag(context);

let B = new Point(500,400,20,"yellow");
B.drag(context);

let C = new Point(100,250,20,"green");
C.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.beginPath();
  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath();
  context.stroke();
  A.draw(context);
  B.draw(context);
  C.draw(context);
}

animate();
