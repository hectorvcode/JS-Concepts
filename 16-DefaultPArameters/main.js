/**
 * Default Parameters
 */

function sum(a = 0, b = 0) {
  console.log("a is: ", a);
  console.log("b is: ", b);
  return a + b;
}

console.log("The result is ", sum(2, 5));
