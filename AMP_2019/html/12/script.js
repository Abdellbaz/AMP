const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let A = new Point(210, 200, 20, "red");
let B = new Point(600, 300, 20, "blue");
let C = new Point(200, 500, 20, "green");

let S = new Point(0,0,15,"hsla(9, 100%, 64%, 0)");
let Z = new Point(0,0,10,"white");

let AB = new Point(0,0,10,"yellow");
let BC = new Point(0,0,10,"yellow");
let CA = new Point(0,0,10,"yellow");
let l = new LinearFunction(1, 1);
let m = new LinearFunction(1, 1);
let mz = new LinearFunction(1, 1);

A.drag();
B.drag();
C.drag();
//D.drag();


function animate() {

	requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
  test(A,B,AB);
  test(B,C,BC);
	  test(C,A,CA);
//middlepoint();

 middlepoint();
 Z.draw(context);Z.printText(context,'z','black');Z.printCoord(context,'('+Math.floor(Z.x)+','+Math.floor(Z.y)+')');

  S.draw(context);S.printText(context,'S','black');
  A.draw(context);A.printText(context,'A','white');A.printCoord(context,'('+A.x+','+A.y+')');
	B.draw(context);B.printText(context,"B",'white');B.printCoord(context,'('+B.x+','+B.y+')');
	C.draw(context);C.printText(context,"C",'white');C.printCoord(context,'('+C.x+','+C.y+')');
		AB.draw(context);AB.printText(context,"AB",'black',1.5,10);AB.printCoord(context,'('+Math.floor(AB.x)+','+Math.floor(AB.y)+')');
			BC.draw(context);BC.printText(context,"BC",'black',1.5,10);BC.printCoord(context,'('+Math.floor(BC.x)+','+Math.floor(BC.y)+')');
			CA.draw(context);CA.printText(context,"CA",'black',1.5,10);CA.printCoord(context,'('+Math.floor(CA.x)+','+Math.floor(CA.y)+')');
}


function test(n1,n2,n3) {

	n3.x =(n1.x+n2.x)/2;
	n3.y=(n1.y+n2.y)/2;
	context.strokeStyle="black";
	l.defineLineWithTwoPoint(n1,n2);l.draw(context);
	m.slope = -1/l.slope;
	m.intercept = n3.y - m.slope*n3.x;
	context.strokeStyle="cyan";
	m.draw(context);
}
function middlepoint()
{
l.defineLineWithTwoPoint(A,B);
mz.slope = -1/l.slope;
mz.intercept = AB.y - mz.slope*AB.x;
S.x = m.intersection(mz).x;
S.y = m.intersection(mz).y;
S.r = S.distanceToOtherPoint(A);
Z.x=S.x;Z.y=S.y;
}


animate();
