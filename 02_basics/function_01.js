function sayMyName(){ 
    console.log("Dhruv");
}
//sayMyName("dhruv");

function addTwoNumbers(number1, number2){  //parameters
    console.log (number1 + number2);
}

// addTwoNumbers(3,5);   //8
// addTwoNumbers(3,"a") //3a
// addTwoNumbers(3, null) //3    //null,5 are arguments
// addTwoNumbers(3,  undefined)  //NaN

const result = addTwoNumbers(3,5)  //here 8 is stored but not in const result
console.log(result);  //undefined this shows 8 is not stored in result


function addTwoNumbers2(number1, number2) {
    // let result = number1 + number2
    //return result
    return number1 + number2
}

const result2 = addTwoNumbers2(3,5)
console.log(result2); //now 8 is stored


//----------------------------------------------------------------

function  loginUserMessage(username){
    return `${username} just logged in `
}

console.log(loginUserMessage("dhruv"))

//loginUserMessage("dhruv") alone cannot generate result

console.log(loginUserMessage())  //undefined


function  loginUserMessage1(username1){   //can write username = "dhruv" also if nothing given in arguments print dhruv else overwrites it
    if(username1 === undefined) { //or !username
        console.log("Please enter a username")
        return
    }
    return `${username1} just logged in `   //this will no execute
}
console.log(loginUserMessage1())