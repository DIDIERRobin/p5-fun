const birds = [];
let cnv;
let center;

function preload() {
	center = createVector(clientWidth / 2, clientHeight / 2);
	
	for (let i = 0; i < numberOfBird; i++) {
		birds.push(new Bird(createVector(random(clientWidth), random(clientHeight))))
	}
	angleMode(RADIANS);
}

function setup() {
	cnv = createCanvas(clientWidth, clientHeight);
}

function draw() {
	background(0);
	fill(254);
	noStroke();
	const mouseV = createVector(mouseX, mouseY);
	for (let b of birds) {
		b.move(mouseV);
		b.draw(mouseV);
	}
}
