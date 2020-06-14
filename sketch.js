const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bodies;
var ground;
var catapult;
var block1, block2, block3, block4, block5, block6;
var laser;
var gameState = "onsling"
var score = 0;

function setup() {
  createCanvas(1200, 900);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  catapult = new Catapult(ball.body,{x:200, y:50});
  laser = new Enemy();
  block1 = new Block(200,0);
  block2 = new Block(300,0);
  block3 = new Block(200,200);
  block4 = new Block(300,200);
  block5 = new Block(200,400);
  block6 = new Block(300,400);
  
}

function draw() {
  background(255);
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  Engine.update(engine);

  ground.display()
  catapult.display();
  enemy.display();
  ball.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();

  
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(catapult.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
    catapult.fly();
    gameState = "launched";
}




