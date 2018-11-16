const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let A = new Point(200, 200, 20, "red");
let B = new Point(600, 300, 20, "blue");
let C = new Point(200, 500, 20, "green");
//let D = new Point(600, 100, 20, "orange");
let S = new Point(0,0,20,"white");
let l = new LinearFunction(1, 1);
let m = new LinearFunction(1, 1);

A.drag();
B.drag();
C.drag();
//D.drag();


function animate() {
	requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	l.defineLineWithTwoPoint(A, B);
	l.draw(context);
	//m.defineLineWithTwoPoint(C, D);
	m.slope = -1/l.slope;
	m.intercept = C.y - m.slope*C.x;
	m.draw(context);
  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y
  S.draw(context);S.printText(context,'S','black');S.printCoord(context,'('+Math.floor(S.x)+','+Math.floor(S.y)+')');
  A.draw(context);A.printText(context,'A','white');A.printCoord(context,'('+A.x+','+A.y+')');
	B.draw(context);B.printText(context,"B",'white');B.printCoord(context,'('+B.x+','+B.y+')');
	C.draw(context);C.printText(context,"C",'white');C.printCoord(context,'('+C.x+','+C.y+')');
	//D.draw(context);D.printText(context,"D",'white');D.printCoord(context,'('+D.x+','+D.y+')');
}
animate();
