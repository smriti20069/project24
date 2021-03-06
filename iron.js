class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={
		friction:3,
		density:30,
		restitution:0.8
	}
		
		this.body=Bodies.rectangle(x,y,50,50, options);
        this.width=50;
        this.height=50;
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
            var angle=this.body.angle;		
			push();
			translate(pos.x,pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("purple");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height);

			pop()
	}

}