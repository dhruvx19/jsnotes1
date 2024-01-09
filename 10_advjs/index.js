const requestUrl = 'https://api.github.com/users/dhruvx19'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)

//  console.log(xhr.readyState);

// to track continuously

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(data);
        console.log(data.followers);
        // to talk about current context we use this
    }
}
//function executes as the function changes 

xhr.send();

// whenever you get response from url it is in type of string 
// top convert to object and to get data from it we use
// JSON.parse string to JSON