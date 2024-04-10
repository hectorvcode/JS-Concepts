class Person {
  name = "John Doe";

  say() {
    console.log(`My name is ${this.name}`);
  }
}

const john = new Person();

john.say();
