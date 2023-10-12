const num = [1,2,3,4]
const myTotal = num.reduce(function (acc, currval) {
    console.log(`acc : ${acc} and currVal : ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);

const total = num.reduce( (acc,curr) => acc+curr, 0)
console.log(total);