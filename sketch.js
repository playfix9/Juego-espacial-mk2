let ground;
let lander;
var lander_img;
var bg_img;
var fondo;
var enem_img;
var vy = 0;
var g = 0.05;
var gameState = "main";
function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("1866.jpg");
  enem_img = loadImage("nave-enemiga.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  fondo = createSprite(width/2,height/2,width,height);
  fondo.addImage(bg_img);
  fondo.scale=0.248;

  lander = createSprite(500,650,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.14;
  lander.setCollider("rectangle",0,0,690,900)
  lander.debug=true;
  
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);

  shipsSpawn();

  if(keyDown("a"))
  {
  lander.x-=8;
  }


  if(keyDown("d"))
  {
   lander.x+=8;
    
  }
if(gameState=="main"){
  if(keyDown("space")){
     bullet(); 
   }
   gameState="play";
   setTimeout(()=>{
gameState="main";

   },2000)
  }
  

  drawSprites();

  push()
  fill(255);
  textFont("rubikreg");
  textSize(30);
  text("Vertical Velocity: ",1150,60);
  pop();

}

function shipsSpawn(){
if (frameCount%100==0){
var enemie1 = createSprite(150,-60);
enemie1.addImage(enem_img);
enemie1.x=Math.round(random(30,1430));
enemie1.velocityY=1.3;
enemie1.scale=0.3;
enemie1.setCollider("rectangle",0,0,200,470);

}

}

function bullet(){
var bullet = createSprite(lander.x,lander.y,10,40);
bullet.velocityY=-3 ;
bullet.shapeColor="red";
bullet.depth=lander.depth;
bullet.depth-=1;

}