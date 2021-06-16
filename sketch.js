var ironman;
var ironmanAnimation1,ironmanAnimation3,ironmanAnimation2;
var ground;
function preload()
{
  
  ironmanAnimation1=loadAnimation("images/Ironmanq2.png","images/Ironmanq2.png","images/Ironmanq1.png","images/Ironmanq2.png","images/Ironmanq2.png")
  ironmanAnimation3=loadAnimation("images/Ironman1.png","images/Ironman2.png","images/Ironman3.png","images/Ironman4.png","images/Ironman5.png","images/Ironman6.png");
  ironmanAnimation2=loadAnimation("images/Ironmanb1.png","images/Ironmanb2.png","images/Ironmanb3.png","images/Ironmanb4.png","images/Ironmanb5.png","images/Ironmanb6.png");
  



}
function setup() {
    //Creating canvas equal to width and height of display
    createCanvas(displayWidth,466);
    
    //creating a player ironman
    ironman = new Player();
    //creating a ground
    ground=createSprite(500,465,100000,10);
    
  
    
       
       
  
  }
  function draw() {
    background('skyblue');
  
   

    //code to move the camera
    translate(  -ironman.spt.x +200 , 0);
    
    //apply gravity to ironman and set colliding with platforms
    ironman.applyGravity();
    ironman.spt.collide(ground);
    
  
    //Calling various function to controll ironman
    if (keyDown("left_arrow"))  
    { 
      ironman.moveLeft();
      
    }
    if (keyDown("right_arrow")) 
    {
      
      ironman.moveRight();
    }
    if (keyDown("up_arrow")&&ironman.spt.velocityY===0) 
    { 
      ironman.jump();
    }

  drawSprites();
  }
  

























