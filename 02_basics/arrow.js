//explicit reutrn
const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))


//implicit return
const addTwo1 = (num1,num2) =>  num1 + num2

console.log(addTwo1(3,4))


const addTwo2 = (num1,num2) =>  (num1 + num2)

console.log(addTwo2(3,4))


// if written in {} return keyword is must but if written in () retrun is not required




const addTwo3 = (num1,num2) => ({username: "dhruv"})
console.log(addTwo3())
// object in implicit function should also be inside () parenthesis
// else undefined is returned


//eg
const myArray = [2,3,4,5,]
myArray.forEach(() => {})
