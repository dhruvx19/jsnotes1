const clock = document.getElementById('clock')


// this will print time second by second time changes every second
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
    // console.log(date.toLocaleTimeString());
}, 1000)