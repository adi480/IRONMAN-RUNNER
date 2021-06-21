var END=0;
var PLAY = 1;
var LOSE = 2;
var gameState = PLAY;

var ironman;
var ironmanAnimation1;
var ironmanAnimation2;
var ground,backgroundImg,ground2;
var tree,tree1,tree2,tree3,tree4;
var carsGroup,car1,car;



//var gameOver, restart;



function preload()
{
  
  
  ironmanAnimation1=loadAnimation("images/Ironman1.png","images/Ironman2.png","images/Ironman3.png","images/Ironman4.png","images/Ironman5.png","images/Ironman6.png");
  ironmanAnimation2=loadAnimation("images/jump.png","images/jump1.png","images/jump1.png","images/jump2.png","images/jump2.png","images/jump3.png","images/jump3.png","images/jump4.png")

tree1=loadImage("images/Tree1.png")
tree2=loadImage("images/Tree2.png")
tree3=loadImage("images/Tree3.png")
tree4=loadImage("images/Tree4.png")
car1=loadImage("images/car.png")


}
function setup() {
    //Creating canvas equal to width and height of display
    createCanvas(displayWidth,566);
   

   
    backgroundImg=createSprite(500,490,100000000000000000000,10);
    
    ground2=createSprite(500,527,100000000000000000000,65);
    ground2.shapeColor="black";
    
    //creating a ground
    ground=createSprite(500,565,100000000000000000000,10);
    //creating a player ironman
    ironman = new Player();
  
   carsGroup = new Group();
    score = 0;
  
  }
  function draw() {
    background('skyblue');

    //code to move the camera
    translate(  -ironman.spt.x +300 , 0);

    


    if (gameState===PLAY){


       //Calling various function to controll ironman
      if (keyDown("up_arrow")&&ironman.spt.velocityY===0) 
      { 
        ironman.jump();
        ironman.spt.addAnimation("ironman",ironmanAnimation2);

      }
      if (keyDown("down_arrow")) 
      { 
        
        ironman.spt.addAnimation("ironman",ironmanAnimation1);

      }




      ground.velocityX=-20;
      ironman.applyGravity();
      spawntree();
      spawncars();



      if(carsGroup.isTouching(ironman.spt)){
        gameState=END;
      }
      


    }
    if(gameState==END) {   
      ground.setVelocity(0,0);
      tree.setVelocity(0,0);
      car.setVelocity(0,0);
      ironman.spt.setVelocity(0,0);
      ironman.spt.pause();
      ironman.spt.pause();
      stroke("red");
       fill ("red");
       textSize(40);
       text("GAME OVER",ironman.spt.x,300);      
       
        }
       
        

    
    
    //apply gravity to ironman and set colliding with platforms
    
    ironman.spt.collide(ground);
    
console.log(frameCount);
  drawSprites();
  }
  
  function spawntree(){

    if (frameCount%60===0){

      tree=createSprite(1300,232,10,40);

tree.scale=4;
tree.velocityX=-20;

    //adjust the depth
tree.depth = ironman.spt.depth;
ironman.spt.depth = ironman.spt.depth + 1;

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: tree.addImage(tree1);
              break;
      case 2: tree.addImage(tree2);
              break;
      case 3: tree.addImage(tree3);
              break;
      case 4: tree.addImage(tree4);
              break;
     
      default: break;
    }
  }
}
  function spawncars() {
    
if (frameCount % 81 === 0) {
   car = createSprite(1300,480,10,40);
car.velocityX = -20;



carsGroup.add(car);
}
  }



  

























