/*
Title: Ball Pit!
[7.6: Checking Objects Intersection Part I - p5.js Tutorial by The Coding Train - https://youtu.be/GY-c2HO2liA?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA & 7.7: Checking Objects Intersection Part II - p5.js Tutorial by The Coding Train - https://editor.p5js.org/cs4all/sketches/rkTiCahGE & How to Use Arrays and Objects in p5js by Professor Chris - https://youtu.be/TZG7Koe0Yu0] Taught me how to check for objects intersecting and using arrays for classes
[bouncing ball all four walls by cs4all - https://editor.p5js.org/cs4all/sketches/rkTiCahGE] Showed how to get a ball to bounce off all four walls.
*/
let balls = [];

function setup() {
  createCanvas(800, 800);
  //This determines how many balls I want it to display.
  for(let i = 0; i < 20; i++){
    //This for loop will spit out the the amount of balls that have a set range of randomized properties
    balls[i] = new ball(random(50,750), random(50,750), random(5,25), random(1,10), random(1,10));
  } 
}

function draw() {
  background(0);
  //This draws the ball class and it's other functions
  for(let i = 0; i < balls.length; i++){
    balls[i].display();
    balls[i].wallBounce();
    //Checks for each ball interaction
    for(let j = 0; j < balls.length; j++){
      if (i != j && balls[i].collide(balls[j])){
        balls[i].ballBounce();
        balls[j].ballBounce();
        balls[i].ballColor();
        balls[j].ballColor();
      }
    }
  }
}

class ball{
  constructor(tempX, tempY, tempRadius, tempXSpeed, tempYSpeed){
    this.x = tempX;
    this.y = tempY;
    this.xSpeed = tempXSpeed;
    this.ySpeed = tempYSpeed;
    this.xDirection = 1;
    this.yDirection = 1;
    this.radius = tempRadius;
    this.colorFill = color(255)
  }
  //Properties for the class's display
  display(){
    ellipseMode(RADIUS);
    fill(this.colorFill)
    ellipse(this.x, this.y, this.radius);
  }
  //This allows the object to bounce off walls
  wallBounce(){
    //Increments or deincrimates the ellipses' x-axis and y-axis position 
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    //Determins if the object is contacting with the window's border
    if (this.x > width - this.radius || this.x < 0 + this.radius){
      this.xSpeed *= -this.xDirection;
    }

    if (this.y > height - this.radius || this.y < 0 + this.radius){
      this.ySpeed *= -this.yDirection;
    }
  }

  //This function detects if the balls are colliding with each other
  collide(other){
    let d = dist(this.x, this.y, other.x, other.y);
    
    if (d < this.radius + other.radius){
      return true;
    }
    else{
      return false;
    }
  }
  //This function is returned as a true statement for the collide function, making it change direction
  ballBounce(){
    this.xSpeed *= -this.xDirection;
    this.ySpeed *= -this.yDirection;
  }
  //This function will return as a true statement for the collide function, making it change color
  ballColor(){
    this.colorFill = color (random(0,255), random(0,255), random(0,255))
  }
}
