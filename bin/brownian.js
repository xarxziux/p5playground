var x = 0;
var y = 0;
var oldx = 0;
var oldy = 0;

const circleSize = 1;
const maxJump = 15;
const scrWidth = 640;
const scrHeight = 480
const speed = 60;

function setup() {
    
    createCanvas (scrWidth, scrHeight);
    x = scrWidth/2;
    y = scrHeight/2;
    
    frameRate (speed);
}

function draw() {
    
    stroke(50);
    
    oldx = x;
    oldy = y;
    x = x + random (-maxJump, maxJump);
    y = y + random (-maxJump, maxJump);
    
    if (x < 0) x = -x;
    if (y < 0) y = -y;
    if (x > scrWidth) x = (scrWidth * 2) - x;
    if (y > scrHeight) y = (scrHeight * 2) - y;
    
    line (x, y, oldx, oldy)
    
}