// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

/**
 * syntax for highwe oder datat types
 * array []
 * object = {}
 * 
 * key: value 
 * obj = {key1: val1, Key2: val2,....}
 */

// To access a property's value that is a string, number or boolean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log("name", planet.name);
console.log("age", planet.age);
console.log("plant", planet)

// Uses bracket notation and logs "Earth"
console.log(planet["name"]);
