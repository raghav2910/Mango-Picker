class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
        this.image=loadImage('stone.png');
	}
	display()
	{
			
			var stonepos = this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(3);
            fill(255,0,255)
            imageMode(CENTER)
            image(this.image,0,0,40,40);
			// ellipse(0,0,this.r, this.r);
			pop()
			
	}

}