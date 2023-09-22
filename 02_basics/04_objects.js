//const omegleuser = new Object()

const Omegleuser = {}

Omegleuser.name = "Prak"
Omegleuser.pin = 208015
Omegleuser.loggedIn = true
Omegleuser.gender = "Male"

//console.log(Omegleuser);

const regUser = {
    email : "wprak@gmail.com",
    fullname : {
        username : {
            firstname : "Prak",
            lastname : "Shukla"
        }
    }
}

//console.log(regUser.fullname.username.firstname);

//Combine Two Array
const obj1 = {1:"a", 2:"b"}
const obj2 = {4:"a", 3:"b"}

//const obj3 = Object.assign({}, obj1, obj2)
//Giving empty {} while combining two object is a good practise. It ensured that the targe is object only
//console.log(obj3);

//Another way to cobine using spread method sameas array
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

//Blow mthod is used to goe keys of object in an array
const keyy = Object.keys(Omegleuser)
console.log(keyy);
//Same way we can talke values
const val = Object.values(Omegleuser)
console.log(val);

//Beow method will show whether key exist or nor return type boolean
console.log(Omegleuser.hasOwnProperty("loggedIn"));