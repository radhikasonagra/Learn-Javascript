// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Radhika",
    "full name": "Radhika Sonagra",
    [mySym]: "mykey1",
    age: 22,
    location: "Morbi",
    email: "radhika@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);



JsUser.greeting = function(){
    console.log("Hello JS user");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   
}



console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

JsUser.email = "radhika@chatgpe.com"
 Object.freeze(JsUser)
JsUser.email = "radhika@microsoft.com"
console.log(JsUser);


