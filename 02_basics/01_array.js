//array

const myArr = [0, 1, 2, 3, 4, 5]

//we can have mix datatypes in a single array
const myArr1 = [0, 1, 2, 3, true, "Prak"]

//Array methods
/*myArr.push(899)
myArr.push(7852)
console.log(myArr);
myArr.pop()
console.log(myArr);*/

myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

const myn1 = myArr.join() //Converts an array into string 
console.log(myn1);
console.log(typeof myn1);

//slice, splice
//slice will take out subarray without affeccting original array
console.log(myArr);
console.log(myArr.slice(1,3));
//splice will remove or add values to the array and change the original array
console.log(myArr);
console.log(myArr.splice(1,3));