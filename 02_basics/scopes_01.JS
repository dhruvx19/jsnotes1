
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    c = 40
}

console.log(a);  //a not defined outside   // now a is defined as 300 it will print it
//console.log(b);   //b not defined outside
//console.log(c);      //c is defined outside also has global scope



//globe scope core scope(in console) and scope in code environment in node is different 