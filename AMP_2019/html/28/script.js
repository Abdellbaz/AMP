const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let GameObjectList,GameObject;
let temp;
setup();
function setup() {
  GameObjectList=[];
  GameObject = {};
  for (var i = 1; i < 2+1; i++) {
    let GameObject = {};
    GameObject.pos = new Vector2d(200*i,150*i);
    GameObject.vel = new Vector2d(3*i,4+i);
    GameObject.point = new Point(GameObject.pos.dx,GameObject.pos.dy,100,"RED");
    GameObject.point.position(GameObject.pos);
    GameObject.rad = new Vector2d(1,1);
    GameObject.tan = new Vector2d(1,1);
    GameObjectList.push(GameObject);}

	animate();
}
function animate() {
   requestAnimationFrame(animate);
   context.clearRect(0, 0, canvas.width, canvas.height);
   DrawBall();
   WallCollision();
   BallMovement();
//   Unknown();
}
 function DrawBall() {
   for (var i = 0; i < GameObjectList.length; i++){
     GameObjectList[i].point.draw(context);
     GameObjectList[i].vel.draw(context,GameObjectList[i].point.x,GameObjectList[i].point.y,20);
    // GameObjectList[i].rad.draw(context,GameObjectList[i].point.x,GameObjectList[i].point.y,1);
   }}

 function BallMovement() {
  for (var i = 0; i < GameObjectList.length; i++) {
  GameObjectList[i].pos.add(GameObjectList[i].vel);
  GameObjectList[i].point.position(GameObjectList[i].pos);}}

 function WallCollision() {
   for (var i = 0; i < GameObjectList.length; i++) {
   if(GameObjectList[i].pos.dx<GameObjectList[i].point.r || GameObjectList[i].pos.dx > canvas.width - GameObjectList[i].point.r){
     GameObjectList[i].vel.dx = - GameObjectList[i].vel.dx;
   }
   if(GameObjectList[i].pos.dy<GameObjectList[i].point.r || GameObjectList[i].pos.dy > canvas.height - GameObjectList[i].point.r){
     GameObjectList[i].vel.dy = - GameObjectList[i].vel.dy;
   }} }

   function Unknown() {
     GameObjectList[0].rad.diffenceVector(GameObjectList[0].pos,GameObjectList[1].pos);
     GameObjectList[1].rad.diffenceVector(GameObjectList[1].pos,GameObjectList[0].pos);

     if( GameObjectList[0].rad.r <  GameObjectList[0].point.r +  GameObjectList[1].point.r){
       for (var i = 0; i < GameObjectList.length; i++) {
          // magnitude rad vector = 1
         GameObjectList[i].rad.r = 1;
          // tan perpedicular to rad
         GameObjectList[i].tan.dx = GameObjectList[i].rad.dy;
         GameObjectList[i].tan.dy = -GameObjectList[i].rad.dx;
         GameObjectList[i].rad.r = GameObjectList[i].rad.dot(GameObjectList[i].vel);
         GameObjectList[i].tan.r = GameObjectList[i].tan.dot(GameObjectList[i].vel);
          //construct new velocity vector
         GameObjectList[i].vel.sumVector(GameObjectList[i].rad,GameObjectList[i].tan);}
         temp = GameObjectList[0].rad;
         GameObjectList[0].rad = GameObjectList[1].rad;
         GameObjectList[1].rad = temp;
       }
     }
