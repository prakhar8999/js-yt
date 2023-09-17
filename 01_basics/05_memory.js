//Memory is of two types :
//Stack Memory : It is used in premitive type data types
//Heap Memory : It is used in  Non-primitive data types

let myYTname = "Travel Bug"
let anotherName = myYTname
anotherName = "HitTheRoad"

console.log(myYTname);
console.log(anotherName);

let userOne = {
    email : "user1@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email =  "user2@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);