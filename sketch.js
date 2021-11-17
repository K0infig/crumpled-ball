
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftWall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	var ball_options={
		isStatic:false,
		restitution : 0.3,
		friction:0,
		density:1.2
	}

  	ball = Bodies.circle(100,100, 20,ball_options);
 	World.add(world, ball);

	 ground = new Ground(400,680, 800, 20);
	 leftWall = new Ground(600, 640, 10, 60);

	 ellipseMode(RADIUS);

}
 


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 20, 20);
  ground.display();
  leftWall.display();
  
  drawSprites();
 
}



