let score = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// "true" => 1; false => 0
// "undefined" => NaN

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// empty string "" => false
// string "guru" => true

let someNumber = true

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

// ***** Operations *****

let str1 = "guru"
let str2 = " reddy"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //32

console.log(+true); //1
console.log(+""); //0

let gameCounter = 100
gameCounter++; //postfix
++gamecounter; //prefix
console.log(gameCounter); // 101

