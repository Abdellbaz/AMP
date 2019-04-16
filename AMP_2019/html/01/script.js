const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let myPoints = [];

function update(){
  myPoint = new Point(getRandomNumber(canvas.width),getRandomNumber(canvas.height));  requestAnimationFrame(update);
  myPoints.push(myPoint);
  context.clearRect(0,0,canvas.width,canvas.height);
  for (let i = 0; i < myPoints.length; i++) {
    myPoints[i].draw(context);
  }

}

update();

function getRandomNumber(max){
  return Math.random()*max;
}
