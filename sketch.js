
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function preload(){
	tree = loadImage("Images/tree.png"); 
	Boy = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,800,50)
	ball1 = new Mangoes(260, 140, 20); 
	ball2 = new Mangoes(300, 100, 20);  
	ball3 = new Mangoes(350, 125, 20)
	ball4 = new Mangoes(225, 175, 20)
	stone = new Stones(40, 300, 20)
	string = new Strings(stone.body,{x:40,y:260})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER); 
  image(tree, 600, 400, 500, 500); 
  image(Boy, 150, 575, 250, 185); 

  ground.display(); 
  ball1.display(); 
  ball2.display();
  ball3.display();
  ball4.display(); 
  stone.display(); 
  string.display(); 
 
}



