const accountId = 144553
let accountEmail = "radhika@google.com"
var accountPassword = "12345"
accountCity = "Morbi"
let accountIdState;

// accountId = 2 // not allowed

accountEmail = "rs@rs.com"
accountPassword = "121212"
accountCity = "Halvad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountIdState]);
