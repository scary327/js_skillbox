function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let n = -100;
let m = 100;
let count = 100;
let a = [];

for (let i = 0; i < count; i++) {
    a.push(getRandomInt(Math.min(n, m), Math.max(n, m)));
}

console.log(a);