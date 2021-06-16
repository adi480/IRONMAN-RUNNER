class Player
{
    constructor() {
		this.x = 200;
		this.y=360;
		this.spt=createSprite(this.x, this.y, 50,50);
		this.spt.shapeColor="blue";
		this.spt.addAnimation("ironman",ironmanAnimation1);
		this.spt.scale=3.1;
        
	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}

	moveLeft()
	{ 
		this.spt.x=this.spt.x-12;
        ironman.spt.addAnimation("ironman",ironmanAnimation2);
		ironman.spt.scale=3.1;

	}

	moveRight()
	{ 
		this.spt.x=this.spt.x+12;
		ironman.spt.addAnimation("ironman",ironmanAnimation3);
		ironman.spt.scale=3.1;

	}

	jump()
	{ 
		this.spt.velocityY=-30;

		
    }
	
}
