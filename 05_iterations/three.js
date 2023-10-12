// const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( (item) => {
//     console.log(item);
// })

const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum.filter( (num) => num>=5)
// console.log(newNums);

const result = myNum.map( (num) => num+10)
console.log(result);

const chain = myNum.map( (num) => num*10).map( (num) => num+1)
console.log(chain);