const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball;


function setup(){
createCanvas(400,400)

engine = Engine.create();
world= engine.world;

var option2 = {
  restitution: 1
}
ball = Bodies.circle(200,100,20,option2);
World.add(world,ball);

ground1 = new Ground(0,390,500,10)
ground2 = new Ground(0,0,500,10)
ground3 = new Ground(0,0,10,500)
ground4 = new Ground(390,0,10,500)
console.log(ball);

} 




function draw (){
background("white")
Engine.update(engine);
ellipse(ball.position.x,ball.position.y,50)
ground1.display();
ground2.display()
ground3.display()
ground4.display()

}

function froce1(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  
}
function mousePressed(){
  froce1();
}
