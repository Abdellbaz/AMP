const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

	          var myVar = setInterval(function(){
	          var d = new Date();
	          var h = d.getHours();
	          var m = d.getMinutes();
	          var s = d.getSeconds();
	          var day = d.getDate();
	          var month = d.getMonth()+1;
	          var year = d.getFullYear();
	          if (h<10) {h = "0" + h;}
	          if (m<10) {m = "0" + m ;}
	          if (s<10) {s = "0" +  s;}
	          if (date<10) {date = "0"+date;}
	          if (month<10) {month = "0"+month;}
	          time.textContent = h + ":" + m + ":" + s;
	          date.textContent = day+"-"+month+"-"+year;
},1000);

let d = new Date();
let midX = canvas.width/2;
let midY = canvas.height/2;

let hours = new Image();
let minutes = new Image();
let seconds = new Image();
let clockFace = new Image();
hours.src = "hours.png";
minutes.src = "minutes.png";
seconds.src = "seconds.png";
clockFace.src = "face.png";
clockFace.addEventListener('load',()=>{
animate();

})

function animate(){
	d = new Date();
	context.clearRect(0,0,canvas.width,canvas.height);
	requestAnimationFrame(animate);
	context.drawImage(clockFace,0,0);

			context.save();
			context.translate(midX,midY);
			context.rotate(d.getSeconds()*2*Math.PI/60)
			context.drawImage(seconds,-2,-183);
			context.restore();

			context.save();
			context.translate(midX,midY);
		  context.rotate(d.getMinutes()*2*Math.PI/60)
			context.drawImage(minutes,-5.5,-143);
			context.restore();

			context.save();
			context.translate(midX,midY);
			context.rotate(d.getHours()*2*Math.PI/12)
			context.drawImage(hours,-5,-94);
			context.restore();



}
