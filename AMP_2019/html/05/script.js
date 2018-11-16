const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kinObs = []

function setUp(){
  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);

  //spawning
  if(Math.random()<0.1){
    let kinOb = {};
    kinOb.point = new Point(0,0,getRandomNumber(20,40));
    kinOb.pos = new Vector2d(getRandomNumber(0,canvas.width),-50);
    kinOb.vel = new Vector2d(0,2);

    kinObs.push(kinOb);
  }

  //drawing
  for (let i = 0; i < kinObs.length; i++) {
    kinObs[i].pos.add(kinObs[i].vel)
    kinObs[i].point.position(kinObs[i].pos);
    kinObs[i].point.draw(context);

    //garbage collection
    if(kinObs[i].pos.dy > canvas.height + 100 ){
      kinObs.splice(i,1);
    }
  }
}

//mouseDetecting
document.addEventListener('mousedown',(evt)=>{
  let mousePos = {};
  mousePos.x = evt.clientX;
  mousePos.y = evt.clientY;

  for (var i = 0; i < kinObs.length; i++) {
    if(kinObs[i].point.distanceToOtherPoint(mousePos)<kinObs[i].point.r){
      //kinObs.splice(i,1);
      kinObs[i].point.color = "#ff0000";


    }

  }
})

setUp();

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min) + min);
}
