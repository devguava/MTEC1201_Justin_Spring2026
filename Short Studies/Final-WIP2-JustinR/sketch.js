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
	target = new Targets(400,400);
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
  // if (scene == 0 && button.hovering(mouse)){
  //   startGame();
  // }
	if(scene == 3 && mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
		startMenu();
	}
}

function startGame(){
	scene = 1
}
function gameScene(){
  background(0,0,40);
  fill(161,161,161);
  ellipse(width/2, 720, 1280, 400);
  target.update();
  target.draw();
}

class Targets{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.speed = 5;
	}
	update(){
		print('"Target(s) Axis" X:',this.x,'Y:',this.y);
		let mvmt = createVector(0,0)
		mvmt.setMag(this.speed);
		this.x += mvmt.x;
		this.y += mvmt.y;
	}
	draw(){
		fill(255,0,0);
		ellipse(this.x,this.y,75)
	}
}

class Button{
	constructor(x, y, w, h){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
	}
	hovering(other){
		let d = dist(this.x, this.y, other.x, other.y);
		
		if (d < this.x & this.y){
			return true;
		}
		else{
			return false;
		}
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