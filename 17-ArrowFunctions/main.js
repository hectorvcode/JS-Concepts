/**
 * Arrow functions
 *
 * No keyword "function"
 * NOT hoisted
 * Has no "this"
 */

const sum = function (a, b) {
  return a + b;
};

console.log(sum(5, 6));

const sum1 = (a, b) => {
  return a + b;
};
console.log(sum1(5, 6));

const sum2 = (a, b) => a + b;
console.log(sum2(5, 6));

const double = function (a) {
  return a * 2;
};
console.log(double(5));

const double1 = (a) => {
  return a * 2;
};
console.log(double1(6));

const double2 = (a) => a * 2;
console.log(double2(7));

const sayHello = function () {
  console.log("Hello");
};
sayHello();

const sayHello1 = () => console.log("Hiho");
sayHello1();
