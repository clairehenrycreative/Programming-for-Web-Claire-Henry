let a = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  for (let i = 0; i < 200; i++) {
    fill(a % 255, 100, a % 100);
    push();
    translate(300, 300);
    rotate(a);
    strokeWeight(8);
    triangle(0, 0, 200, 150, 0, 70);
    pop();
    
    a = a + 8
    ;
  }
}