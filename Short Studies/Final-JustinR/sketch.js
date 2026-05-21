/*
Title: Space Hunt
By: Justin Roldan
Input: Click the left mouse button on the red circle(UFOs) to capture them.
Goal: Capture all five UFOs
*/

let startButtonXposition = 1280/2;
let startButtonYposition = 720/2;
let startButtonXsize = 400;
let startButtonYsize = 100;
let target0;
let target1;
let target2;
let target3;
let target4;
let button;
let scene = 0;
let captured = 0;
let requiredCapture;
let gameMusic;
let gameOverMusic;
let victoryMusic;
let mainMenuMusic;
let victoryhasPlayed = false;
let gameOverhasPlayed = false;
// let timer;
// let interval;
// let startTime;
// let globalTime;


function preload(){
	soundFormats('mp3')
	gameMusic = loadSound('audio/music/Background Music.mp3');
    gameOverMusic = loadSound('audio/music/Game Over.mp3');
    victoryMusic = loadSound('audio/music/Victory!.mp3');
    mainMenuMusic = loadSound('audio/music/Course Select.mp3');
}

function setup(){
	gameMusic.setVolume(0.5);
	gameOverMusic.setVolume(0.5);
	victoryMusic.setVolume(0.5);
	mainMenuMusic.setVolume(0.5);
	createCanvas(1280,720);
	target0 = new Targets(random(2,10), random(1,4));
	target1 = new Targets(random(2,10), random(1,4));
	target2 = new Targets(random(2,10), random(1,4));
	target3 = new Targets(random(2,10), random(1,4));
	target4 = new Targets(random(2,10), random(1,4));
}

function draw(){
	//print('scene: ', scene);
	//print('Global Time:', int(millis()/1000);
	//print('"Mouse Axis" X:',mouseX,'Y:',mouseY);
	if(scene == 0){
		titleScene();
	}else if(scene == 1){
		gameScene();
	}else if(scene == 2){
		gameOver();
	}else if(scene == 3){
		niceWork();
	}
}

function startMenu(){
	victoryMusic.stop();
	gameOverMusic.stop();
	scene = 0
}

function titleScene(){
	if(mainMenuMusic.isPlaying() == false){
		mainMenuMusic.play();
	}

	background(161,161,161);
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

	if(scene == 1){
		target0.shot();
		target1.shot();
		target2.shot();
		target3.shot();
		target4.shot();
		print("Captured: ", captured)
	}

	if(scene == 2 && mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
		victoryMusic.stop()
		startMenu();
	}

	if(scene == 3 && mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
		gameOverMusic.stop()
		startMenu();
	}
}

function startGame(){
	mainMenuMusic.stop()
	scene = 1
}
function gameScene(){
	if(gameMusic.isPlaying() == false){
		gameMusic.play();
	}
	
	captured = 0;
	requiredCapture = 5;

	background(0,0,40);
	textAlign(CENTER);
	target0.update();
	target0.draw();
	target1.update();
	target1.draw();
	target2.update();
	target2.draw();
	target3.update();
	target3.draw();
	target4.update();
	target4.draw();
	fill(161,161,161);
	ellipse(width/2, 720, 1290, 200);
	

	if(captured == requiredCapture){
		scene == 3;
		gameMusic.stop()
	}
	
	if(captured < requiredCapture){
		scene == 2;
		gameMusic.stop()
	}
}

class Targets{
	constructor(tempXSpeed, tempYSpeed){
		this.x = random(100,1180);
		this.y = 720;
		this.ySpeed = tempYSpeed
		this.xSpeed = tempXSpeed
		this.colorR = 255
		this.colorG = 0
		this.colorB = 0
		this.radius = 75
		this.randomXDirection = random(-1,1)
	}
	update(){
		//print('X Speed: ', this.xSpeed)
		//print('Y Speed: ', this.ySpeed)
		this.x = this.x + (this.xSpeed * this.randomXDirection);
		this.y -= this.ySpeed;

		if (this.x > width - (this.radius - 40) || this.x < 0 + (this.radius - 40)){
			this.xSpeed *= -1;
		}
	}

	shot(){
		let d = dist(mouseX, mouseY, this.x, this.y)

		if (d < (this.radius - 40)){
			this.xSpeed *= 0
			this.ySpeed *= 0
			this.colorG = 255
			this.colorR = 0
			captured += 1
			print("Got 'em");
			
		}
	}

	draw(){
		fill(this.colorR,this.colorG,this.colorB);
		ellipse(this.x, this.y, this.radius);
	}
}

function endingBad(){
	scene = 2;
}

function gameOver(){
	if (!gameOverMusic.isPlaying() && !gameOverhasPlayed) {
		gameOverMusic.play();
		gameOverhasPlayed = true;
	}
	background(0,0,0);
	rectMode(CENTER);0
	fill(255,255,255);
	rect(startButtonXposition,startButtonYposition,startButtonXsize,startButtonYsize);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	text('They Got Away!',width/2,200);
	textSize(75);
	fill(0,0,0)
	text('Main Menu',width/2,385);
	if(mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
		//print('in');
		fill(255,255,255);
		rect(startButtonXposition,startButtonYposition,startButtonXsize + 125,startButtonYsize + 50);
		fill(0,0,0);
		textSize(100);
		text('Main Menu',width/2,395);
	}else{
		//print('out');
	}
}

function endingGood(){
	scene = 3;
}

function niceWork(){
	if (!victoryMusic.isPlaying() && !victoryhasPlayed) {
		victoryMusic.play();
		victoryhasPlayed = true;
	}

	background(0,200,0);
	rectMode(CENTER);
	fill(255,255,255);
	rect(startButtonXposition,startButtonYposition,startButtonXsize,startButtonYsize);
	textAlign(CENTER);
	textSize(100);
	fill(0,0,0);
	text("You Got 'em!",width/2,200);
	textSize(75);
	text('Main Menu',width/2,385);
	if(mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
		//print('in');
		fill(255,255,255);
		rect(startButtonXposition,startButtonYposition,startButtonXsize + 125,startButtonYsize + 50);
		fill(0,0,0);
		textSize(100);
		text('Main Menu',width/2,395);
	}else{
		//print('out');
	}
}