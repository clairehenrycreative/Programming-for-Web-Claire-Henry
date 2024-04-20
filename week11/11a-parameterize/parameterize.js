let x = 200;
let y = 200;
let xspeed = 5;
let yspeed = 7;
let ballColor;

function setup() {
    createCanvas(400, 400);
    ballColor = color(random(255), random(255), random(255));
}

function draw() {
    background(220);
    fill(ballColor);
    ellipse(x, y, 60);
    noStroke();
    x += xspeed;
    y += yspeed;

    if (x + 30 > width || x - 30 < 0) {
        xspeed *= -1;
        ballColor = color(random(255), random(255), random(255));
    }

    if (y + 30 > height || y - 30 < 0) {
        yspeed *= -1;
        ballColor = color(random(255), random(255), random(255));
    }
}