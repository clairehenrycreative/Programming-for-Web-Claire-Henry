function setup() {
    createCanvas(400, 400);
    background(240);
  }
  
  function draw() {
    rectMode(CENTER);
    fill(random(1000), random(1000), random(1000), 100);
    rect(random(400), random(400), 40, 10);
  }