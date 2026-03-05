let tuna;

let opacity = 0;
let fade = 1;

function preload(){
  tuna = loadImage("images/tuna.png")
}
function setup() {
  createCanvas(500, 500);
  background(200);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(88);
}

function draw() 
{
  background(220);

  fill (opacity);
  text("FISH!", mouseX, mouseY);
  size += fade;
  textSize(size)
  opacity += fade;
  if(opacity > 255 || opacity < 0)
  {
    fade = -fade;
  }
  // image(tuna, width/5, )
}
