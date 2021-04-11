let walls = [];
dead = false;
const numberOfWall = Math.floor(clientWidth / (spaceBetweenWalls + thicknessOfWall));
let bird;
let mySound;
let ouchSound;

function preload() {
	soundFormats('mp3', 'ogg');
	mySound = loadSound('assets/hahaha.mp3');
	ouchSound = loadSound('assets/OUCH.mp3');
}

function setup() {
	mySound.play();
	bird = new Bird(loadImage('assets/bird.jpg'), ouchSound);
	createCanvas(clientWidth, clientHeight);
	for (let i = 0; i < numberOfWall + 1; i++) {
		walls[i] = new Wall(clientWidth + spaceBetweenWalls + (i * spaceBetweenWalls));
	}
}

function replay() {
	walls = [];
	dead = false;
	setup();
}

function draw() {
	background(254);
	if (bird.willIDie(walls) || dead){
		textSize(32);
		text('DEAD', 10, 30);
		dead = true;
		button = createButton('replay');
		button.position(50, 50);
		button.mousePressed(replay);
	} else {
		for (let w of walls){
			w.update();
			w.draw()
		}
		bird.update();
		bird.draw();
	}
}

function keyPressed() {
	if (keyCode === 32) {
		ouchSound.play();
		bird.jump();
	} else if (keyCode === ENTER) {
		replay()
	}
}
