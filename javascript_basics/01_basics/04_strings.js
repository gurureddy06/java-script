const name = "guru"
const rollNo = "06"

console.log(`Hello my name is ${name} and my roll number is ${rollNo}`);

const Name = new String('guru')

console.log(Name[0]);
console.log(Name.__proto__);

//string methods

console.log(Name.toUpperCase());
console.log(Name.indexOf('u'));

console.log(Name.substring(0, 2));
console.log(Name.slice(-4,2));
console.log(Name.trim());

const url = "https://guru.com/guru%20reddy"
console.log(url.replace('%20', '-'));