var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxPosition=width/2-100
	boxY=610
	var options={
		isStatic:true
	}
boxLeft=Bodies.rectangle(boxPosition,boxY,20,100,options)
boxBase=Bodies.rectangle(boxPosition+100,boxY+400,200,20,options)
boxRight=Bodies.rectangle(boxPosition+200-20,boxY,20,100,options)
World.add(world,boxLeft)
World.add(world,boxRight)
World.add(world,boxBase)
leftSide=createSprite(boxPosition,boxY,20,100)
leftSide.shapeColor="red"
rightSide=createSprite(boxPosition+200,boxY,20,100)
rightSide.shapeColor="red"
bottom=createSprite(boxPosition+100,boxY+40,200,20)
bottom.shapeColor="red"

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageBody.restitution=0.7
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false)
    
  }
}



