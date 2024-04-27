function setup() {
    createCanvas(400, 400, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(10)

    rotateX(200)

    noFill()
    stroke(255)

    for (var i = 0; i <55; i++) {

        var r = map(sin(frameCount/ 2), -1, 200, 100, 200)
        var g = map(i, 0, 50, 100, 200)
        var b = map(cos(frameCount), -1, 1, 200, 100)

        stroke(r, g, b)

        rotate(frameCount / 180)
       
        beginShape()
        for (var j = 0; j<360; j += 20) {
            var go = i * 3
            var a = go * cos(j)
            var b = go * sin(j)
            var c = sin(frameCount * 3 + i * 8) * 65

            vertex(a, b, c)
        }
        endShape(CLOSE)
    }
}