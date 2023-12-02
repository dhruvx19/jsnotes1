const user = {
    username: "dhruv",
    price : 999,


  welcomeMessage: function(){
    console.log(`${this.username} ,welcome to website`);
    // this used due to refer current context

    console.log(this)
 }
}

// user.welcomeMessage()
// user.username = "dhru" // value renamed
// user.welcomeMessage()


console.log(this); //{} empty
//current context is empty in node environment but not in inspect 
//global object in browser is window

// function chai(){
//     console.log(this);
// }
// chai()

// function chai1(){
//     let username = "dhurv"
//     console.log(this.username);  //here we get undefined this is used only in object not in function
// }
// chai1()



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const chai = function(){
//     let username = "dhurv"
//     console.log(this.username); 
// }
// chai()

const chai = () => {
    let username = "dhurv"
    console.log(this.username); 
}
chai()

//arrow function and other function has no difference can use this in both function

