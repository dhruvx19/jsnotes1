const userEmail = "dhruv@gmail.com"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("no user email");
}
//"dhruv@gmail.com" truthy value - value which we assume to be true



const userEmail1 = ""

if (userEmail1) {
    console.log("got user email");
} else {
    console.log("no user email");
}
//falsy value ""
//values which we assume to be false


const userEmail2 = []

if (userEmail2) {
    console.log("got user email");
} else {
    console.log("no user email");
}
//[] empty array truthy value


//falsy value - false, 0, -0, BigInt 0n, "" ,null , undefined, NaN
//truthy value - "0", 'false'(false in string) , " " , [] ,{} , function(){}



if (userEmail2.length === 0){
    console.log(" user email empty");
}
//to check array is empty or not


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log(" object user email empty");
}

//to detect a object is empty or not use Object.keys to convert object to array and then use .length property


false == 0 //true
false == '' //true
0 == '' //true



// NULLISH COALESCING OPERATOR (??) : null undefined
