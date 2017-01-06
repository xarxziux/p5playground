/*
    
    global createCanvas
    global noLoop
    global stroke
    global rect
    global fill
    
*/

const scrWidth = 640;
const scrHeight = 800;
const blockSize = 10;
const maxGenerations = Math.floor (scrHeight/blockSize);
const wingSize = getWingSize (scrWidth, blockSize);
const wolframKey = 73;
const padding = 2;

function getWingSize (width, block) {
    
    const maxBlocks = Math.floor (width/block);
    return (maxBlocks - 2 + (maxBlocks % 2))/2;
    
}

function initLattice (x) {
    
    const wing = new Array (x).fill (false);
    return wing.concat (true, wing);
    
}

function getNextGen (currentGen, key) {
    
    const firstItem = currentGen[0];
    
    return getNGRecur(
            
            [],
            currentGen [currentGen.length - 1],
            firstItem,
            currentGen.slice(1)
            
    );
    
    function getNGRecur(accum, left, top, right) {
        
        if (right.length === 0)
            return accum.concat (getNextCell (left, top, firstItem, key));
        else return getNGRecur (
                accum.concat (getNextCell (left, top, right[0], key)),
                top,
                right[0],
                right.slice(1)
        );
    }
    
    function getNextCell(left, top, right, key) {
        
        if (!left && !top && !right) return (Math.floor (key/1) % 2) === 1;
        else if (!left && !top && right) return (Math.floor (key/2) % 2) === 1;
        else if (!left && top && !right) return (Math.floor (key/4) % 2) === 1;
        else if (!left && top && right) return (Math.floor (key/8) % 2) === 1;
        else if (left && !top && !right) return (Math.floor (key/16) % 2) === 1;
        else if (left && !top && right) return (Math.floor (key/32) % 2) === 1;
        else if (left && top && !right) return (Math.floor (key/64) % 2) === 1;
        else if (left && top && right) return (Math.floor (key/128) % 2) === 1;
        else  throw new Error('This option should be unreachable');
        
    }
}

function setup() {
    
    createCanvas (scrWidth, scrHeight);
    stroke (0);
    fill (100);
    noLoop();
    
}

function draw() {
    
    let j = 0;
    let nextLattice = initLattice (wingSize);
    
    while (j < maxGenerations) {
        
        let i = 0;
        
        while (i < nextLattice.length) {
            
            if (nextLattice [i]) {
                
                rect (
                        
                        blockSize * i + padding,
                        blockSize * j + padding,
                        blockSize - padding,
                        blockSize - padding
                        
                );
                
            }
            
            i++;
            
        }
        
        nextLattice = getNextGen (nextLattice, wolframKey);
        j++;
        
    }
}