const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof;
var rope1, rope2, rope3, rope4, rope5;
var world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,50,700,50);
	//Create the Bodies Here.
	bobObject1 = new Bob(150,500,125,50);
	bobObject2 = new Bob(275,500,125,50);
	bobObject3 = new Bob(400,500,125,50);
	bobObject4 = new Bob(525,500,125,50);
	bobObject5 = new Bob(650,500,125,50);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
  
	rope1 = new Rope(bobObject1.body, roof.body, -250, -350)
	rope2 = new Rope(bobObject2.body, roof.body, -125, -350)
	rope3 = new Rope(bobObject3.body, roof.body, 0, -350)
	rope4 = new Rope(bobObject4.body, roof.body, 125, -350)
	rope5 = new Rope(bobObject5.body, roof.body, 250, -350)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  keyPressed();
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50, y:-45});
	}
  }
  
  function drawLine(constraint)
  {
	  bobBodyPosition=constraint.bodyA.position
	  roofBodyPosition=constraint.bodyB.position
  
	  roofBodyOffset=constraint.pointB;
	  
	  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
  }
  


