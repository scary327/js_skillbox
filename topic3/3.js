function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
}

function getIndex(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) return `Индекс элемента = ${i}`;
    }

    return 'Элемент не найден';
}

let count = 7;
let a = [];
let n = 8;

for (let i = 1; i < count + 1; i++) {
    a.push(i);
}

console.log(getIndex(a, n));