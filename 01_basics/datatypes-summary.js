// Primitive 

// 7 types : String , Number , Boolean , null , undefined , symbol , BigInt

const score = 100   // Number
const scoreValue = 100.3  // Number
const name = "Radhika" // String
const isLoggedIn = false  // Boolean
const outsideTemp = null  // null 
let userEmail;  // undefined

const id = Symbol ('123')  // Symbol
const anotherId = Symbol ('123') // symbol

console.log(id === anotherId);  // false
 
const bigNumber = 37539521429637474n  //bigInt


// Reference (Non primitive)

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]  // Array

// object

let myObj = {
    name: "Radhika",
    age: 22,
}

// function

const myFunction = function(){
    console.log("Hello World");
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory  ( Primitive ) and Heap Memory ( Non-Primitive )

let myYoutubename = "RadhikaSonagra"

let anothername = myYoutubename
anothername = "sonagraRadhika"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "radhika@google.com",
    upi: "user1@ybl"
}

let userTwo = userOne

userTwo.email = "sonagea@google.com"

console.log(userOne.email);
console.log(userTwo.email);

/* Notes:  
         in stack value copy and call 
           heap in use Reference
 */

