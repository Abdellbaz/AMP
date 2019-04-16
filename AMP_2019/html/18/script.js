
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A,B,player,player1;
let moveToA = false;
let moveToA1 = false;
let distance = 0;

function setUp(){
  A = {};
  A.pos = new Vector2d(getRandomNumber(10,canvas.width-10),getRandomNumber(10,canvas.height-10));
  A.vel = new Vector2d(0,0);
  A.point = new Point(A.pos.dx,A.pos.dy,getRandomNumber(5,10),"red");

  B = {};
  B.pos = new Vector2d(getRandomNumber(10,canvas.width-10),getRandomNumber(100,canvas.height-10));
  B.vel = new Vector2d(0,0);
  B.point = new Point(B.pos.dx,B.pos.dy,getRandomNumber(5,10),"red");

  player = {};
  player.pos = new Vector2d(B.pos.dx,B.pos.dy);
  player.vel = new Vector2d(0,0);
  player.acc = new Vector2d(0,0);
  player.point = new Point(player.pos.dx,player.pos.dy,getRandomNumber(5,10),"white");
  player1 = {};
  player1.pos = new Vector2d(A.pos.dx,A.pos.dy);
  player1.vel = new Vector2d(0,0);
  player1.acc = new Vector2d(0,0);
  player1.point = new Point(player1.pos.dx,player1.pos.dy,getRandomNumber(5,10),"black");


animate();
}

function animate(){
  requestAnimationFrame(animate);
	drawLine();
	player.vel.draw(context,player.pos.dx,player.pos.dy,20);
 player1.vel.draw(context,player1.pos.dx,player1.pos.dy,20);

  ball();
  checkPlayerOnBall();
  	movePlayer();
  player.vel.magnitude = 1/40*(distance + 1);
  player1.vel.magnitude = 1/40*(distance1 + 1);
}

function ball() {
	A.pos.add(A.vel);
	A.point.position(A.pos);
	A.point.draw(context);
	B.pos.add(B.vel);
	B.point.position(B.pos);
	B.point.draw(context);
	player.vel.add(player.acc);
	player.pos.add(player.vel);
	player.point.position(player.pos);
	player.point.draw(context);
  player1.vel.add(player1.acc);
  player1.pos.add(player1.vel);
  player1.point.position(player1.pos);
  player1.point.draw(context);

}

function checkPlayerOnBall() {
	if(player.point.distanceToOtherPoint(B.point)<B.point.r/4	){
		moveToA = true;}
	else if(player.point.distanceToOtherPoint(A.point)<A.point.r/4){
			moveToA = false;}

      if(player1.point.distanceToOtherPoint(B.point)<B.point.r/4	){
        moveToA1 = true;}
      else if(player1.point.distanceToOtherPoint(A.point)<A.point.r/4){
          moveToA1 = false;}


    }

	function movePlayer() {
		if(moveToA){
	    distance = player.point.distanceToOtherPoint(A.point);
	    player.vel.differenceVector(A.pos,player.pos);}
	  else {
	    distance = player.point.distanceToOtherPoint(B.point);
	    player.vel.differenceVector(B.pos,player.pos);}

      if(moveToA1){
        distance1 = player1.point.distanceToOtherPoint(A.point);
        player1.vel.differenceVector(A.pos,player1.pos);}
      else {
        distance1 = player1.point.distanceToOtherPoint(B.point);
        player1.vel.differenceVector(B.pos,player1.pos);}
    }

				function drawLine() {
					context.fillStyle = "rgba(255,255,255,0.2)";
					context.fillRect(0,0,canvas.width,canvas.height);
					context.beginPath();
					context.strokeStyle = "gray";
					context.setLineDash([7, 9]);
					context.moveTo(A.pos.dx,A.pos.dy);
					context.lineTo(B.pos.dx,B.pos.dy);
					context.closePath();
					context.stroke();
					context.setLineDash([0]);
				}
setUp();
function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min) + min);}
