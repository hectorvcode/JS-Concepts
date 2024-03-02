console.log("complex datatypes");

/**
 * Objects
 */

const obj = {
  name: "Jon",
  age: 33,
  isEmployed: true,
  friends: ["Mike", "Jack"],
  address: {
    street: "Pine",
    house: 4,
  },
};

console.log(obj.age);
console.log(obj["name"]);

const property = "age";
console.log(obj[property]);

console.log(obj.address.house);

/**
 * Arrays
 */

const arreglo = [1, "string", true, [1, 2, 3], { key: "age" }];

console.log(arreglo[1]);
console.log(arreglo[4].key);

console.log(arreglo.length);

//Complex Datatypes: A variable assigned to an object stores not hte object itself but its "address in memory" - in other words "a reference" to it
let a = 5;
let b = a;
a = 7;
console.log(a, b);
