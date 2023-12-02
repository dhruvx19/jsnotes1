//dates are **objects in js


let myDate = new Date()
console.log(myDate);   
console.log(myDate.toString());   //easy to understand 
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());


let myCreatedDate = new Date(2023, 0, 23)   //month starts from zero i month has two digit then starts with 1 like 01 is january while 0 is january
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()   //quiz poles

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));    //interview convert to second / by 1000
