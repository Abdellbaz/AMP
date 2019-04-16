const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


	let kinObs = [];

function setup(){
	for (let i = 1; i < 100; i++) {

		let kOb = {};
  kOb.pos = new Vector2d(getRandomNumber(canvas.width/50,canvas.width),getRandomNumber(canvas.height/50,canvas.height));
  kOb.vel = new Vector2d(10,10);
  kOb.acc = new Vector2d(0,1);
  kOb.point = new Point(kOb.pos.dx,kOb.pos.dy,1,"RED");
	kinObs.push(kOb);
}
  animate();
}


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  for (let i = 0; i < kinObs.length; i++) {
    kinObs[i].vel.add(kinObs[i].acc);
    kinObs[i].pos.add(kinObs[i].vel)
		kinObs[i].vel.draw(context,kinObs[i].pos.dx,kinObs[i].pos.dy,5);
    kinObs[i].point.position(kinObs[i].pos);
    kinObs[i].point.draw(context);

    if(kinObs[i].pos.dx < kinObs[i].point.r || kinObs[i].pos.dx > canvas.width - kinObs[i].point.r){
      kinObs[i].vel.dx = - kinObs[i].vel.dx;
    }
		// else if(kinObs[i].pos.dx > kinObs[i].point.r || kinObs[i].pos.dx < 0+ kinObs[i].point.r){
	  //     kinObs[i].vel.dx = + kinObs[i].vel.dx;
	  //   }

    if(kinObs[i].pos.dy > canvas.height - kinObs[i].point.r){
      kinObs[i].vel.dy = - kinObs[i].vel.dy;
      kinObs[i].pos.dy = canvas.height - kinObs[i].point.r;
    }
		else if(kinObs[i].pos.dy < 0 + kinObs[i].point.r){
	      kinObs[i].vel.dy = - kinObs[i].vel.dy;
	      kinObs[i].pos.dy = canvas.height - kinObs[i].point.r;
	    }
  }


}

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min) + min);
}setup();
// function animate(){
//   requestAnimationFrame(animate);
//   context.clearRect(0,0,canvas.width,canvas.height);
//   kOb.vel.add(kOb.acc);
//   kOb.pos.add(kOb.vel);
//  kOb.vel.draw(context,kOb.pos.dx,kOb.pos.dy,5);
//   kOb.point.position(kOb.pos);
//   kOb.point.draw(context);
//   if(kOb.pos.dx < kOb.point.r || kOb.pos.dx > canvas.width - kOb.point.r){
//     kOb.vel.dx = -kOb.vel.dx;
//   }
//   if (kOb.pos.dy > canvas.height - kOb.point.r) {
//     kOb.vel.dy = -kOb.vel.dy;
//     kOb.pos.dy = canvas.height - kOb.point.r;
//   }
// }
