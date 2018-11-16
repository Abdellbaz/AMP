const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kineticObject = {};
let list = [];

function setUp(){
for (var i = 1; i < 4; i++) {
  let kineticObject = {};
  kineticObject.point = new Point(100*i,100*i,5*i,"red");
  kineticObject.pos = new Vector2d(getRandomNumber(500),getRandomNumber(500));
  kineticObject.vel = new Vector2d(getRandomNumber(0.5),getRandomNumber(0.5));
  kineticObject.acc = new Vector2d(getRandomNumber(0.5),getRandomNumber(0.5));
  list.push(kineticObject);
}
  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);

  context.beginPath();
  context.lineWidth =1 ;
  context.fillStyle = "rgba(255,0,0,0.2)";
  context.moveTo(list[0].pos.dx,list[0].pos.dy);
  context.lineTo(list[1].pos.dx,list[1].pos.dy);
  context.lineTo(list[2].pos.dx,list[2].pos.dy);
  context.closePath();
  context.stroke();
  context.fill();
  for (var i = 0; i < list.length; i++) {
    if(list[i].pos.dx<0 || list[i].pos.dx > canvas.width){
      list[i].vel.dx = -list[i].vel.dx;
    }
    if(list[i].pos.dy > canvas.height){
      list[i].pos.dy = canvas.height;
      list[i].vel.dy = -list[i].vel.dy;
    }
    list[i].vel.add(list[i].acc);
    list[i].pos.add(list[i].vel);
    list[i].point.position(list[i].pos);
    list[i].point.draw(context);

  }

}

function getRandomNumber(max){
  return Math.random()*max;}

setUp();
