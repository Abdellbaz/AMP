const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
let myPoints = [];
let counter = 0;

function setUp(){
  for (let i = 0; i <getRandomNumber(3,10); i++) { addPoint();}
  update();}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);

  if(Math.random()<0.1){
      myPoints.splice(0,1);
      addPoint();}

  context.beginPath();
  context.strokeStyle = "gray";
  context.fillStyle="rgba(255,255,0,0.5)"

  context.moveTo(myPoints[0].x,myPoints[0].y);
  for (var i = 0; i < myPoints.length;   i++) {
    context.lineTo(myPoints[i].x,myPoints[i].y);}
  context.fill();
  context.closePath();
  context.stroke();


  for (var i = 0; i < myPoints.length; i++) {
    myPoints[i].draw(context);
    myPoints[i].printText(context,myPoints[i].counter);}

}

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min) + min);
}
function addPoint(){
  let point = new Point(getRandomNumber(0,canvas.width)/3,getRandomNumber(0,canvas.height)/3,10);
  point.counter = counter;
  myPoints.push(point);
  counter++;}
  setUp();
