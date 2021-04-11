class Bird {
	ypos = clientHeight / 2;
	image = null;
	xstart = 0;
	xend = 0;
	remainingJumps = [];
	
	constructor(image) {
		this.image = image;
		const middlex = clientWidth / 2;
		this.xstart = middlex - birdThickness / 2;
		this.xend = middlex + birdThickness / 2;
	}
	
	move(y) {
		this.ypos += y;
		if (this.ypos + birdYSpeed >= clientHeight - 1) {
			this.ypos = 0;
		}
		if (this.ypos < 0) {
			this.ypos = clientHeight - birdThickness - 1;
		}
	}
	
	update() {
		this.move(birdYSpeed);
		if (this.remainingJumps.length) {
			this.move(-this.remainingJumps[this.remainingJumps.length - 1]);
			this.remainingJumps.pop();
		}
		
	}
	
	draw() {
		fill(220);
		image(this.image, this.xstart, this.ypos, birdThickness, birdThickness);
		// rect(clientWidth / 2, this.ypos, birdThickness, birdThickness)
	}
	
	willIDie(walls) {
		for (let w of walls) {
			if (w.xposition >= this.xstart && w.xposition <= this.xend) {
				if (this.ypos <= w.startYHole || (this.ypos + birdThickness) >= w.endYHole) {
					return true;
				}
			}
		}
		return false;
	}
	
	jump() {
		this.remainingJumps = [5, 10, 15, 25, 40];
	}
}
