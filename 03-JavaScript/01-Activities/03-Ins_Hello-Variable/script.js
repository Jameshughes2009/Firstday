// Declares student variable using var keyword 
var studentName;

console.log("pre", studentName); 
//-> declared , but not assigned,
// -> Also not declared, not assigned = undefined
//(string variable with no values defined)

// Uses assignment operator(=) to assign a value
var studentName = "Abdul";
var studentAge = 32;

console.log("Deez Nutes", studentName); // tonya

// To re-assign a variable, use only the variable's name  
studentName = "Tonya";
studentAge = 52;

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Tonya"
console.log("My name is " + studentName);
console.log("My Name is", studentAge);

//logs the person's age and name 

console.log("deez Nuts" + studentName + "ages" +studentAge)

/**
 * // Naming tips
 * one word= lowercasae
 * two wordds = camel case
 * 
 */