/*
Midterm Project
Sketch Title: Case Chase by Justin Roldan
This project is gonna be a small interactive game where you have to avoid being caught for a certain amount of time. Use WASD to move the character.

References:
[Changing scenes P5 JS] https://www.youtube.com/watch?v=RlsRQS5qFSY (This demostarts how to add and change scene to scene)
[Beginner's Guide: Make things move with keyboard input in P5js] https://www.youtube.com/watch?v=MA_aFQV9vss (This demostrates how to properly control our character and using classes)
*/

let startButtonXposition = 1280/2;
let startButtonYposition = 720/2;
let startButtonXsize = 400;
let startButtonYsize = 100;
let player;
let chaser;
let playerX = 120;
let playerY = 125;
let chaserX = 1115;
let chaserY = 125;
//This varible is a map to our key presses. It is currently set as an empty Java object.
let pressedKeys = {};
let scene = 0;

function setup(){
	createCanvas(1280,720);
	player = new Player(playerX,playerY);
	chaser = new Chaser(chaserX,chaserY);
}

function draw(){
	//print('"Mouse Axis" X:',mouseX,'Y:',mouseY);
    if(scene === 0){
	    titleScene();
    }else if(scene === 1){
        gameScene();
    }else if(scene === 2){
		gameOver();
	}else if(scene === 3){
		gameWin();
	}
}

function titleScene(){
	// scene = 0
    background(107,166,249);
    rectMode(CENTER);
    rect(startButtonXposition,startButtonYposition,startButtonXsize,startButtonYsize);
    textAlign(CENTER);
    textSize(100);
    text('CASE CHASE',width/2,200);
    textSize(75);
    text('START',width/2,385);
	if(mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
        //print('in');
	    rect(startButtonXposition,startButtonYposition,startButtonXsize + 25,startButtonYsize + 25)
	    textSize(100);
        text('START',width/2,395);
	}else{
	    //print('out');
	}
}

function mousePressed(){
	if(scene == 0 && mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
		print('Game Start');
		gameScene();
	}
	// if(scene == 3 && mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
	// 	print('Main Menu');
	// 	titleScene();
	// }
}

function gameScene(){
	print('Time:', millis()/1000)
	scene = 1;
    background(203,153,96);
	textSize(50)
	text('Time:', millis()/1000, 100,10)
	player.update();
	player.draw();
	chaser.update();
	chaser.draw();
	chaserX = chaserX + ((playerX - chaserX) * 5);
    chaserY = chaserY + ((playerY - chaserY) * 5);
	if(playerX > chaserX - (75/2) && playerX < chaserX + (75/2) && playerY > chaserY - (75/2) && playerY < chaserY + (75/2)){
		print('contact')
		scene = 2
	}

	if(millis()/1000 > 15){
		print('Time Up')
		scene = 3
	}
}

function keyPressed() {
	pressedKeys[key] = true;
}

function keyReleased() {
	delete pressedKeys[key];
}

//This is our player templete, meaning we can duplicate it with just typing the class name rather then copying and pasting it's code into another function.
class Player{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.speed = 7;
	}
	update(){
		//print('"Player Axis" X:',this.x,'Y:',this.y);
		let mvmt = createVector(0,0);
		if (pressedKeys.w){
			mvmt.y -= 1;
			//print('Up');
		}
		if (pressedKeys.s){
			mvmt.y += 1;
			//print('Down');
		}
		if (pressedKeys.a){
			mvmt.x -= 1;
			//print('Left');
		}
		if (pressedKeys.d){
			mvmt.x += 1;
			//print('Right');
		}
		//this sets the movement's magnitude to be capped to it's speed. This helps avoid us going over our top speed when going diagonally.
		mvmt.setMag(this.speed);
		this.x += mvmt.x;
		this.y += mvmt.y;
	}
	draw(){
		fill(0,0,255)
	    circle(this.x,this.y,50);
	}
}

class Chaser{
		constructor(x,y){
		this.x = x;
		this.y = y;
		this.speed = 5;
	}
	update(){
		print('"Chaser Axis" X:',this.x,'Y:',this.y);
		let mvmt = createVector(0,0)
		mvmt.setMag(this.speed);
		this.x += mvmt.x;
		this.y += mvmt.y;
	}
	draw(){
		fill(255,0,0);
	    circle(this.x,this.y,75);
	}
}

function gameOver(){
	scene = 2;
	background(0,0,0);
	text("You've been caught!",width/2,height/2);
}

function gameWin(){
	scene = 3;
	background(0,255,0);
    rectMode(CENTER);
	fill(255,255,255)
	rect(1280/2,720/2,400,100);
	fill(0,0,0)
    textAlign(CENTER);
    textSize(100);
    text('You Made It Out!',width/2,200);
    textSize(50);
    text('Main Menu',width/2,380);
	if(mouseX > 440 && mouseX < 840 && mouseY > 310 && mouseY < 410){
        //print('in');
		fill(255,255,255)
	    rect(1280/2,720/2,400 + 25,100 + 25)
		fill(0,0,0)
	    textSize(75);
		text('Main Menu',width/2,385);
	}else{
	    //print('out');
	}
}