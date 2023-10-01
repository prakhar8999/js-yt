//falsy values
//false, 0, -0,  BigInt 0n, "", null, undefined, NaN

///except the above values most of the values are trutsy values


//Nullish Coalescing Operator ( ?? )
let val1
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 20

console.log(val1);

//Ternary operator
//condition ? true : false

10 > 9 ? console.log("true") : console.log("false");