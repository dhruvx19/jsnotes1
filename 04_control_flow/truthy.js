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




