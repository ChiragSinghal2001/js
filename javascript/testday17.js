async function getData(){
    	try {
            let datah = await fetch('https://jsonplaceholder.typicode.com/users')
        let datum = await datah.json()
        console.log(datum)
        } catch (error) {
        console.log(error)
        }
}
 getData();

// function test(){
//          a=5
//         let b=5
// }

// test();

// // console.log(b)
// console.log(a)
