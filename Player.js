
class Player
{
    constructor() {
		this.x = 200;
		this.y=460;
		this.spt=createSprite(this.x, this.y, 50,50);
		this.spt.shapeColor="blue";
		this.spt.addAnimation("ironman",ironmanAnimation1);
		this.spt.scale=3.1;
        
	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}

	

	

	jump()
	{ 
		this.spt.velocityY=-30;

		
    }
	
}

