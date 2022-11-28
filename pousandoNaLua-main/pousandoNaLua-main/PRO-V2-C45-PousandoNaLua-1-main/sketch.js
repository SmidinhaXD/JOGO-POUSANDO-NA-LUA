let ground;
let lander;
var lander_img;
var bg_img;
var player;
var player_ing;
var vx = 0;
var g = 0.05;
var vy = 0;
var base;
var obs;
var base_ing;
var obs_ing;
var fim;

function preload()
{
 bg_img = loadImage("bg.png");
 player_ing = loadImage("normal.png");
 obs_ing = loadImage("obstacle.png");
 base_ing = loadImage("lz.png");
 fim = loadImage("crash3.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  player = createSprite(100,50,30,30);
  player.addImage(player_ing);
  player.addImage("fim",fim);
  player.scale = 0.1;
  player.setCollider("rectangle",0,0,200,200);
  player.debug = true;
  ground = createSprite(500,690,1000,20);
  base = createSprite(880,610,50,30);
  base.addImage(base_ing);
  base.scale = 0.3;
  base.setCollider("rectangle",0,180,500,50);
  base.debug = true;
  obs = createSprite(320,530,50,100);
  obs.addImage(obs_ing);
  obs.scale = 0.5 ;
  obs.setCollider("rectangle",-50,150,160,150);
  obs.debug = true;
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  //colocar texto na tela para velocidade vertical
  pop();

  vy = vy + g
  player.position.y += vy
  player.position.x += vx
  
  if(player.isTouching(obs)||player.isTouching(ground)){
    vx = 0;
    vy = 0;
    g = 0;
    player.changeImage("fim");
  }
  
  if(player.isTouching(base)){
    vx = 0;
    vy = 0;
    g = 0;
  }


  drawSprites();
}
function keyPressed(){
  if(keyCode == UP_ARROW){
   vy = -1
  }
  if(keyCode == RIGHT_ARROW){
    vx += 0.2
}
  if(keyCode == LEFT_ARROW){
    vx -= 0.2
 }
}  

