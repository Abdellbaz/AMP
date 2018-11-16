const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let gear = new Image();
gear.src = "weel1.png";
gear.rotation = 0;
gear.addEventListener('load',()=>{
  animate();

})



function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.save();
	context.translate(canvas.width/2+gear.width,canvas.height/2+gear.height/2);
  context.rotate(gear.rotation);
  context.drawImage(gear,-0.5*gear.width,-0.5*gear.height);
  context.restore();

  context.save();
	context.translate(canvas.width/2+45,canvas.height/2+5);
  context.rotate(-gear.rotation-8);
  context.drawImage(gear,-0.5*gear.width,-0.5*gear.height);
  context.restore();
  gear.rotation+= 0.01;
}
