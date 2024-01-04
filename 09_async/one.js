// setTimeout()
// clearInterval()

//sayDhruv() it executes the function
//sayDhruv it gives referenece to the function

const sayDhruv = function() {
    console.log("dhruv")
};

const changeText = function () {
    document.querySelector('h1').innerHTML = "best js series"

}
const changeMe = setTimeout(changeText,2000);


// to stop event
// use clearTimeout
// on a event


document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log("STOPPED");

})