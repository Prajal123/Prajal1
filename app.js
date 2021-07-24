var canvas=document.querySelector('canvas');
var ctx= canvas.getContext('2d');

canvas.height=innerHeight-23;
canvas.width=innerWidth-22;
var holearray=[];
var score=0,animation;
var highscore=localStorage.getItem('highscore');
holearray.push(new hole());
var holearray1=[];
var audio1=["audio1.wav","audio2.wav","audio3.wav","audio4.wav"];
var canvas=document.querySelector('canvas');
var ctx= canvas.getContext('2d');

canvas.height=innerHeight-23;
canvas.width=innerWidth-22;
var holearray=[];
var score=0,animation;
var highscore=localStorage.getItem('highscore');
holearray.push(new hole());
var holearray1=[];
var audio1=["audio1.wav","audio2.wav","audio3.wav","audio4.wav"];
var audio=new Audio(audio1[Math.floor(Math.random()*4)]);
function playaudio(){
    audio.play();
}
var t=setInterval(playaudio,1000);
var bgsrc=['bgimg8.jpg','bgimg9.jpg','bgimg10.jpg','bgimg11.jpg','bgimg12.jpg'];
var bg=new Image();
bg.src=bgsrc[Math.floor(Math.random()*5)];

var background={
    x:0,
    y:0,
    render:function(){
        ctx.drawImage(bg,this.x=this.x-1-.01*score,100);
        if(this.x<=-2516){
            this.x=0;
        }
        if(score%700>=300 && score%700<=399){
            this.x+=0.01*score;
        }
    }
}
ctx.fillStyle="green";
        ctx.fillRect(0,0,canvas.width,100);


var triangle={
    x:Math.random()*1000,
    y:0,
   box:0,

   jump:function(){
    if(this.box==1){
     this.y=100;
     ctx.beginPath();
     ctx.moveTo(this.x,this.y);
     ctx.lineTo(this.x+70,this.y+100);
     ctx.lineTo(this.x+100,this.y);
     ctx.fillStyle="green";
     ctx.fill();
     ctx.closePath();
    }
    else{
        this.y=canvas.height-100;
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x+30,this.y-100);
        ctx.lineTo(this.x+100,this.y);
        ctx.fillStyle="green";
        ctx.fill();
        ctx.closePath();  
    }
    

},
reducey:function(){
 if(this.box==0){
     this.box=1;
     
    
 }
 else{
     this.box=0;
     
     
 }
}
}
var obstaclearray=[];
obstaclearray.push(new obstacle());
setInterval(addobstacle,15000);
var animation2;
function addobstacle(){
    obstaclearray.push(new obstacle());
}
function obstacle(){
    this.x=1250,
    this.radius=Math.random()*20 +10,
    this.y=Math.random()*(canvas.height-300)+100+this.radius,
    this.dy=1,
 
    this.draw2=function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        ctx.fillStyle="red";
        ctx.fill();
        ctx.closePath();
    },
    this.update2=function(){
       this.x=this.x-1-.01*score;
       if(this.y+this.radius>=canvas.height-100 || this.y-this.radius<=100){
           this.dy=-this.dy;
       }
       this.y-=this.dy;
       this.draw2();
      
       if(score%700>=300 && score%700<=399){
        this.x+=.01*score;
        ctx.fillStyle="black";
        ctx.fillText("Enjoy the powerup",1000,350);
    } 
        if(score%700<=600 ){
       for(var i=0;i<obstaclearray.length;i++){
           if(triangle.box==1){
           if((this.x-this.radius)<=(triangle.x+70) && (this.x+this.radius)>=triangle.x && (this.y+this.radius)<=(triangle.y+70)){
            cancelAnimationFrame(animation2);
               cancelAnimationFrame(animation);
               ctx.fillStyle="black";
               ctx.fillText("Score:"+Math.floor(score) ,1000,200);
               ctx.fillStyle="green";
               ctx.fillRect(0,canvas.height-100,canvas.width,100);
               triangle.jump();
               highscore1();
              clearTimeout(t);
           };
       }
       else{
        if((this.x-this.radius)<=(triangle.x+70) && (this.x+this.radius)>=triangle.x && (this.y+this.radius)>=(triangle.y-70)){
            cancelAnimationFrame(animation2);
               cancelAnimationFrame(animation);
               ctx.fillStyle="black";
               ctx.fillText("Score:"+Math.floor(score) ,1000,200);
               ctx.fillStyle="green";
               ctx.fillRect(0,canvas.height-100,canvas.width,100);
               triangle.jump();
               highscore1();
               clearTimeout(t);
           };
       }
    }
}
else{
    ctx.fillStyle="black";
    ctx.fillText("Enjoy the invincibility",900,350);
}
       
    }

}

function animate2(){
    animation2= requestAnimationFrame(animate2);
    // background.render();
    ctx.clearRect(0,100,canvas.width,canvas.height-100);
    background.render();
    for(var i=0;i<obstaclearray.length;i++){
        obstaclearray[i].update2();
    }
   
}
animate2();


window.addEventListener("click",function(e){
    if(e.y>=100 && e.y<=canvas.height-100){
       if(triangle.y==100 || triangle.y==canvas.height-100){
           triangle.reducey();
       }
    }
})

setInterval(addhole,27000 +Math.random()*4000 );
setInterval(addhole1,32000);
function hole(){
    this.x=canvas.width;
    this.y=canvas.height-100;
    this.y1=0;
    
    this.draw=function(){
        ctx.fillStyle="green";
        ctx.fillRect(0,canvas.height-100,canvas.width,100);
        triangle.jump();
        
        ctx.fillStyle="white";
        ctx.fillRect(this.x,this.y,200,100);
        
        ctx.fillStyle="black";
         ctx.font="30px Consolas";
        ctx.fillText("Score:"+Math.floor(score),1000,200);
    }
    this.draw1=function(){
        ctx.fillStyle="green";
        ctx.fillRect(0,0,canvas.width,100);
        
        ctx.fillStyle="white";
        ctx.fillRect(this.x,this.y1,200,100);
    }
    this.update=function(){
        this.x=this.x-1-.01*score;
        this.draw();
        score+=.1;
        if(score%700>=300 && score%700<=399){
            this.x+=.01*score;
            ctx.fillStyle="black";
            ctx.fillText("Enjoy the powerup",1000,350);
        }
        
        if(score%700<=600){
      for(var i=0;i<holearray.length;i++){
          if(holearray[i].x<=triangle.x+100 && triangle.x<=holearray[i].x+100 && holearray[i].y==triangle.y){
              cancelAnimationFrame(animation);
              cancelAnimationFrame(animation2);
              highscore1();
              clearTimeout(t);
          }
      }
    }
    else{
        ctx.fillStyle="black";
        ctx.fillText("Enjoy the invincibility",900,350);
    }
}

    this.update1=function(){
        this.x=this.x-1-.01*score;
        this.draw1();
        if(score%700>=300 && score%700<=399){
            this.x+=.01*score;
        
        }
        if(score%700<=600 ){
        for(var i=0;i<holearray1.length;i++){
        if(holearray1[i].x<=triangle.x +100 && triangle.x<=holearray1[i].x+100 && holearray1[i].y1+100==triangle.y){
            cancelAnimationFrame(animation);
            cancelAnimationFrame(animation2);
            highscore1();
            clearTimeout(t);
        }
        }
    }
    else{
        ctx.fillStyle="black";
        ctx.fillText("Enjoy the invincibility",900,350); 
    }
    }
}

function addhole(){
    holearray.push(new hole());
}
function addhole1(){
    holearray1.push(new hole());
}

function animate(){
    
    if(holearray1.length>=1 ){
        ctx.clearRect(0,0,canvas.width,100);}
    
  animation=  requestAnimationFrame(animate);

  for(var i=0;i<holearray.length;i++){
    holearray[i].update();
  }
  for(var i=0;i<holearray1.length;i++){
      holearray1[i].update1();
  }
 
}
animate();


function highscore1(){
    if(highscore!=null){
        if(score>highscore){
            localStorage.setItem("highscore",score);
        }
    }
    else{
        localStorage.setItem("highscore",score);
    }
        ctx.fillStyle="black";
        ctx.fillText("Highscore :" + Math.floor(highscore),1000,300);
}
