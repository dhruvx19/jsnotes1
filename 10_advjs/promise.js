const promiseOne  = new Promise(function (resolve, reject){
   // do async tasks
   // cryptography , db calls, network calls

   setTimeout(function() {
     console.log('Async tasks is completed');
     resolve() // used to connect resolve with .then
   }, 1000);
});

promiseOne.then(function(){
    console.log("promise consumed");
});
// callback function is returned



//created in one part rather then 2 part as used above
new Promise(function(resolve, reject){
    setTimeout(function () {
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");
})



//

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username:"chai", email:"chai@example.com "})
    }, 1000);
})
promiseThree.then(function(user){
   console.log(user);
})
promiseThree.then(function(user){
    console.log(user);
 })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function()  {
        let error = true;
        if(!error){
            resolve({username: "dhruv", password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 2000);
})

 