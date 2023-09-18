let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log( typeof myDate);

//Month in javascript start with 0
let myCreatedDate = new Date(2023,0,8)
console.log(myCreatedDate.toDateString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreatedDate.getTime());