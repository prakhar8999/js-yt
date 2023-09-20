const marvel = ["Captain America","Iron Man","Black Panther","Black Widow"]
const dc = ["Superman","Spiderman","Batman","Shazam"]

marvel.push(dc);
console.log(marvel);

const allHero = marvel.concat(dc)
console.log(allHero);

//using spread to join two array
const allHeroSpread = [...marvel, ...dc]
console.log(allHeroSpread);

const anotherArray = [1,2,3,4,[1,2,3,4,[4,5,6,9]]]
const flatArray = anotherArray.flat(Infinity)
console.log(flatArray);

//Important methods of array 
//isarray function, of function, from function