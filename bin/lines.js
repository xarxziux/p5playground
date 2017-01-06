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
const scrHeight = 480
const speed = 5;
const shadow = 10;

let arr1 = [{x: scrWidth/2, y: scrHeight/2}];
let arr2 = [{x: scrWidth/2, y: scrHeight/2}];

function setup() {
    
    createCanvas (scrWidth, scrHeight);
    frameRate (speed);
    
}

function draw() {
    
    background (255);
    
    arr1 = newHead (arr1);
    arr2 = newHead (arr2);
    drawLines (arr1, arr2);
    
}

function newHead (arr) {
    
    const head = [{
        
        x: arr[0].x + random (-maxJump, maxJump),
        y: arr[0].y + random (-maxJump, maxJump),
        
    }];
    
    return head.concat (arr.slice (0, shadow));
    
}

function drawLines (a1, a2) {
    
    /*
    console.log ('arr1 = ' + JSON.stringify (a1));
    console.log ('arr2 = ' + JSON.stringify (a2));
    console.log ('a1 [0]')
    */
    
    let i = 0;
    
    while (i < a1.length) {
        
        stroke ((255 * i)/shadow);
        line (a1 [i].x, a1 [i].y, a2 [i].x, a2 [i].y);
        i++;
        
    }
}