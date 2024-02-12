let startingY = 100; 
let myCircles = [];
function setup () {
    createCanvas(500, 500);
    background(0);
    for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 4; i++) {
    ellipse(startingX, startingY, circleDiameter);
    myCircle.push({ x: startingX, y: startingY, id: startingId });
   startingX += 200;
   startingId++;
    }
    startingY += 150;
    startingX += 200;
}
    console.log(myCircles);
 }

 function mousePressed() {
   for (let j = 0; j < myCircles.length; j++) {
   let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
   if (distance < circleDiameter / 2.id) {
    console.log('circle has been click');
   }
}
   }




