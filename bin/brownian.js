var x;
var y;
const circleSize = 1;
const maxJump = 5;

function setup() {
    
    createCanvas(640, 480);
    x = width/2;
    y = height/2;
    
    // frameRate (60);
}

function draw() {
    
    // background (0);
    stroke(50);
    fill(100);
    ellipse (x, y, circleSize, circleSize);
    
    x = x + random (-maxJump, maxJump);
    y = y + random (-maxJump, maxJump);
    
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > width) x = width;
    if (y > height) y = height;
    
}