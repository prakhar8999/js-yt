//function definition
function sayMyName (){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("K");
}

//function reference
// sayMyName

// //Function call
// sayMyName()
// sayMyName()

//Function with parameters
function addTwoNum(num1, num2){
    return num1+num2
}

let result = addTwoNum(8,19)
//console.log(result);

//Handling countless arguents
//below ... is the rest operator (  rest and spread operator has same symbol three dots 
//but according to the place where they are used they are named as rest or spread)
function CalculateCartPrice(...num1){
    return num1
} 
//console.log(CalculateCartPrice(100,200,300,400,500,600));

function CalculateCartPrice01(val1, val2, ...num1){
    return num1
} 
//console.log(CalculateCartPrice01(100,200,300,400,500,600));

//Passing Objects
const user = {
    username : "Prak",
    price : 199
}

function anyobj(Obj){
    console.log(`My name is ${Obj.username} and price is ${Obj.price}`);
}
anyobj(user);

//Passing Array
const Arr = [100,200,300,400,500]
function passingArr(newArr){
    console.log(newArr[3]);
}
passingArr(Arr)
