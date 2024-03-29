// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];
//for (const value if valuesArr)
for (const song of songs) {
  console.log(song);
}//other way to display data in js {do what you want}
// strings can be treated as Arrays 

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log('\n================================================\n');

// 2. Using multidimensional arrays
const moreSongs = [
  ['Bad Guy', 1],
  ['The Wheels on the Bus', 2],
  ['Friday', 3],
  // "hello"
];

// for of loop
for (const song of moreSongs) {
  console.log(`${song[0]}'s chart position is ${song[1]}`);
}

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/

// const otherSongs = [
//   {
//     song
//   }
// ] contunie when rewatching class