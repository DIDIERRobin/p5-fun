// see equilateral triangle coordinate to understand
const sqrt3d2 = Math.sqrt(3) / 2;
const ease = 0.00005;

class Bird {
	head;
	leftFoot;
	rightFoot;
	
	constructor(origin) {
		this.center = origin;
		this.head = createVector(0, -2 * birdSize);
		this.leftFoot = createVector(
			-sqrt3d2 * birdSize,
			0.5 * birdSize);
		this.rightFoot = createVector(
			sqrt3d2 * birdSize,
			0.5 * birdSize);
	}
	
	move(vector) {
		this.center.x += (vector.x - this.center.x) * ease;
		this.center.y += (vector.y - this.center.y) * ease;
	}
	
	draw(direction) {
		push();
		translate(this.center);
		rotate(-atan2(direction.x - this.center.x, direction.y - this.center.y) - PI);
		triangle(this.leftFoot.x, this.leftFoot.y,
			this.rightFoot.x, this.rightFoot.y,
			this.head.x, this.head.y);
		pop();
	}
}
