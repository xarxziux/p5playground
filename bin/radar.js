const radius = 80;
const padding = 20;
const windowCentre = radius + padding;
const angleInc = 4;
const shadowCount = 15;
const speed = 20;
let angle = 0;


function setup() {
    
    createCanvas (windowCentre * 2, windowCentre * 2);
    frameRate (speed);
    angleMode (DEGREES);
    
}


function draw() {
    
    background (0);
    
    for (let i = 0; i < shadowCount; i++) {
        
        line (windowCentre, windowCentre,
                windowCentre + (radius * cos (angle - (angleInc * i))),
                windowCentre + (radius * sin (angle - (angleInc * i))));
        stroke ((255 * (shadowCount - i))/shadowCount);
        
    }
    
    angle = angle + angleInc;
    angle = angle % 360;
    console.log ('angle = ' + angle + ', sine = ' + sin (angle) + 
            ', cosine = ' + cos (angle));
    
}


window.sayHello = function  () {
    
    const helloBox = document.getElementById ('hello');
    helloBox.innerHTML = 'Hello World';
    
};

