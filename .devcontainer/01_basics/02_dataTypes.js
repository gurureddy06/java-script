let name = "guru"
let age = 21
let isLoggedIn = false

/*

primitive data types

Number => 2 to power 53
BigInt
String => ""
Boolean => true/false
null => standalone value
undefined
Symbol => unique

Non-primitive data types

Array
Objects
Functions

*/
console.log(typeof undefined); //undefined
console.log(typeof null); //object

// ******* Memories ******* //

// stack (Primitive), Heap (Non-Primitive)

//primitive datatypes are stored in stack memory 

let myName = "guru"

let anotherName = myName
anotherName = "partiv"

console.log(anotherName);
console.log(myName);

let userOne = {
    email_id : "guru@gmil.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "partiv@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

/*

Feature	                Stack	                       Heap
Stores	       Primitives & references	        Objects, arrays, functions
Size	         Small and limited	              Large and dynamic
Speed	                Fast	                  Slower than stack
Allocation	  Automatically via call stack	    Dynamically when needed

*/
