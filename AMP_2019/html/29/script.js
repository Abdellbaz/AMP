const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let earth = {},moon = {},distanceEarthToMoon=1;

function setup() {
  earth.pos = new Vector2d(canvas.width/3,canvas.height/3);
  earth.Point = new Point(earth.pos.dx,earth.pos.dy,50,"red")
  moon.vel =new Vector2d(1,1);
  moon.acc = new Vector2d(0,0);
  moon.pos = new Vector2d(200,200);
  moon.Point = new Point(moon.pos.dx,moon.pos.dy,30,"White")
  animate();
}
setup();
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
   Movement();
   Draw();
 Cal()

}
function Draw() {
  earth.Point.draw(context)
  moon.Point.draw(context)
  moon.acc.draw(context,moon.pos.dx,moon.pos.dy,1,"white");
}
function Movement() {
  moon.vel.add(moon.acc);
  moon.pos.add(moon.vel);
  moon.Point.position(moon.pos);
}
function Cal() {
  distanceEarthToMoon = earth.Point.distanceToOtherPoint(moon.Point);
  moon.acc.diffenceVector(moon.pos,earth.pos);
  moon.acc.r = 10000/(distanceEarthToMoon*distanceEarthToMoon);
}
