function setup() {
	createCanvas(400, 400);
}

function draw() {
    if (mouseIsPressed) {
      fill(100);
      stroke (10)
    } else {
      noFill();
      noStroke();
    }
    ellipse(mouseX, mouseY, 80, 80);
  }