var canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var context = canvas.getContext("2d");
var img= new Image();
img.src="images/rinna.png";
var noOfHearts = 20;
var heart=[];

for (var i=0; i<noOfHearts; i++){
var x = Math.floor(Math.random()*canvas.width);
var y = Math.floor(Math.random()*canvas.height);
heart[i]=new Heart(x,y);
}



function Heart(x,y){
  this.x=x;
  this.y=y;

  this.fall = function(){
    var dir = Math.floor(Math.random()*3);
    if (dir===0){
      this.x=this.x;
    }
    if (dir===1){
      this.x=this.x-1;
    }
    if (dir===2){
      this.x=this.x+1;
    }


    this.y=this.y+1;
    if(this.y > canvas.height){
      this.y = 0;
    }
  }

  this.show=function(){
    context.drawImage(img,this.x,this.y,60,60);
  }
}

function draw(){
  context.fillStyle = "black";
  context.fillRect(0,0,canvas.width, canvas.height);
  for (var i=0; i<noOfHearts;i++){
    heart[i].show();
    heart[i].fall();
  }
}

function update(){
  draw();
  window.requestAnimationFrame(update);

}

update();
