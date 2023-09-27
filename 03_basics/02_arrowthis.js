const user = {
    userName : "Prak",
    price : 999,
    WelcomeMsg : function() {
        console.log(`Welcome Mr./Mrs. ${this.userName}`);
    }
}

user.WelcomeMsg();
user.userName = "Shahrukh"
user.WelcomeMsg();
console.log(user.userName);

//Arrow Function
//Explicit return : when we use return keyword

// const AddTwoNum = (num1 ,num2) => {
//     return num1+num2
// }

//Implict return : when we do not return keyword

//const AddTwoNum = (num1 ,num2) => num1 + num2 
const AddTwoNum = (num1 ,num2) => (num1 + num2)
console.log(AddTwoNum(19,18));