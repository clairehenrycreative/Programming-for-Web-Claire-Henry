let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for (let i = 0; i < 400; i += 7) {
    noFill();
    stroke('navy');
    strokeWeight(3);
    ellipse(200, 200, i, i);
    
    stroke('aqua');
    strokeWeight(2);
    ellipse(x, 200, 400 - i, 400 - i);
  }

  if (x > width) {
    x = 0;
  } else {
    x += 3;
  }
}