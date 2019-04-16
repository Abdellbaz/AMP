
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let player;
let moveTo,distance;
let kineticObject;
let speed;
let List = [];


function loop() {
  for (var i = 0; i <getRandomNumber(3,100); i++) {
    kineticObject = {};
    kineticObject.pos = new Vector2d(getRandomNumber(10,canvas.width-10),getRandomNumber(10,canvas.height-10));
    kineticObject.vel = new Vector2d(0,0);
    kineticObject.point = new Point(kineticObject.pos.dx,kineticObject.pos.dy,getRandomNumber(5,10),"red");
    List.push(kineticObject);}}

function setUp(){
  moveTo=0;distance=0;
  speed=10;
  loop();
  player = {};
  player.pos = new Vector2d(List[1].pos.dx,List[1].pos.dy);
  player.vel = new Vector2d(0,0);
  player.acc = new Vector2d(0,0);
  player.point = new Point(player.pos.dx,player.pos.dy,getRandomNumber(5,10),"yellow"); animate();}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);

  requestAnimationFrame(animate);
	drawLine();
	player.vel.draw(context,player.pos.dx,player.pos.dy,speed);
 	ball();
  checkPlayerOnBall();
  movePlayer();
  player.vel.magnitude = 1/speed*(distance + 1);}

function ball() {
  for (var i = 0; i < List.length; i++) {
    List[i].pos.add(List[i].vel);
    List[i].point.position(List[i].pos);
    List[i].point.draw(context);}
    player.vel.add(player.acc);
    player.pos.add(player.vel);
    player.point.position(player.pos);
    player.point.draw(context);
    player.point.printCoord(context,"< "+Math.floor(speed)+' >','red',40);}

function checkPlayerOnBall() {
  for (var i = 0; i < List.length; i++) {
    if(player.point.distanceToOtherPoint(List[i].point)<List[i].point.r/4	){moveTo = i;speed=getRandomNumber(20,80); }}}



function movePlayer() {
  for (var i = 0; i < List.length-1; i++) {
    switch (moveTo) {case i :i++;number(i);i--;break;default:}}
    switch (moveTo) {case List.length-1:number(0);break;default:}}


  function number(i) {
    distance = player.point.distanceToOtherPoint(List[i].point);
    player.vel.differenceVector(List[i].pos,player.pos);}

				function drawLine() {
					context.fillStyle = "rgba(255,255,255,0.2)";
					context.fillRect(0,0,canvas.width,canvas.height);
					context.beginPath();
					context.strokeStyle = "gray";
					context.setLineDash([7, 9]);
					context.moveTo(List[0].pos.dx,List[0].pos.dy);
          for (var i = 1; i < List.length; i++) {context.lineTo(List[i].pos.dx,List[i].pos.dy);}
					context.closePath();
					context.stroke();
					context.setLineDash([0]);}

function getRandomNumber(min,max){return Math.floor(Math.random()*(max-min) + min);}



  setUp();
