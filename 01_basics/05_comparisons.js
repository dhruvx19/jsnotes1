console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

//the reason is that an equality check == and comparisons ><>= <= work differently
//comparisons convert null to a number treating it as zero 0

console.log(undefined == 0);  //false
console.log(undefined > 0);   //false
console.log(undefined >= 0);  //false


// === checks value as well as data types

console.log("2" === 2);

//write clean code to avoid these errors