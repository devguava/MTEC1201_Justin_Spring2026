let startButtonXposition = 1280/2;
let startButtonYposition = 720/2;
let startButtonXsize = 400;
let startButtonYsize = 100;
let target;
let button;
let scene = 0;
// let mouse = (mouseX,mouseY);


function setup(){
	createCanvas(1280,720);
	target = new Targets(10, 5);
}

function draw(){
	print('scene: ', scene);
	//print('"Mouse Axis" X:',mouseX,'Y:',mouseY);
	if(scene == 0){
		titleScene();
	}else if(scene == 1){
		gameScene();
	}else if(scene == 2){
		gameOver();
	}
}

function startMenu(){
	scene = 0
}

function titleScene(){
	background(107,166,249);
	rectMode(CENTER);
	fill(255,255,255);
	rect(startButtonXposition,startButtonYposition,startButtonXsize,startButtonYsize);
	textAlign(CENTER);
	textSize(100);
	fill(0,0,0);
	text('Space Hunt',width/2,200);
	textSize(75);
	text('START',width/2,385);
	if(mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
		//print('in');
		fill(255,255,255);
		rect(startButtonXposition,startButtonYposition,startButtonXsize + 25,startButtonYsize + 25);
		fill(0,0,0);
		textSize(100);
		text('START',width/2,395);
	}else{
		//print('out');
	}
}

function mousePressed(){
	if(scene == 0 && mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
		startGame();
	}
	if(scene == 3 && mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
		startMenu();
	}
}

function startGame(){
	scene = 1
}
function gameScene(){
	background(0,0,40);
	target.update();
	target.draw();
	fill(161,161,161);
	ellipse(width/2, 720, 1290, 200);
}

class Targets{
	constructor(tempXSpeed, tempYSpeed){
		this.x = random(100,1180);
		this.y = 720;
		this.ySpeed = tempYSpeed
		this.xSpeed = tempXSpeed
		this.radius = 75
		this.randomXDirection = random(-1,1)
	}
	update(){
		this.x = this.x + (this.xSpeed * this.randomXDirection);
		this.y -= this.ySpeed;

		if (this.x > width - (this.radius - 40) || this.x < 0 + (this.radius - 40)){
			this.xSpeed *= -1;
		}
		print('X Speed: ', this.xSpeed)
		// print('Y Speed: ', this.ySpeed)

	}
	draw(){
		fill(255,0,0);
		ellipse(this.x, this.y, this.radius);
	}
}

// function startOver(){
// 	scene = 2;
// }

// function gameOver(){
// 	setTime = 0
// 	background(0,0,0);
// 	text("You've been caught!",width/2,height/2);
// }