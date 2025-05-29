const accountId = 143333
let accountEmail = "guru@gmail.com"
var accountPassword = "1234"

/* 
prefer not to use var 
because of issue in block scope and functional scope
*/

accountCity = "chennai"
let accountState;

//if we do not declare any value the it prints as undefined

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountState])
