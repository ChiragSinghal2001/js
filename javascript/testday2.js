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

// let newsym =Symbol("kieie");

// const ps={
//     name:"Chirag",
//     email: "Chirag@happy.com",
//     [newsym]: "keie"

// }
// console.log(ps);
// console.log(ps["email"]);
// console.log(ps.email);
// console.log(ps[newsym]);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// console.log(1 === "1");
 

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));