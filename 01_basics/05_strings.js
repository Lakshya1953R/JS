const name = "lakshya"
const repoCount =  50

// console.log(name +  repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('laks-hya')

console.log(gameName [2]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase('l'))
console.log(gameName.charAt(2)); // used to know at what place is which word 
console.log(gameName.indexOf('l')); // to know the place number of the word 

const newString = gameName.substring(0, 3); // the word at 3rd place is not inlcuded
console.log(newString);


const anotherString = gameName.slice(-5, 3)
console.log(anotherString)
const newStringOne = "   lakshya "
console.log(newStringOne.trim()); // removes the spaces in the string at start and end

const url = "https://lakshya.com/lakshya%20garg"

console.log(url.replace('%20', '-'));
console.log(url.includes('lak'))

console.log(gameName.split('a'))
