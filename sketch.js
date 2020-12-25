const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

function preload() {
  backgroundImg = loadImage("city1.jpg");
  backgroundImg.scale=1;
}

function setup(){
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    //create Ground
    ground = new Ground(1500,790,3000,20);

    //creating boxes
    box1 = new Box(840,755,70,70);
    box2 = new Box(840,720,70,70);
    box3 = new Box(840,650,70,70);
    box4 = new Box(840,580,70,70);
    box5 = new Box(840,510,70,70);
    box6 = new Box(840,440,70,70);
    box7 = new Box(770,755,70,70);
    box8 = new Box(770,720,70,70);
    box9 = new Box(770,650,70,70);
    box10= new Box(770,580,70,70);
    box11= new Box(770,510,70,70);
    box12= new Box(770,440,70,70);
    box13= new Box(700,755,70,70);
    box14= new Box(700,720,70,70);
    box15= new Box(700,650,70,70);
    box16= new Box(700,580,70,70);
    box17= new Box(700,510,70,70);
    box18= new Box(700,440,70,70);
    box19= new Box(700,370,70,70);
    box20= new Box(700,300,70,70);
    box21= new Box(700,230,70,70);
    box22= new Box(700,160,70,70);
    box23= new Box(700,90,70,70);
    box24= new Box(700,20,70,70);   
    
    //creating ball
    ball = new Ball(200,200,80);

    //creating rope & attaching the ball
    rope = new Rope(ball.body,{x:500,y:150});
 
}

function draw() {
background(backgroundImg);
Engine.update(engine);

    //displaying ground
    ground.display();

    //displaying boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();    
    ball.display();
    rope.display();

}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});

}