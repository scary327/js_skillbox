let a = 13.123456789;
let b = 2.123;
let n = 5;

a = Math.trunc((a - Math.trunc(a)) * Math.pow(10, n));
b = Math.trunc((b - Math.trunc(b)) * Math.pow(10, n));

console.log(a, b);