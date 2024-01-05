// In the we done about promises 

const promisestart = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username: " singhal sahab" , email: "Yourdaddy@hahah.com"});
        }else{
            reject('There was an error');
        }
    },1000)
})

promisestart.then(
    (result)=>{console.log(result)
    return result.username},
).then((username)=>{console.log(username)}).catch(function(error){
    console.log(`We got a problem! ${error}`)
})