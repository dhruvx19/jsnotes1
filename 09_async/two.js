//setInterval()

// const sayDate = function(str) {
//     console.log(str, Date.now())
// }
// const intervalId =  setInterval(sayDate, 1000 ,"hi");


// clearInterval()

// clearInterval(intervalId)


const changeTitle = function(){
     document.querySelector('h1').innerHTML = "chai aur code"
}
const changed = setInterval(changeTitle,2000);



    document.querySelector('#stop').addEventListener('click', function(){
        clearInterval(changed);
        console.log("stopped");
    })


    document.querySelector('#start').addEventListener('click', function(){
        setInterval(changeTitle);
        console.log("started");
    })