const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let bumper, player,rad,tan;
let PlayerList=[];
function setUp(){
  bumper = new Point(canvas.width/2,canvas.height/2,50,"gray");
  for (var i = 50; i < 500; i++) {
  player = {};
  player.pos = new Vector2d(0.5*i,0.1*i);
  player.vel = new Vector2d(4,4);
  player.point = new Point(player.pos.dx,player.pos.dy,4,"yellow");
  player.rad = new Vector2d(1,1);
  player.tan = new Vector2d(1,1);
  PlayerList.push(player);

    }
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  DrawBall();
  BallMovement();
  WallCollision();
BallCollision();





}
function BallMovement() {
  for (var i = 0; i < PlayerList.length; i++) {
  PlayerList[i].pos.add(PlayerList[i].vel);
  PlayerList[i].point.position(PlayerList[i].pos);
  PlayerList[i].rad.dx = bumper.x - PlayerList[i].pos.dx;
  PlayerList[i].rad.dy = bumper.y - PlayerList[i].pos.dy;
  PlayerList[i].tan.dx = -PlayerList[i].rad.dy;
  PlayerList[i].tan.dy = PlayerList[i].rad.dx;
  }
}
function WallCollision() {
  for (var i = 0; i < PlayerList.length; i++) {

  if(PlayerList[i].pos.dx<PlayerList[i].point.r || PlayerList[i].pos.dx>canvas.width - PlayerList[i].point.r){
    PlayerList[i].vel.dx = -PlayerList[i].vel.dx;
  }
  if(PlayerList[i].pos.dy<PlayerList[i].point.r || PlayerList[i].pos.dy>canvas.height - PlayerList[i].point.r){
    PlayerList[i].vel.dy = -PlayerList[i].vel.dy;
  }
}
}
function DrawBall() {
  for (var i = 0; i < PlayerList.length; i++) {
    PlayerList[i].point.draw(context);
  }

  bumper.draw(context);
}
function BallCollision() {
  for (var i = 0; i < PlayerList.length; i++) {
    if(PlayerList[i].rad.magnitude<PlayerList[i].point.r + bumper.r){
      PlayerList[i].rad.magnitude = 1;
      PlayerList[i].tan.magnitude = 1;
      PlayerList[i].rad.magnitude = PlayerList[i].vel.dot(PlayerList[i].rad);
      PlayerList[i].tan.magnitude = PlayerList[i].vel.dot(PlayerList[i].tan);
      PlayerList[i].rad.angle += Math.PI;
      PlayerList[i].vel.sumVector(PlayerList[i].rad,PlayerList[i].tan);
    }
  }
}


setUp();
