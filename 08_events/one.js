// events are sequentially run

//1   
// <img src=""" onclick="alert('owl')

//2
// document.getElementById('owl').onclick = function(){
//     alert('owl')
// }

//3
document.getElementById('owl').addEventListener('click', function(e){
    alert('owl')
    console.log(e)
}, false)


//default false third parameter


//4
//attachEvent()
//internet explorer

//5
//jquery - on event listener

//event object (e)
//PointerEvent
//time at which image was clicked

//type of event
//timestamp
//defaultPrevented in forms it is used
//srcElement 
//target
//toElement
//currentTarget
//clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode speed of keyboard





// Event Propagation
// Event Bubbling and Event Capturing
// false - event bubbling


//target element ids different
document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ui");
}, false)

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked")
    e.stopPropagation()
}, false)

// owl inside the images whcih will be printed first
// output -  owl clicked
//  clicked inside the ui

// bubble - from down to top inner elemnt owl then ul
// capturing -  top to down (true)

document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ui");
}, true)

document.getElementById('prayer').addEventListener('click', function(e){
    console.log("prayer clicked")
}, true)

// clicked inside the ui
// prayer clicked

// e stop propagation
// no bubbling or capturing


//preventDefault
document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked")
}, false)




// click on image and it gets disappered 


document.querySelector('#images').addEventListener('click', function(e){
  console.log(e.target.parentNode);
  let removeIt = e.target.parentNode
  removeIt.remove()
})