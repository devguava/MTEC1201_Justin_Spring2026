function setup() {
  createCanvas(800, 600);
}

function draw(){
  background(128,128,128);

  //Static Line
  line(0,0,400,300);

  //Dynamic Line
  line(400,300,mouseX,mouseY);

  //Dynamic Line
  ellipse(mouseX,mouseY,mouseX,mouseY);
}