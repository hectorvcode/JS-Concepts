//An object with some properties
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

//Use Object.entries() to get an array of key-value pairs
const entries = Object.entries(person);
console.log(entries);

//Iterate over the key-value pairs
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

const point = {
  x: 1,
  y: 2,
  z: 3,
};

console.log(Object.entries(point));
