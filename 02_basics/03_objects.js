//singleton objects are created when object is created by constructor
//object.create

//object literal

//using symbol datatype in objects

const mySym = Symbol("Ok ji")
const myObj = {
    name : "Prakhar",
    age : 22,
    [mySym]: "OK SYMBOL",
    city : "blur",
    pin : 208014
}

// console.log(myObj.name, myObj.pin);
// //below one syntax is a good practice
// console.log(myObj["name"], myObj["pin"], myObj[mySym]);
// console.log(typeof myObj[mySym]);
// console.log(typeof mySym);
// console.log(myObj);

//We can use freeze function to make the object ineditable

myObj.greet = function() {
    console.log("Hello Function");
}

myObj.greetTwo = function() {
    console.log(`Hello Function, ${this.name}`);
}

console.log(myObj.greet());
console.log(myObj.greetTwo());