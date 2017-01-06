/*
    
    global createCanvas
    global frameRate
    global background
    global stroke
    global random
    global line
    
*/

const maxJump = 5;
const scrWidth = 640;
const scrHeight = 480;
const initWidth = 40;
const speed = 5;
const shadow = 10;

let lineArr = [{
    
    x1: ((scrWidth * 2) - initWidth)/4,
    y1: scrHeight/2,
    x2: ((scrWidth * 2) + initWidth)/4,
    y2: scrHeight/2
    
}];

function setup() {
    
    createCanvas (scrWidth, scrHeight);
    frameRate (speed);
    
}

function draw() {
    
    background (255);
    
    lineArr = newHead (lineArr);
    drawLines (lineArr);
    
}

function newHead (arr) {
    
    const head = [{
        
        x1: randomJump (arr[0].x1, scrWidth),
        y1: randomJump (arr[0].y1, scrHeight),
        x2: randomJump (arr[0].x2, scrWidth),
        y2: randomJump (arr[0].y2, scrHeight)
        
    }];
    
    return head.concat (arr.slice (0, shadow));
    
}

function drawLines (arr) {
    
    let i = 0;
    
    while (i < arr.length) {
        
        stroke ((255 * i)/shadow);
        line (arr [i].x1, arr [i].y1, arr [i].x2, arr [i].y2);
        i++;
        
    }
}

function randomJump (x, max) {
    
    return boundary (x + random (-maxJump, maxJump), 0, max);
    
}

function boundary (x, lower, upper) {
    
    if (x < lower) return (lower * 2) - x;
    if (x > upper) return (upper * 2) - x;
    return x;
    
}