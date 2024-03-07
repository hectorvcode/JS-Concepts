/**
 * Closures
 */

//outer
function makeFunction() {
  let a = 1;

  //closure
  return function () {
    console.log("a is " + a);
  };
}

const func = makeFunction();
func();

/* function counter() {
    let a = 0
    return a++
} */

function makeCounter(a) {
  //let a = 0;
  return function () {
    return a++;
  };
}

const counter = makeCounter(4);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
