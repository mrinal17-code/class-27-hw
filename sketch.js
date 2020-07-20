const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var log6,chain,ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bob = new Bob(100,100);
    log6=new Log(230,180,80,PI/2);
    chain =new Chain(bob.body,log6.body)
    ground=new Ground(200,200,200,10);
}

function draw(){
    background("red");
    Engine.update(engine);
    
    
    ground.display();
    
    bob.display();
   
    log6.display();
    chain.display();

}
