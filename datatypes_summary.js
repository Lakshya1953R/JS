//  Primitive 

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 3456789123456789n



// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "lakshya",
    age : 18,
}

const myFunction = function(){
    console.log("hello world"); 
}
console.log(typeof myObj );






// ++++++++++++++++++++++++++++++

// Memory types : Stack (primitive), Heap (Non Primitive)

let myYoutubename = "lakshya"

let anothername = myYoutubename
anothername = "lol"
console.log(myYoutubename);
console.log(anothername);

let userone = {
    email: "lakshya@gamil.com",
    upi: "user@ybl"
}
let userTwo = userone 
userTwo.email = "lol@google.com"
console.log(userone.email);
console.log(userTwo.email)