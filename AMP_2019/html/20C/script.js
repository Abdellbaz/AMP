
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
let player;
let moveTo,distance;
let kobPoints,kobPlayer;
let speed;
let PointList = [];
let PlayerList = [];
let MoveToList;
let DistanceList;
let spawn;
function loop() {
  spawn=getRandomNumber(3,3);
  for (var i = 0; i < spawn; i++) {
    kobPoints = {};
    kobPoints.pos = new Vector2d(getRandomNumber(10,canvas.width-10),getRandomNumber(10,canvas.height-10));
    kobPoints.vel = new Vector2d(0,0);
    kobPoints.point = new Point(kobPoints.pos.dx,kobPoints.pos.dy,getRandomNumber(5,10),"red");
    PointList.push(kobPoints);}

    for (var i = 0; i < 2; i++) {
      kobPlayer = {};
      kobPlayer.pos = new Vector2d(0,0);
      kobPlayer.vel = new Vector2d(0,0);
      kobPlayer.acc = new Vector2d(0,0);
      kobPlayer.point = new Point(0,0);
      PlayerList.push(kobPlayer);}

  }


function setUp(){
  moveTo=0;distance=0;
  speed=10;
  loop();
for (var i = 0; i < PlayerList.length; i++) {
  PlayerList[i].pos = new Vector2d(PointList[i].pos.dx,PointList[i].pos.dy);

}

MoveToList =[];
DistanceList=[];
MoveToList.push(1,1);
  animate();}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);

  requestAnimationFrame(animate);
	drawLine();
  for (var i = 0; i < PlayerList.length; i++) {
for (var j = 0; j < DistanceList.length; j++) {
  PlayerList[i].vel.magnitude = 1/speed*(DistanceList[j] + 1);
}

    PlayerList[i].vel.draw(context,PlayerList[i].pos.dx,PlayerList[i].pos.dy,speed);

  }
  // PlayerList[0].vel.magnitude = 1/speed*(distance + 1);
	// PlayerList[0].vel.draw(context,PlayerList[0].pos.dx,PlayerList[0].pos.dy,speed);
 	ball();
  checkPlayerOnBall();
  movePlayer();

}

function ball() {
  for (var i = 0; i < PointList.length; i++) {
    PointList[i].pos.add(PointList[i].vel);
    PointList[i].point.position(PointList[i].pos);
    PointList[i].point.draw(context);}
    for (var i = 0; i < PlayerList.length; i++) {
    PlayerList[i].vel.add(PlayerList[i].acc);
    PlayerList[i].pos.add(PlayerList[i].vel);
    PlayerList[i].point.position(PlayerList[i].pos);
    PlayerList[i].point.draw(context);
    PlayerList[i].point.printCoord(context,"< "+Math.floor(speed)+' >','red',40);}
  }

function checkPlayerOnBall() {
  for (var j = 0; j < PlayerList.length; j++) {
  for (var i = 0; i < PointList.length; i++) {
    if(PlayerList[j].point.distanceToOtherPoint(PointList[i].point)<PointList[i].point.r/4	){
        moveTo = i;speed=getRandomNumber(20,80);

// if (MoveToList.length!=PointList.length) {
//   MoveToList.push(i);
// }

     }


  }}}



function movePlayer() {
  for (var i = 0; i < PointList.length-1; i++) {
for (var j = 0; j < MoveToList.length-1; j++) {
  switch (MoveToList[j]) {case i :i++;number(i);i--;console.log(moveTo);break;default:}

}}
    // switch (moveTo) {case i :i++;number(i);i--;console.log(moveTo);break;default:}

    switch (moveTo) {case PointList.length-1:number(0);break;default:}
  }


  function number(i) {

for (var  j= 0; j < MoveToList.length; j++) {

if (MoveToList.length!=DistanceList.length) {
  distance = PlayerList[j].point.distanceToOtherPoint(PointList[2].point);

DistanceList.push(distance);
}


    PlayerList[j].vel.differenceVector(PointList[2].pos,PlayerList[j].pos);}

  }

				function drawLine() {
					context.fillStyle = "rgba(255,255,255,0.2)";
					context.fillRect(0,0,canvas.width,canvas.height);
					context.beginPath();
					context.strokeStyle = "gray";
					context.setLineDash([7, 9]);
					context.moveTo(PointList[0].pos.dx,PointList[0].pos.dy);
          for (var i = 1; i < PointList.length; i++) {context.lineTo(PointList[i].pos.dx,PointList[i].pos.dy);}
					context.closePath();
					context.stroke();
					context.setLineDash([0]);}

function getRandomNumber(min,max){return Math.floor(Math.random()*(max-min) + min);}



  setUp();
