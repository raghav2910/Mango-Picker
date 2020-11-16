
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var groundObj;
var treeObj;
var boyObj,boyImg;
var slingShot;
var stoneObj;
var mango1 ,mango2, mango3, mango4, mango5;

function preload()
{
	boyImg=loadImage('boy.png')
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 boyObj= createSprite(200,620)
	 boyObj.scale=0.1
	 boyObj.addImage(boyImg);
	  
	 stoneObj=new Stone(200,200,30);
     groundObj=new Ground(600,height,1200,50)
     treeObj=new Tree(1000,450,40,40);	
	
	 mango1= new Mango(1050,360,20);
	 mango2= new Mango(850,360,20);
	 mango3=new Mango(1000,300,20);
	 mango4=new Mango(900,300,20);
	 mango5=new Mango(1150,300,20);

	 slingshot = new SlingShot(stoneObj.body,{x:140,y:560});

 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  groundObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  slingshot.display();
  keyPressed();
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r)
    {
      Matter.Body.setStatic(lmango.body,false)
    }

}

function keyPressed(){
  if(keyCode === 32){
  slingshot.attach(stoneObj.body);
}
}