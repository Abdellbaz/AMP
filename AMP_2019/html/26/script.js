const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let A,B,C,vector,a,b,l,m




setup();

function setup() {
	A = new Point(200, 150, 20, "red");
	B = new Point(150, 100, 20, "Green");
	C = new Point(250, 250, 20, "Blue");
	A.drag();B.drag();C.drag();
	vector = new Vector2d(B.x-A.x,B.y-A.y);
	l = new LinearFunction(1, 1);
	m = new LinearFunction(1, 1);
	 a = new Vector2d(C.x-A.x,C.y-A.y);
	  b = new Vector2d(a.dy,-a.dx)
	animate();
}


function animate() {
	requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	Cal();
	draw();

}

function draw() {
	vector.draw(context,A.x,A.y,1,A.r);
	l.draw(context);
	a.draw(context,A.x,A.y,1,A.r);
		b.draw(context,A.x,A.y,1,A.r);
	m.draw(context);
	A.draw(context);A.printText(context,'A','white');A.printCoord(context,'('+A.x+','+A.y+')');
	B.draw(context);B.printText(context,"B",'white');B.printCoord(context,'('+B.x+','+B.y+')');
  C.draw(context);C.printText(context,"C",'white');C.printCoord(context,'('+C.x+','+C.y+')');

}

function Cal() {
	vector.dx = B.x - A.x;vector.dy = B.y - A.y;
	a.dx = C.x - A.x;a.dy = C.y - A.y;
	 b = new Vector2d(a.dy,-a.dx)
	l.defineLineWithTwoPoint(A, C);
	m.slope = -1/l.slope;
	m.intercept = A.y - m.slope*A.x;
	a.r = 1;
  b.r = 1;

  a.r = vector.dot(a);
b.r = vector.dot(b);

}
