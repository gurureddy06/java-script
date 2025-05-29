Numbers
const num = 100
console.log(num);

const newNumber = new Number(100)
console.log(newNumber);

console.log(newNumber.toString().length);
console.log(newNumber.toFixed(2));

const otherNumber = 123.8899
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


Maths

console.log(Math);
// abs is used to change the neagative values to positive
console.log(Math.abs(-4));

console.log(Math.round(4.5));
console.log(Math.ciel(4.5));
console.log(Math.floor(4.5));

console.log(Math.max(4, 3, 4, 5, 6));
console.log(Math.min(3, 4, 5, 6));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);