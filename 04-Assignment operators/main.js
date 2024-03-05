//Assignment
let x = 42;
console.log("x = ", x);

//arithmetic
let add = x + 4;
console.log(add);

let sub = x - 4;
console.log(sub);

let mul = x * 4;
console.log(mul);

let div = x / 2;
console.log(div);

let mod = x % 5;
console.log(mod);

let pow = x ** 1;
console.log(pow);

let i = 1;
let k = i++;

console.log("k = ", k);
console.log("i = ", i);
console.log("k = ", k);

let j = 1;
j--;
--j;
console.log("j = ", j);

//aditional assignment
const INCREMENT_VALUE = 6;
let value1 = 100;
let value2 = 100;
let value3 = 100;
let value4 = 100;
let value5 = 100;

value1 += INCREMENT_VALUE;
console.log("value1 = ", value1);

value2 -= INCREMENT_VALUE;
console.log("value2 = ", value2);

value3 *= INCREMENT_VALUE;
console.log("value3 = ", value3);

let n = 0;

/**
 * Post-incremento
 * Primero devuelve 0, luego incrementa i a 1
 */

let valor1 = n++;

/**
 * Pre-incremento
 * Primero incrementa i a 2, luego devuelve 2
 */

let valor2 = ++n;

console.log(valor1);
console.log(n);
console.log(valor2);
console.log(n);
