const john = {
  name: "John",
  age: 25,
  getOlder() {
    this.age++;
  },
};

john.getOlder();
john.getOlder();
console.log(john);
