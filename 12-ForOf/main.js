/**
 * for...of
 */

const arr = [1, 2, 3, 4, 5];
let sum = 0;

/* for (let el of arr) {
  console.log(el);
} */

for (let el of arr) {
  sum += el;
}

console.log(sum);
