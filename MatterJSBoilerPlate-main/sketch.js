
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var groundOBJ
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	//Create the Bodies Here.
	ball = Bodies.circle(50,200,700,ball_options)
	World.add(world,ball)
    groundOBJ = new Ground(width/2,670,width,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,20);

 
 
 
  drawSprites();
 
}



