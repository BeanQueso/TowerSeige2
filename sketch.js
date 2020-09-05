const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function setup() {
  
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
  ground  = new Ground(400, 380, 800, 20);
  block1 = new Pig(120,350,30,40);
  block2 = new Pig(150,350,30,40);
  block3 = new Pig(180,350,30,40);
  block4 = new Pig(210,350,30,40);
  block5 = new Pig(240,350,30,40);
  block6 = new Pig(270,350,30,40);
  block7 = new Pig(300,350,30,40);

  block8 = new Pig(150,310,30,40);
  block9 = new Pig(180,310,30,40);
  block10 = new Pig(210, 310, 30, 40);
  block11 = new Pig(240,310,30,40);
  block12 = new Pig(270,310,30, 40);

  block13 = new Pig(180,280,30,40);
  block14 = new Pig(210,280,30,40);
  block15 = new Pig (240, 280,30,40);

  block16 = new Pig(210,240,30,40);

  polygon = new Polygon(700,300,50,50);

  sling = new SlingShot(polygon.body, {x:600,y:200});
  


}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
  sling.display();
}
function mouseDragged(){
    
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
sling.fly();

}
function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x:500, y: 50});
     sling.attach(polygon.body);
  }
}