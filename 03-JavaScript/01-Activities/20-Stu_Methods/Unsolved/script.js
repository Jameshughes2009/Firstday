var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
// It's done when the string `"Canis Major"` is added as the first element of the `constellations` array and no elements are removed. 
constellations.unshift("Canis Major")
console.log("constellations", constellations);

// * It's done when `"Venus"` is removed from the `planets` array.

planets.pop();
console.log("planets", planets);

// var galaxy = [constellations, planets];
// console.log("Galaxy", galaxy)

// var galaxy = [].concat(constellations, planets)
var galaxy = constellations.concat(planets, "black hole", "b1232")
//
// var galaxy = [].concat(1, [2, "Hello"])
console.log ("Galaxyz", galaxy)
// * It's done when the arrays `constellations` and `planets` are joined to form a new array named `galaxy`. The arrays `constellations` and `planets` should not be altered.

// * It's done when the string `"polaris"` is converted into all capital letters and the new string is stored in a variable.
var polaris = star.toUpperCase(); // -> POLARIS
console.log("test",  polaris)

/**
 * unshift/shift -> first ->
 */