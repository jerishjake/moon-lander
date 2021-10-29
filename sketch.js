let ground;
let lander;
var lander_img;
var bg_img;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);

  ground = createSprite(350,600,700,10)
  ground.visible = false;

}


function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
 
 


  drawSprites();

  if(lander.collide(ground)){
    vy = 0
  }

  

} 
 function keyPressed(){
  if(keyCode === UP_ARROW){
    vy = -1
  }

  if(keyCode === RIGHT_ARROW){
    lander.x += 5
  }
  if(keyCode === LEFT_ARROW){
    lander.x -= 5
  }


 }



