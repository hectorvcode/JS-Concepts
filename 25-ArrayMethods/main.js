/**
 * join()
 */

const substrings = ["JavaScript", "Pyton", "Go"];
const defaultSeparator = substrings.join();
const spaceSeparator = substrings.join(" ");
console.log("defaultSeparator", defaultSeparator);
console.log("spaceSeparator", spaceSeparator);

/**
 * includes()
 */

const arr = [1, 2, 3];
console.log("does arr include 1", arr.includes(1));
console.log("does arr include 5", arr.includes(5));

/**
 * indexOf()
 * arr.indexOf(element, startIndex)
 */

const animals = ["ant", "bison", "camel", "duck", "bison"];

console.log(animals.indexOf("bison"));

console.log(animals.indexOf("bison", 2));

console.log(animals.indexOf("giraffe"));

/**
 * push()
 */

const arr1 = [1, 2, 3];
arr1.push(4);
console.log("first push", arr1);
arr1.push(5, 6, 7);
console.log("second push", arr1);

/**
 * pop()
 */

const arr2 = [1, 2, 3, 4, 5];
console.log("pop1", arr2.pop());
console.log("pop2", arr2.pop());
console.log(arr2);

/**
 * unshift()
 */

const arr3 = [1, 2, 3];
arr3.unshift(4);
console.log("first unshift", arr3);
arr3.unshift(5, 6, 7);
console.log("secord unshift", arr3);

/**
 * shift()
 */

