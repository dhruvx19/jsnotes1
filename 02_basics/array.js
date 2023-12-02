const myArr = [0,1,2,3,4,5]
console.log(myArr[1]);

//shallow copy same reference point
//deep copy do not share the same reference point

const myHeros = ["s","n"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);

//methods

myArr.push(6)
myArr.pop()
console.log(myArr);

myArr.unshift(8)  //enters value at the start and shift all the values in array complex
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));


