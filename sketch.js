
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,680,800,50);
hammer = new Hammer(400,200,40,150);
rubbad = new Rubber(500,600,50,50);
stone = new Stone(300,600,80,80);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 hammer.display();
 rubbad.display();
 stone.display();
 
}



