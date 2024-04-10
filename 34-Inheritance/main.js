//Inheritance example
//Define a parent class named Animal

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

//Define a subclass named Dog that extends Animal class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  //Override the makeSound method for Dog
  makeSound() {
    console.log(`${this.name} barks`);
  }

  //Add a new method specific to Dog
  fetch() {
    console.log(`${this.name} is fetching`);
  }
}

//Instantiate a new Dog object
const myDog = new Dog("Rex", "Golden Retriever");

//Call methods from both the parent class and subclass
myDog.makeSound();
myDog.eat();
myDog.fetch();

//You can also check an instance's prototype using instance of
console.log(myDog instanceof Animal);
console.log(myDog instanceof Dog);

/**
 * Video
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  }
}

class CoderJS extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  code() {
    console.log(`${this.firstName} is coding on JS`);
  }
}

const anna = new CoderJS("Anna", "Dou");
anna.code();
anna.sayName();
