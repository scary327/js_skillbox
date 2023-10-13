function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
}

let count = 7;
let a = [];

for (let i = 1; i < count + 1; i++) {
    a.push(i);
}

console.log(shuffle(a));