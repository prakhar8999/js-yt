//Immediately Invoked Function Expressions (IIFE)
//To avoid global scope pollution we use IIFE

(function dbConnection() {
    console.log("DB CONNECTED");
})();

//To end the first IIFE function we have to use semicolon ;

( () => {
    console.log("DB CONNECTED TWO");
})();

//Below is the parameter IIFE

( (name) => {
    console.log(`DB CONNECTED TWO for ${name}`);
})("Prak");