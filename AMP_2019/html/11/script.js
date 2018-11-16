const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let A = new Point(200, 200, 20, "red");
let B = new Point(600, 300, 20, "blue");
let C = new Point(210, 500, 20, "green");
let ABC = new Point(0,0,10,"white");
let BCA = new Point(0,0,10,"white");
let CAB = new Point(0,0,10,"white")
let S = new Point(0,0,10,"RED");;
let l = new LinearFunction(1, 1);
let m = new LinearFunction(1, 1);
count=0;
A.drag();
B.drag();
C.drag();


function animate() {
		requestAnimationFrame(animate);
		context.clearRect(0, 0, canvas.width, canvas.height);

test(A,B,C,ABC);
test(C,A,B,CAB);
test(B,C,A,BCA);
spoint();



  A.draw(context);A.printText(context,'A','white');A.printCoord(context,'('+A.x+','+A.y+')');
	B.draw(context);B.printText(context,"B",'white');B.printCoord(context,'('+B.x+','+B.y+')');
	C.draw(context);C.printText(context,"C",'white');C.printCoord(context,'('+C.x+','+C.y+')');


}




	function test(n1,n2,n3,n4) {
		l.defineLineWithTwoPoint(n1,n2);
		l.draw(context);
		m.slope = -1/l.slope;
		m.intercept = n3.y - m.slope*n3.x;
		m.draw(context);
		n4.x = l.intersection(m).x;
		n4.y = l.intersection(m).y;
		n4.draw(context);n4.printText(context,'z');n4.printCoord(context,'('+Math.floor(n4.x)+','+Math.floor(n4.y)+')');}

function spoint() {
	l.defineLineWithTwoPoint(BCA,A);
	m.defineLineWithTwoPoint(CAB,B);
  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;
	S.draw(context);S.printText(context,'S','black');S.printCoord(context,'('+Math.floor(S.x)+','+Math.floor(S.y)+')');}

animate();
