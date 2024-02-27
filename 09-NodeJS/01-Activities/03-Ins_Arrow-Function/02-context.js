// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object

var person = {
  name: "Hodor",
  saySomething: function() {
    console.log("3",this.name + " is thinking...");
    setTimeout(function() {
      console.log("4", this.name + "!");
    }, 100);
  }
};
// this results in the context being separted from the timer call as it will not allow the conect to change levels

person.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later

// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created

//function {} if this is not in the expression the name will be passed down
// the upper level of the express is where function needs to be
// Note: have to use explicit function() declaration to pass down scope
// using only ()
var person = {
  name: "Hodor",
  saySomething: function() {
    console.log("1",this.name + " is thinking...");
    setTimeout(() => console.log("2",this.name + "!"), 100);
  }
};
// this will presevre the upper connext of element while running a function

person.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later
