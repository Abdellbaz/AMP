const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kinObs = []

function setUp(){

  for (let i = 0; i < 200; i++) {
    let kinOb = {};
    kinOb.point = new Point(0,0,getRandomNumber(3,10),"#" + Math.floor(getRandomNumber(0,255*255*255)).toString(16));
    kinOb.pos = new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(0,canvas.height));
    kinOb.vel = new Vector2d(getRandomNumber(3,6),0);
    kinOb.acc = new Vector2d(0,0.2);
    kinObs.push(kinOb);
  }

  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);
  for (let i = 0; i < kinObs.length; i++) {
    kinObs[i].vel.add(kinObs[i].acc);
    kinObs[i].pos.add(kinObs[i].vel)
    kinObs[i].point.position(kinObs[i].pos);
    kinObs[i].point.draw(context);

    if(kinObs[i].pos.dx < kinObs[i].point.r || kinObs[i].pos.dx > canvas.width - kinObs[i].point.r){
      kinObs[i].vel.dx = - kinObs[i].vel.dx;
    }

    if(kinObs[i].pos.dy > canvas.height - kinObs[i].point.r){
      kinObs[i].vel.dy = - kinObs[i].vel.dy;
      kinObs[i].pos.dy = canvas.height - kinObs[i].point.r;
    }
  }


}

setUp();

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min) + min);
}
