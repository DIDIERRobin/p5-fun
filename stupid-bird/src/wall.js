class Wall {
	startYHole = 0;
	endYHole = 0;
	heigthHole = 0;
	xposition = 0;
	
	constructor(x) {
		this.generateHole();
		this.xposition = x;
	}
	
	generateHole() {
		this.startYHole = Math.floor(random(clientHeight - sizeOfHole));
		this.endYHole = this.startYHole + sizeOfHole;
	}
	
	refreshWall() {
		this.xposition += clientWidth;
		this.generateHole()
	}
	
	update() {
		this.xposition -= xspeed;
		if (this.xposition < 0) {
			this.refreshWall()
		}
	}
	
	draw() {
		fill(42);
		rect(this.xposition, 0, thicknessOfWall, this.startYHole);
		rect(this.xposition, this.endYHole, thicknessOfWall, clientHeight);
	}
}
