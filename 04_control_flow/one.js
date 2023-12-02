//if


// if(true){

// }

// if(false){

// }


// const score = 200

// if(score > 100){
//     const power = "fly"    
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);     //no value as scope is inside loop if use var then it will execute this statement

 

// const balance = 1000

//if (balance > 500) console.log("test"), console.log("test2");
//it will print test and test2 but not good way to write code

// if (balance < 500){
//     console.log("less than 500");
// } else if(balance > 500){}



const userLoggesIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromFacebook = false

if(userLoggesIn && debitCard){
    console.log("allowed");
}
if(loggedInFromGoogle || loggedInFromFacebook){
    console.log("allowed");
}

