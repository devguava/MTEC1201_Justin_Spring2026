function setup() {
  createCanvas(800, 800);
  rectMode(CENTER)
}

function draw() {
  background(220);

  for (let i = width; i >= 0; i -= 150){
    fill(i * 0.35)
    rect(width/2, height/2, i, i)
  }
}
