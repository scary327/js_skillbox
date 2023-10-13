function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let n = 0;
let m = 100;

let rand1 = getRandomInt(Math.min(n, m), Math.max(n, m));
let rand2 = getRandomInt(Math.min(n, m), Math.max(n, m));

if (rand1 === rand2) {
    console.log('===');
} else if (rand1 > rand2) {
    console.log('>');
} else {
    console.log('<');
}