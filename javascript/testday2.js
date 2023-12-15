// let num=123
// let str="Chirag"

const { log } = require("console");

// const id=Symbol(123)
// const anotherId=Symbol(123)

// const myFunction = function(){
//     console.log("Radhe Radhe")
// }
// console.log(id==anotherId)

// myFunction()
// console.log(str)

// const r="helllllo"
// const  s=new String("Hello")

// console.log(s[0])


// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars[10]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// let currDate =new Date();
//  console.log(currDate.toLocaleString())


//  const myarr= new Array(1,2,3,5);

// //  console.log(myarr.slice(3,2));
// //  console.log(myarr);
//  console.log(myarr.splice(3,0,4));
//  console.log(myarr);

let newsym =Symbol("kieie");

const ps={
    name:"Chirag",
    email: "Chirag@happy.com",
    [newsym]: "keie"

}
console.log(ps);
console.log(ps["email"]);
console.log(ps.email);
console.log(ps[newsym]);




