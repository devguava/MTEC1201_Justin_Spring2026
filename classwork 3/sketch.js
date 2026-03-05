let r = 255;
let g = 255;
let b = 255;
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() 
{
  background(r, g, b);
  if (mouseX > width / 2) //Test 1
  {
    fill(255, 0, 0);
    ellipse(width/2, height/2, 100, 100);
    print("TEST 1 IS TRUE");
    ellipse(width/4, height/2, 50, 50);
  }
  else if (mouseY > height /2) //Test 2
  {
    fill(0);
    rect(width/2, height/2, 100, 100);
    print("TEST 2 IS TRUE");
    rect(width/2, height/4, 50, 50);
  }
  else
  {
    fill(255);
    rect(width/2, height/2, 100, 100);
    print("TEST 1 AND TEST 2 ARE BOTH FALSE")
  }
}
function mousePressed()
{
  r = random(255);
  g = random(255);
  b = random(255);
  print("RED: " + r);
  print("GREEN: " + g);
  print("BLUE: " + b);
}