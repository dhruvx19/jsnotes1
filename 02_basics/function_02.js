//if arguments is not known like in shopping cart user enters items and u have to add price 
//pass multiple values in function

function calculateCartPrice(...num1){
    return num1;

}
// ... called as rest and spread depend on usecase
// rest pack in  bundle and return

console.log(calculateCartPrice(200,400,500)) //prints only 200
// ...num1 now prints [ 200, 400, 500 ]


function cart(val1, val2, ...num2){
    return num2;
}

console.log(cart(200,400,500)) //****prints only 500 val1=200 , val2=400


// HOW TO HANDLE OBJECT IN FUNCTION

const user = {
    username: "dhruv",
    price: 199
}
function user1(anyobject){
 console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

user1(user)