let angle = 0;
let rotateBy = 8;

function setup () {
    createCanvas(600, 600);
    background('#76b5c5');
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse (alt - 75, alt + 75, 10, 10, 50, 140, 60, 30);
    ellipse (100, 100, 100);
    stroke('#EAB676');
    strokeWeight(1);
    bezier(alt - 10, alt + 10, 10, 10, 160, 90, 50, 80);
    stroke('#063970');
    strokeWeight(1);
    ellipse (120, 120, 120);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}

function mousePressed() {
    noLoop();
}