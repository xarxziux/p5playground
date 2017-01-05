const RADIUS = 80;
const PADDING = 20;
const WINDOWCENTRE = RADIUS + PADDING;
const ANGLEINC = 4;
const SHADOWCOUNT = 15;
const SPEED = 20;
var angle = 0;

function setup() {
    
    createCanvas (WINDOWCENTRE * 2, WINDOWCENTRE * 2);
    frameRate (SPEED);
    angleMode (DEGREES);
    
}

function draw() {
    
    background (0);
    
    for (let i = 0; i < SHADOWCOUNT; i++) {
        
        line (WINDOWCENTRE, WINDOWCENTRE,
                WINDOWCENTRE + (RADIUS * cos (angle - (ANGLEINC * i))),
                WINDOWCENTRE + (RADIUS * sin (angle - (ANGLEINC * i))));
        stroke ((255 * (SHADOWCOUNT - i))/SHADOWCOUNT);
        
    }
    
    angle = angle + ANGLEINC;
    angle = angle % 360;
    console.log ('angle = ' + angle + ', sine = ' + sin (angle) + 
            ', cosine = ' + cos (angle));
    
}