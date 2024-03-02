/*
 * The let declaration declares a block-scoped local variable,
 * optionally initializing it to a value
 */

let a = 6;
console.log(a);

{
  let c = 7;
  console.log(c);
}
//console.log(c)

/*
 * The var statement declares a function-scopoed or globally-scoped variable,
 * optionally initializing it to a value
 */

var b = 5;
console.log(b);

{
  var d = 71;
}
console.log(d);

function func() {
  var e = 7;
  console.log(e);
}
func();

/*
 * Hoisting
 */
console.log(f);
//console.log(g)
let f = 15;
//var g = 20;

//console.log(f)
console.log(g);
//let f = 15;
var g = 20;

/**
 * Cosntants are block-scoped, much like variables declared using the let keyword
 * The value of a constant can't be changed through reassignment
 * and it can't be redeclared
 */

const x = 6;
console.log(x);

{
  const y = 16;
  console.log(y);
}

x = 7;
console.log(x);
