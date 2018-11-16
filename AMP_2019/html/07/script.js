const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"red");
let B = new Point(600,200,15,"blue");
let C = new Point(0,0,15,"yellow");
let D = new Point(0,0,15,"green");

let f = new LinearFunction(0,0);

A.drag();
B.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  f.defineLineWithTwoPoint(A,B);
  C.x = 0; C.y = f.calcY(0);
  D.x = canvas.width; D.y = f.calcY(canvas.width);

  f.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);

}

animate();
