const john = {
  name: "John",
  age: 25,
};

console.log(john);

//dot notation
console.log(john.name);

//bracket notation
console.log(john["age"]);

//add property
john.language = "JS";
console.log(john);

//remove property
delete john.age;
console.log(john);


