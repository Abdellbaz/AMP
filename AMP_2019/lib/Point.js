class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r||10;
    this.color = color || "white";
  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }

  printCoord(context,text,color,w){
      context.fillStyle = "white";
      this.width =w||100;
    context.fillRect(this.x+this.r-this.r*2,this.y+this.r-this.r*2.5,this.width, -20);
    context.fillStyle = color||"Black"
    context.font = "20px Arial";
    context.fillText(text,this.x+this.r-this.r*2,this.y+this.r-this.r*2.5);

  }
  printText(context,text,color,num,f){
  num= num||1.3;
    context.fillStyle = color||"Black"
    context.font = ''+f+"px Arial"||"20px Arial";
    context.fillText(text,this.x+this.r-this.r*num,this.y+this.r-this.r*0.5);
  }
  position(pos){
    this.x = pos.dx;
    this.y = pos.dy;
  }

  distanceToOtherPoint(P){
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

  drag(){
    let mousePosition ={};
    let dragStatus = false;
    console.log('point is gonna be dragged');
    document.addEventListener('mousedown',(evt)=>{
      mousePosition.x = evt.clientX;
      mousePosition.y = evt.clientY;
      console.log(this.distanceToOtherPoint(mousePosition),this.r);
      if(this.distanceToOtherPoint(mousePosition)<= this.r){
        dragStatus = true;
        evt.stopImmediatePropagation();
      } else {
        dragStatus = false;
      };
    });

    document.addEventListener('mousemove',(evt)=>{
      mousePosition = {};
      mousePosition.x = evt.clientX;
      mousePosition.y = evt.clientY;

      if(dragStatus == true){
        this.x = evt.clientX;
        this.y = evt.clientY;
      }
      if(this.distanceToOtherPoint(mousePosition)<= this.r){
        document.body.style.cursor = "pointer";
      } else {
        document.body.style.cursor = "default";
      }
    });

    document.addEventListener('mouseup',(evt)=>{
      dragStatus = false;
    })


  }
}
