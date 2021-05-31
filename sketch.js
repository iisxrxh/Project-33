
var backgroundI;
var snowI;



function setup() {
  createCanvas(800,400);
 
  
}

function preload(){
  backgroundI = loadImage("snow1.jpg")
  snowI = loadImage("snow5.webp")


}

function draw() {
  background(backgroundI);  

 if(frameCount%2===0){
    var snow = createSprite(random(30, 780), -20, 10, 10)
    snow.velocityY = 5;
    snow.addImage(snowI)
    snow.scale = 0.1;
  }
  drawSprites();
}
