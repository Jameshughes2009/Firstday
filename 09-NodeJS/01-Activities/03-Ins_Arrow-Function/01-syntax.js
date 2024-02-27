// All of the `createGreeting` functions are equivalent
var createGreeting = function(message, name) {
  return message + ", " + name + "!";
};
// the "return" part will assign and display what every vales are set for message and 

// We can safely swap out function expressions with arrow functions most of the time
// (explicit retunr - recommend)
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};
// => this can be used to call functions without having to type fuction musy be placed after the "paramters"
// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
//(implicit retirn - not recommended )
var createGreeting = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = (greeting) => console.log("greeting is",greeting);

// We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "Angie");
//greeting = "Hello, Angie"

// Logs "Hello, Angie!";
greet(greeting);
//Both with consle log a greet 
console.log(greeting)
