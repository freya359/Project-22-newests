const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage,playerArcherimage;
var angle;

function preload() {
  backgroundImg = loadImage("background.png");
  baseimage = loadImage("base.png");
  playerimage = loadImage("player.png");
  playerArcherimage = loadImage("playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle=60

  var options = {
    isStatic: true
  };
  //create player base body
 playerBase= Bodies.rectangle(200, 350, 180, 150, options);
 World.add(world,playerBase);
  //create player body
player= Bodies.rectangle(250, playerBase.position.y-160,50,180, options);
World.add(world,player);

playerArcher= Bodies.rectangle(600,450,200,310,options);
World.add(world,playerArcher);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  //show the player image using image() function
 image(baseimage, 200, 295,170,130)
  //show the playerbase image using image() function
 image(playerimage, 240, 155,80,150)
 
 image(playerArcherimage,220,155,170,130)
 
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
