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
const arr4 = [1, 2, 3, 4, 5];
console.log("shift", arr4.shift());
console.log("arr4", arr4);

/**
 * forEach()
 */

const arrayOfName = ["Alice", "Jack", "John", "Jane", "Bob"];

arrayOfName.forEach((name) => console.log(name));

arrayOfName.forEach((name, index) => {
  return console.log(`Element index: ${index} - Element value: ${name}`);
});

arrayOfName.forEach((name, index, arr) => {
  return console.log(`Index: ${index} - Value: ${name} - Array: ${arr}`);
});

/**
 * slice()
 */

const animals1 = ["ant", "bison", "camel", "duck", "elephant"];
const lastThreeElements = animals1.slice(2);
console.log(lastThreeElements);

//end index excludes the element

const betweenElements = animals1.slice(2, 4);
console.log(betweenElements);

const negativeIndex = animals1.slice(-2);
console.log(negativeIndex);

/**
 * splice()
 */

//Adding one element to the array
const animals2 = ["ant", "bison", "elephant"];
const camel = "camel";
/* animals2.splice(1, 0, camel);
console.log(animals2); */

//Using splice with delete
/* animals2.splice(1,1,camel)
console.log(animals2) */

//Adding multiple elements
/* const cat = "cat";
animals2.splice(1, 0, camel, cat);
console.log(animals2); */

//No elements specified
animals2.splice(1, 2);
console.log(animals2);

/**
 * reverse()
 */

const animals3 = ["ant", "bison", "camel", "duck", "elephant"];
const animalsReverse = animals3.reverse();
console.log(`Initial array: [${animals3}]`);
console.log(`Reverse array: [${animalsReverse}]`);

/**
 * sort()
 */

