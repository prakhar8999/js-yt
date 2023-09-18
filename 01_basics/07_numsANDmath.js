const balance = new Number(100.2494)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const hundred = 1000000
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));

//+++++++++++++++Math++++++++++++++
console.log(Math);
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.0));

console.log(Math.random());//random also return value between 0 and 1

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);