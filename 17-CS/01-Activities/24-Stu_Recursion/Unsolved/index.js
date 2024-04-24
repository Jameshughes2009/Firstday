// TODO: Add a comment describing what the `position` parameter means for this function.
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  if (position < 2) {
    return position;
  }
  //This conditional statement checks if the position provided is less than 2. If it is, the function returns the position itself. This likely serves as the base case for the Fibonacci sequence, where the first two numbers are typically 0 and 1.

  // TODO: Add a comment describing the purpose of this return statement.
  return fibonacci(position - 1) + fibonacci(position - 2);
}; // position is the variable in the line as it occurs 

// TODO: What will this return?
console.log(fibonacci(11));
// 34
//The return statement within the fibonacci function calculates the Fibonacci number for a given position by recursively summing the values of the Fibonacci numbers at positions position - 1 and position - 2.

//For example, fibonacci(9) will recursively compute the Fibonacci numbers until it reaches the base case (position < 2), and then it will start summing up the values for positions 8 and 7, then 7 and 6, and so on until it reaches the base case for each recursive call. Finally, it will return the sum of Fibonacci numbers at positions 8 and 7.

//So, fibonacci(9) will return 34.
// alwast add the last values together

// 0, 1, 2, 3, 5, 8, 13, 21, 34, 55