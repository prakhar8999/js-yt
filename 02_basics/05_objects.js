const Omegleuser = {
    name : "Prak",
    pin : 208015,
    loggedIn : true,
    gender : "Male"
}

//If we need to print same value from object mutiple time, we can use below method it is know as destructuring

const {name} = Omegleuser
console.log(name);