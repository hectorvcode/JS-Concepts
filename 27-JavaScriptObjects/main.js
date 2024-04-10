const john = {
  name: "John",
  age: 25,
  getOlder() {
    this.age++;
  },
};

//dot notation
console.log("name: ", john.name);
//bracket notation
console.log("age: ", john["age"]);

//add property
john.language = "JS";

delete john.age;

john.getOlder();
john.getOlder();
console.log("john object: ", john);
