
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(100,300,400,20,option);
  World.add(world,ground);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    /*ESCOLHA UM DOS CÓDIGOS DE NEW BOX ONDE UMA CAIXA NOVA SURGE NA POSIÇÃO QUANDO CLICADO COM O MOUSE E RETIRE O "//" DELE */

    new Box(mouseY,mouseX,50,50)
    
    )
}

function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,400,10);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
  
  
}

