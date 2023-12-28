// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }



// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// for(let ijk=0;ijk<10;ijk++){
//     console.log(ijk);
// }

// const myarr=["ddg","dsgg","dgdvcxv"]

// for (const num of myarr) {
//     console.log(num);
// }
// Map

const map=new Map()
map.set("a","1")
map.set("b","2")
map.set("c","1")

// console.log(map)

for (const [key,value] of map) {
    console.log(key ,":-",value)
}

// const myarr=["ddg","dsgg","dgdvcxv"]
const myarr=[{
    name:"ch",
    class:"b"
},
{
    name:"chi",
    class:"bi"
},
{
    name:"chir",
    class:"bir"
},]

myarr.forEach((bh)=>{
    console.log(bh);
})

const nums=[1,2,3,4,5,6,7,8,9]

const newnums= nums.filter((item)=> {return item>3})

console.log(newnums)