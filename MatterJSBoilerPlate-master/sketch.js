const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rock, sling;
var mango1,mango2,mango3,mango4,mango5,mango6;
var tree;
var score=0;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    rock = new Rock(200,50);

    //log6 = new Log(230,180,80, PI/2);
    sling = new SlingShot(rock.body,{x:200, y:50});
}

function draw(){
background("skyblue")
    Engine.update(engine);
    
    ground.display();
   
    rock.display();
   
    sling.display();    
    }

function mouseDragged(){
    if (gameState!=="launched"){
        
        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        
        Matter.Body.setPosition(bird.body,{x:200,y:50})
     sling.attach(rock.body);
     gameState="onSling";
    }
}
