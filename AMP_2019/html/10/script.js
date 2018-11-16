const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let A = new Point(200, 200, 20, "red");
let B = new Point(600, 300, 20, "blue");
let C = new Point(200, 500, 20, "green");

let S = new Point(0,0,15,"white");
let AC = new Point(0,0,10,"yellow");
let AB = new Point(0,0,10,"yellow");
let BC = new Point(0,0,10,"yellow");
A.drag();
B.drag();
C.drag();
//D.drag();


function animate() {

	requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	Triangle();
middlepoint()
  middlebetween(A,C,AC);
   middlebetween(A,B,AB);
	  middlebetween(B,C,BC);
			drawline(A,BC);drawline(B,AC);drawline(C,AB);
  S.draw(context);S.printText(context,'S','black');S.printCoord(context,'('+Math.floor(S.x)+','+Math.floor(S.y)+')');
  A.draw(context);A.printText(context,'A','white');A.printCoord(context,'('+A.x+','+A.y+')');
	B.draw(context);B.printText(context,"B",'white');B.printCoord(context,'('+B.x+','+B.y+')');
	C.draw(context);C.printText(context,"C",'white');C.printCoord(context,'('+C.x+','+C.y+')');
		AC.draw(context);AC.printText(context,"AC",'black',1.5,10);AC.printCoord(context,'('+Math.floor(AC.x)+','+Math.floor(AC.y)+')');
			AB.draw(context);AB.printText(context,"AB",'black',1.5,10);AB.printCoord(context,'('+Math.floor(AB.x)+','+Math.floor(AB.y)+')');
				BC.draw(context);BC.printText(context,"BC",'black',1.5,10);BC.printCoord(context,'('+Math.floor(BC.x)+','+Math.floor(BC.y)+')');
}

function Triangle() {
	context.beginPath();
	context.moveTo(A.x,A.y);
	context.lineTo(B.x,B.y);
	context.lineTo(C.x,C.y);
	context.lineTo(A.x,A.y);
	context.stroke();
	context.closePath();}

function drawline(n1,n2) {
	context.beginPath();
	context.moveTo(n1.x,n1.y);
	context.lineTo(n2.x,n2.y);
	context.stroke();
	context.closePath();
}

function middlebetween(n1,n2,n3) {
	n3.x =(n1.x+n2.x)/2;
	n3.y=(n1.y+n2.y)/2;
}
function middlepoint()
{
	S.x = (A.x+B.x+C.x)/3;
	S.y = (A.y+B.y+C.y)/3;
}


animate();
