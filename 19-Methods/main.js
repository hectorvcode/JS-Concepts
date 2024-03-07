const person = {
  firstName: "John",
  lastName: "Doe",
  say() {
    console.log(`Hello ${this.firstName}`);
  },
};

//console.log(person.firstName)
person.say();
