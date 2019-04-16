
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let player;
let moveTo,distance;
let kineticObject;
let speed =10;
let List = [];
let PlayerList = [];


function loop() {
  spawn =getRandomNumber(3,100);
  for (var i = 0; i < spawn;i++) {
    kineticObject = {};
    kineticObject.pos = new Vector2d(getRandomNumber(10,canvas.width-10),getRandomNumber(10,canvas.height-10));
    kineticObject.vel = new Vector2d(0,0);
    kineticObject.point = new Point(kineticObject.pos.dx,kineticObject.pos.dy,getRandomNumber(5,10),"red");
    List.push(kineticObject);}
    for (var i = 0; i < spawn; i++) {
      kobPlayer = {};
      kobPlayer.pos = new Vector2d(List[i].pos.dx,List[i].pos.dy);
      kobPlayer.vel = new Vector2d(0,0);
      kobPlayer.point = new Point(kobPlayer.pos.dx,kobPlayer.pos.dy,getRandomNumber(5,10),"yellow");
      kobPlayer.target=i;
      kobPlayer.speed=getRandomNumber(5,30);
      PlayerList.push(kobPlayer);}


  }

function setUp(){
  moveTo=0;distance=0;
  speed=10;
  loop();
animate();
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
	drawLine();
  drawPoints();
  checkPlayerOnPoints();
  movePlayer();}

function drawLine() {
  context.beginPath();
  context.lineWidth = 1;
  context.moveTo(List[0].pos.dx,List[0].pos.dy);
  for (var i = 1; i < List.length; i++) {context.lineTo(List[i].pos.dx,List[i].pos.dy);}
  context.closePath();
  context.stroke();}

function drawPoints() {
  for (var i = 0; i < List.length; i++) {List[i].point.draw(context);}
  for (var i = 0; i < PlayerList.length; i++) { PlayerList[i].point.printCoord(context,"< "+Math.floor(PlayerList[i].speed)+' >','red',40);}}

function checkPlayerOnPoints() {
  for (var i = 0; i < PlayerList.length; i++) {
  if(PlayerList[i].point.distanceToOtherPoint(List[PlayerList[i].target].point)< speed){
   PlayerList[i].target++;   if( PlayerList[i].target == spawn){PlayerList[i].target = 0;}}

  }}

function movePlayer() {
  for (var i = 0; i < PlayerList.length; i++) {
  PlayerList[i].point.position(PlayerList[i].pos)
  PlayerList[i].pos.add(PlayerList[i].vel);
  PlayerList[i].vel.differenceVector(List[PlayerList[i].target].pos,PlayerList[i].pos);
  PlayerList[i].vel.magnitude = 0.3/PlayerList[i].speed*(PlayerList[i].point.distanceToOtherPoint(List[PlayerList[i].target].point));
  PlayerList[i].point.draw(context);
  PlayerList[i].vel.draw(context,PlayerList[i].pos.dx,PlayerList[i].pos.dy,PlayerList[i].speed);}}



function getRandomNumber(min,max){return Math.floor(Math.random()*(max-min) + min);}



  setUp();
