const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bumpers = [];
let numBumperOnARow = 10;
let numBumbers = 100;
let widthBumber = 180;

let player;

function setup(){
  let dx,dy;
  for(let i = 0; i<numBumbers; i++){
    widthBumber = canvas.width / numBumperOnARow;
    dx = widthBumber/2 + i%numBumperOnARow * widthBumber;
    dy = widthBumber/2 +Math.floor(i/numBumperOnARow) * widthBumber;
    let bumper = new Point(dx,dy,20,"yellow");
    bumper.i = new Vector2d(1,1);
    bumper.j = new Vector2d(1,-1);
    bumpers.push(bumper);

  }
  player = {};
  player.pos = new Vector2d(100,100);
  player.vel = new Vector2d(8,7);
  player.point = new Point(player.pos.dx,player.pos.dy,5,"black");
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillRect(0,0,canvas.width,canvas.height);
  for(let i=0; i<bumpers.length; i++){
    bumpers[i].i.dx = bumpers[i].x - player.pos.dx;
    bumpers[i].i.dy = bumpers[i].y - player.pos.dy;

    if(bumpers[i].i.r < 5+20){
      bumpers[i].i.r = 1;
      bumpers[i].j.dx = bumpers[i].i.dy;
      bumpers[i].j.dy = -bumpers[i].i.dx;
      bumpers[i].j.r = 1;
      bumpers[i].i.r = player.vel.dot(bumpers[i].i);
      bumpers[i].j.r = player.vel.dot(bumpers[i].j);
      bumpers[i].i.angle += Math.PI;
      player.vel.sumVector(bumpers[i].i,bumpers[i].j);
    }



    //bumpers[i].i.draw(context,player.pos.dx,player.pos.dy,100);

    bumpers[i].draw(context);
  }
  player.pos.add(player.vel);
  player.point.position(player.pos);
  player.point.draw(context);

  if(player.pos.dx <0 || player.pos.dx > canvas.width){
    player.vel.dx = - player.vel.dx;
  }

  if(player.pos.dy <0 || player.pos.dy > canvas.height){
    player.vel.dy = - player.vel.dy;
  }
}

setup();
