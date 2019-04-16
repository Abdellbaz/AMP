const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kinObs = []
let M = new Point(210, 200, 20, "red");

function setUp(){

M.point = new Point(0,0,20,"#" + Math.floor(getRandomNumber(0,255*255*255)).toString(16));
M.pos = new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(0,canvas.height));
M.vel = new Vector2d(getRandomNumber(3,6),0);
M.acc = new Vector2d(0,0.2);



  update();
}

function update() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	requestAnimationFrame(update);

		M.vel.add(M.acc);
		M.pos.add(M.vel)
		M.point.position(M.pos);
		M.point.draw(context);
		if (M.pos.dx < M.point.r || M.pos.dx > canvas.width - M.point.r) {
			M.vel.dx = -M.vel.dx;
		}
		if (M.pos.dy > canvas.height - M.point.r) {
			M.vel.dy = -M.vel.dy;
			M.pos.dy = canvas.height - M.point.r;
		}

}
setUp();

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min) + min);
}
